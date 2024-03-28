import NextAuth from "next-auth/next"
import  CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'your email' },
                password: { label: 'Password', type: 'password' },
              },
              async authorize(credentials){
                //  Check to see if email and password are valid
                if(!credentials.email || !credentials.password) {
                    return null
                }

                const user = await prisma.user.findUnique ({
                    where : {
                        email:credentials.email
                    }
                })
                if(!user){
                    return null
                }

                const passwordsMatch = await bcrypt.compare(credentials.password, user.password)

                if(passwordsMatch) {
                    return user;
                }
              }
        })
    ],
    session:{
        jwt: true,
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    callbacks: {
        async jwt({session, token, user}){
            if(user){
                return {
                    ...token,
                    id: user.id,
                    username: user.username,
                    permission: user.permission,
                    sex: user.sex,
                    posts: user.posts,
                };
            }
            return token
        },
        async session({ session, token, user }) {
            session.user.username = token.username;
            session.user.permission = token.permission;
            session.user.sex = token.sex;
            session.user.posts = token.posts
            return session
        }

      }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

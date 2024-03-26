import Image from "next/image";

if (process.env.NODE_ENV !== 'production') {
      global.prisma = prisma;
    }

    import {prisma} from "@/src/db/prisma";
    export default async function home() {
      await prisma.user.create({
      data:{
        sex: 0,
        password: "admin",
        permission: "admin",
        username : "admin",
        email : "admin@admin.com",
            posts:{
              create:{                               
                title:"My First Post",
                body:"Lots of interesting stuff",
                slug:"my-first-post"	    },},},})
    const allUsers = await prisma.user.findMany({
      include : { post:true }})
    return(div><ul>{allUsers.map(user) => (li>{user.name}</li>)}</ul></div>)

    
export default function Home() {
  return (
    <main>
      <p>Matéo</p>
      <a href="./page2.tsx">Test</a>
    </main>
  );
}

import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import bcrypt from 'bcrypt';
import { signIn } from 'next-auth/react'; // Importez la fonction signIn depuis next-auth/client

export async function POST(request) {
    try {
        const data = await request.json();
        const { email, password } = data;

        const hashedPassword = await bcrypt.hash(password, 10);

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        // Si l'utilisateur existe déjà, renvoyer une réponse avec un statut 400
        if (existingUser) {
            return new NextResponse("User already exists", { status: 400 });
        }

        // Créer un nouvel utilisateur
        const newUser = await prisma.user.create({
            data: {
                username: data.username,
                email: email,
                sex: data.sex === "femme",
                password: hashedPassword,
                permission: "user"
            },
        });

        // Après avoir créé l'utilisateur, connectez automatiquement l'utilisateur en appelant la fonction signIn
        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        // Si la connexion réussit, renvoyer une réponse avec un statut 200
        if (result?.error) {
            return new NextResponse(result.error, { status: 500 });
        } else {
            return new NextResponse("User created successfully and logged in", { status: 200 });
        }
    } catch (error) {
        console.error('Error creating user:', error);
        return new NextResponse(error, { status: 500 });
    }
}

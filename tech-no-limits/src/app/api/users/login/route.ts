import { NextResponse } from "next/server";
import {prisma} from "@/db/prisma"

export async function POST(request: Request) {
    const data = await  request.json();
    console.log(data)
    try {
        const newUser = await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                sex: (data.sex == "femme"),
                password: data.password,
                permission: "user"
            },
        });
        return NextResponse.json(newUser)
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        throw error;
    }
}
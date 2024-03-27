import { NextResponse } from "next/server";
import {prisma} from "@/db/prisma"

export  async function POST(request: Request) {
    const data = await request.json();
    console.log(data)
    try {
        const user = await prisma.user.findMany({
            where: {
                email: data.email,
            },
        });
        if (user && data.password === user[0].password) {
            return NextResponse.json(user[0])
        } else {
            return NextResponse.json({ message: 'Email ou mot de passe incorrect' });
        }
    } catch (error) {
        console.error('Erreur lors de la vérification de l\'utilisateur :', error);
        return NextResponse.json({ message: 'Erreur lors de la vérification de l\'utilisateur' });
    }
}


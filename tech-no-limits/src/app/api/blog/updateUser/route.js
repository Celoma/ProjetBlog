import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";


export async function POST(request) {
    try {
        const data = await request.json();
        const {id, authorId} = data.dataSet;
        const utilisateur = await prisma.user.findUnique({
            where: {
                id: authorId
            }
        });

        if (!utilisateur) {
            throw new Error(`User with id ${authorId} not found`);
        }

        const posts = utilisateur.posts || [];

        const updatedPosts = [...posts, id];

        const updatedUser = await prisma.user.update({
            where: {
                id: authorId
            },
            data: {
                posts: updatedPosts
            }
        });

        return new NextResponse(JSON.stringify(updatedUser));
    } catch (error) {
        console.error('Error updating blog:', error);
        return new NextResponse(error, { status: 500 });
    }
}

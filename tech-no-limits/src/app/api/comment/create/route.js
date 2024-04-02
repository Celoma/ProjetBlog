import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(request) {
    try {
        const requestBody = await request.json();

        console.log(requestBody)
        
        if (!requestBody || typeof requestBody !== 'object') {
            throw new Error('Invalid request body');
        }

        const { comment, author, idblog} = requestBody;

        if (!idblog || !comment) {
            throw new Error('Missing required fields in request body');
        }

        // Vérifier si le blog existe
        const existingBlog = await prisma.post.findUnique({
            where: {
                id: idblog,
            },
        });

        if (!existingBlog) {
            return new NextResponse({
                status: 404,
                body: "Blog not found",
            });
        }

        // Créer le commentaire associé au blog
        const createdComment = await prisma.comment.create({
            data: {
                comment: comment,
                postId: idblog,
                authorID: author
            },
        });

        // Renvoyer une réponse avec le commentaire créé
        return new NextResponse({
            status: 201,
            body: JSON.stringify(createdComment),
        });
    } catch (error) {
        console.error("Error creating comment:", error);
        return new NextResponse({
            status: 500,
            body: "Internal Server Error",
        });
    }
}

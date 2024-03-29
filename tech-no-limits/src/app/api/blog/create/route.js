import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

function generateSlug(title) {
    const normalizedTitle = title.toLowerCase().trim(); // Convertir en minuscules et supprimer les espaces inutiles
    const slug = normalizedTitle
        .replace(/[^\w\s-]/g, '') // Supprimer les caractères spéciaux sauf les espaces et les tirets
        .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
        .replace(/^-+|-+$/g, ''); // Supprimer les tirets en début et fin de chaîne
    return slug;
}

export async function POST(request) {
    try {
        const data = await request.json();
        const { title, body, author, images, category } = data;
        const slug = generateSlug(title);
        const newBlog = await prisma.post.create({
            data: {
                title: title,
                body: body,
                slug: slug,
                author: { connect: { id: author } },
                theme: category
            },
        });

        return new NextResponse(JSON.stringify(newBlog), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error creating blog:', error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

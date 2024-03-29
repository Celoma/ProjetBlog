import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import axios from "axios";

function generateSlug(title) {
    const normalizedTitle = title.toLowerCase().trim(); // Convertir en minuscules et supprimer les espaces inutiles
    const slug = normalizedTitle
        .replace(/[^\w\s-]/g, '') // Supprimer les caractères spéciaux sauf les espaces et les tirets
        .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
        .replace(/^-+|-+$/g, ''); // Supprimer les tirets en début et fin de chaîne
    return slug;
}

export async function POST(request) {

        const data = await request.json();
        const { title, body, author, images, category } = data;
        const slug = generateSlug(title);
        const newBlog = await prisma.post.create({
            data: {
                title: title,
                body: body,
                slug: slug,
                authorId: author,
                theme: category
            },
        });
        return new NextResponse(JSON.stringify(newBlog))
}

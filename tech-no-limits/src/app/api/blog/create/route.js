import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(request) {
    try {
        const data = await request.json();
        const {title, body, author} = data
        const newBlog = await prisma.post.create({
            data: {
                title: title,
                body: body,
                slug: "",
                authorId: author,
            },
        });

        return NextResponse.json(newBlog);
    } catch (error) {
        console.error('Error creating blog:', error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(request) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaah")
    try {
        const content = await request.json();
        const {title, body} = content.data
        console.log(content.data)
        const newBlog = await prisma.post.create({
            data: {
                title: title,
                body: body,
                slug: ""
            },
        });

        return NextResponse.json(newBlog);
    } catch (error) {
        console.error('Error creating blog:', error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
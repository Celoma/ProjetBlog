import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const { author, idblog } = requestBody;
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

        const likes = existingBlog.likes || [];
        let isLiked = false

            for (let i = 0; i < likes.length; i++) {
                if (likes[i] === author) {
                    isLiked = true;
                    likes.splice(i, 1);
                    break;
                }
            }
            if(!isLiked){
                likes.push(author)
            }
            


        const updatedPost = await prisma.post.update({
            where: {
                id: idblog,
            },
            data: {
                likes: likes
            }
        });
    
        return new NextResponse(JSON.stringify(updatedPost.likes));

    } catch (error) {
        console.error('Error updating like:', error);
        return new NextResponse(JSON.stringify({
            status: 500,
            body: "Internal Server Error",
        }));
    }
}

import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function GET() {
    try {
      const blogResponse = await prisma.post.findMany({
        orderBy:
          {
            likes: "asc"
          },
      });
      blogResponse.sort((a, b) => b.likes.length - a.likes.length);

      const topThreePosts = blogResponse.slice(0, 3);
      return new NextResponse(JSON.stringify(topThreePosts));
    } catch (error) {
      return new NextResponse(error);
    }
  }
  
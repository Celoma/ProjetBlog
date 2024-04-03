import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function GET() {
    try {
      const blogResponse = await prisma.post.findMany({
        take: 3,
        orderBy:
          {
            likes: 'desc'
          },
      });

      return new NextResponse(JSON.stringify(blogResponse));
    } catch (error) {
      return new NextResponse(error);
    }
  }
  
import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(request) {
  const data = await request.json()
  const { postId } = data
  try {

    await prisma.comment.deleteMany({
        where : {
            postId : postId
        }
      })

      await prisma.post.delete({
          where : {
              id : postId
          }
      })
      return new NextResponse("Post deleted successfully", { status: 200 });
  } catch (error) {
      console.error('Error deleting user:', error);
      return new NextResponse("Internal Server Error", { status: 500 });
  }
}

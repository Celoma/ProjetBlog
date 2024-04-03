import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(request) {
  const data = await request.json()
  const { userId } = data
  try {
      await prisma.comment.deleteMany({
        where : {
            authorID : userId
        }
      })

      await prisma.post.deleteMany({
          where : {
              authorId : userId
          }
      })

      await prisma.user.delete({
        where: {
            id: userId,
        }
      });

      return new NextResponse("User deleted successfully", { status: 200 });
  } catch (error) {
      console.error('Error deleting user:', error);
      // Return an appropriate response in case of error
      return new NextResponse("Internal Server Error", { status: 500 });
  }
}

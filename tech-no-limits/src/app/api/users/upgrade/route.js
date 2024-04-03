import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(request) {
  const data = await request.json();
  const { userId } = data;
  try {
    await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        permission: "admin"
      }
    });
    return new NextResponse("User upgraded successfully", { status: 200 });
  } catch (error) {
    console.error('Error upgrading user:', error);
    // Retournez une réponse appropriée en cas d'erreur
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

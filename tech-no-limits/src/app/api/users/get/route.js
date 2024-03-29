import { prisma } from "@/db/prisma";

export async function GET(request) {
    const allUser = await prisma.post.findMany()

    return allUser
}
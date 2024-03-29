import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function GET(request) {
    const allBlog = await prisma.post.findMany()

    return allBlog
}
import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(request) {
    try {
        const data = await prisma.post.findMany()
        return new NextResponse(JSON.stringify(data))
    } catch (error) {
        return new NextResponse(error)
    }
}
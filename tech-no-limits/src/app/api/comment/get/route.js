import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function GET(request) {
    try {
        const data = await prisma.comment.findMany()
        return new NextResponse(JSON.stringify(data))
    } catch (error) {
        return new NextResponse(error)
    }
}
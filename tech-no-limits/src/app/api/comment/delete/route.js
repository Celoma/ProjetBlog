import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(request) {
        try {
            const data = await request.json();
            const { comId } = data;
            const response = await prisma.comment.delete({
                where : {
                    id : comId
                }
              })
            return new NextResponse(JSON.stringify(response))
        } catch (e) {
            return new NextResponse(e)
        }

}


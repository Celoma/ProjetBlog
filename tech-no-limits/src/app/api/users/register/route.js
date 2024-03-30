import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import bcrypt from 'bcrypt';
import { signIn } from 'next-auth/react';

export async function POST(request) {
    try {
        const data = await request.json();
        const { email, password } = data;

        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (existingUser) {
            return new NextResponse("User already exists", { status: 400 });
        }

        const newUser = await prisma.user.create({
            data: {
                username: data.username,
                email: email,
                sex: data.sex === "femme",
                password: hashedPassword,
                permission: "user",
            },
        });
        return new NextResponse("User created successfully", { status: 200 });
    } catch (error) {
        console.error('Error creating user:', error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

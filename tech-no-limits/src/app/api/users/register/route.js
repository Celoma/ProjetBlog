import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import bcrypt from 'bcrypt';

export async function POST(request) {
    try {
        const data = await request.json();
        const { email, password } = data; // Destructure email and password from data

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if user with given email already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (existingUser) {
            return new NextResponse("User already exists", { status: 400 });
        }

        // Create new user
        const newUser = await prisma.user.create({
            data: {
                username: data.username,
                email: email, // Use the retrieved email
                sex: data.sex === "femme",
                password: hashedPassword,
                permission: "user"
            },
        });

        return NextResponse.json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  //* Insercion de datos en la base de datos con prisma.

  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      {
        description: "Learn React",
        completed: true,
      },
      {
        description: "Learn Next.js",
        completed: false,
      },
      {
        description: "Build a fullstack app",
        completed: true,
      },
      {
        description: "Learn Docker",
        completed: false,
      },
    ],
  });

  return NextResponse.json({ message: "Seed Executed" });
}

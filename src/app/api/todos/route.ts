import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { boolean, object, string } from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = +(searchParams.get("take") ?? "10");
  const skip = +(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json(
      { error: "Invalid take parameter" },
      { status: 400 }
    );
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { error: "Invalid skip parameter" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take,
    skip,
  });
  return NextResponse.json(todos);
}

const postSchema = object({
  description: string().required(),
  completed: boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const { completed, description } = await postSchema.validate(
      await request.json()
    );
    const todo = await prisma.todo.create({
      data: { completed, description },
    });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE() {
  try {
    await prisma.todo.deleteMany({
      where: {
        completed: true,
      },
    });
    return NextResponse.json("Borrados");
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

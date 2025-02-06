import { boolean, object, string } from "yup";
import { NextResponse } from "next/server";
import { Todo } from "@prisma/client";
import prisma from "@/lib/prisma";

interface Segments {
  params: Promise<{ id: string }>;
}

const getTodo = async (id: string): Promise<Todo | null> => {
  return await prisma.todo.findUnique({
    where: { id },
  });
};

export async function GET(request: Request, { params }: Segments) {
  const id = (await params).id;
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(todo);
}

const putSchema = object({
  completed: boolean().optional(),
  description: string().optional(),
});

export async function PUT(request: Request, { params }: Segments) {
  const id = (await params).id;
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  try {
    const { completed, description } = await putSchema.validate(
      await request.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { completed, description },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

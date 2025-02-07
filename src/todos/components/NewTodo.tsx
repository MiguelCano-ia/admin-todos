"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
// import { useRouter } from "next/navigation";
import { addTodo, deleteTodosCompleted } from "../actions/todo-action";
// import * as todosApi from "@/todos/helpers/todo";

export const NewTodo = () => {
  const [description, setDescription] = useState("");
  // const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;

    await addTodo(description);
    setDescription("");
  };

  const deleteCompleted = async () => {
    // await todosApi.deleteTodosCompleted();
    await deleteTodosCompleted();
  };

  return (
    <form className="flex w-full" onSubmit={onSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all text-black"
        placeholder="What needs to be done?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Create
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompleted()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        &nbsp; Delete completed
      </button>
    </form>
  );
};

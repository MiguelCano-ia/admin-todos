import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <div className={todo.completed ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => toggleTodo(todo.id, !todo.completed)}
          className={`
          flex p-2 rounded-md cursor-pointer
          text-black
          hover:bg-opacity-60
          ${todo.completed ? "bg-blue-200" : "bg-red-200"}  
        `}
        >
          {todo.completed ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left text-black">
          {todo.description}
        </div>
      </div>
    </div>
  );
};

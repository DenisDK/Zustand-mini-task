"use client";

import { Button } from "@/components/ui/button";
import { useTodoStore } from "../store/todo.store";

// Icons
import { IoClose } from "react-icons/io5";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white/10 p-2 rounded-md mt-3 flex items-center justify-between"
        >
          <div className="">
            <h3>Title: {todo.title}</h3>
            <p>Description: {todo.description}</p>
          </div>
          <Button
            variant="outline"
            onClick={() => removeTodo(todo.id)}
            className="hover:text-red-500 transition-300"
          >
            <IoClose />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

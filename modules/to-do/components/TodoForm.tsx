"use client";

import { Button } from "@/components/ui/button";
import { useTodoStore } from "../store/todo.store";

const TodoForm = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = () => {
    addTodo({
      id: Date.now(),
      title: "Learn Zustand",
      description: "Practice creating Todo items with Zustand",
      completed: false,
    });
  };

  return (
    <div>
      <Button variant="outline" className="" onClick={handleAddTodo}>
        ToDo
      </Button>
    </div>
  );
};

export default TodoForm;

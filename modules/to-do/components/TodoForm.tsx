"use client";

import { Button } from "@/components/ui/button";
import { useTodoStore } from "../store/todo.store";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const TodoForm = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (!title.trim()) {
      return;
    }

    addTodo({
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-1.5">
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Todo title"
        />

        <Textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Todo description"
        />
      </div>
      <Button variant="outline" onClick={handleAddTodo} className="mt-3">
        ToDo
      </Button>
    </div>
  );
};

export default TodoForm;

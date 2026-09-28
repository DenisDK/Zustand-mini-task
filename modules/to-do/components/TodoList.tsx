"use client";

import { Button } from "@/components/ui/button";
import { useTodoStore } from "../store/todo.store";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Icons
import { IoClose } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white/10 p-2 rounded-md mt-3 flex items-center justify-between gap-2"
        >
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id)}
            className=""
          />
          <div className="flex-1">
            {todo.id === editingTodoId ? (
              <div>
                <Input
                  value={editTitle}
                  onChange={(event) => setEditTitle(event.target.value)}
                />

                <Textarea
                  value={editDescription}
                  className="mt-2"
                  onChange={(event) => setEditDescription(event.target.value)}
                />
              </div>
            ) : (
              <div className={todo.completed ? "line-through opacity-50" : ""}>
                <h3>Title: {todo.title}</h3>
                <p>Description: {todo.description}</p>
              </div>
            )}
          </div>
          <Button
            variant="outline"
            onClick={() => {
              if (todo.id === editingTodoId) {
                updateTodo(todo.id, {
                  title: editTitle,
                  description: editDescription,
                });

                setEditingTodoId(null);
                return;
              }

              setEditingTodoId(todo.id);
              setEditTitle(todo.title);
              setEditDescription(todo.description);
            }}
            className="hover:text-blue-500 transition-300"
          >
            {todo.id === editingTodoId ? <IoCheckmarkOutline /> : <IoPencil />}
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              if (todo.id === editingTodoId) {
                setEditingTodoId(null);
                return;
              }

              removeTodo(todo.id);
            }}
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

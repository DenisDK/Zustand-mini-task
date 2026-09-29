import { create } from "zustand";
import type { Todo, TodoStore } from "../types/todo.types";
import { persist } from "zustand/middleware";

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],

      addTodo: (todo) => {
        set((state) => ({
          todos: [...state.todos, todo],
        }));
      },

      removeTodo: (todoId: number) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== todoId),
        }));
      },

      toggleTodo: (todoId: number) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
          ),
        }));
      },

      updateTodo: (todoId: number, updates: Partial<Todo>) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === todoId ? { ...todo, ...updates } : todo,
          ),
        }));
      },
    }),
    {
      name: "todo-storage",
    },
  ),
);

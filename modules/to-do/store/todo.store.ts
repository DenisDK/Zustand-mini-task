import { create } from "zustand";
import { TodoStore } from "../types/todo.types";

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  addTodo: (todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },
}));

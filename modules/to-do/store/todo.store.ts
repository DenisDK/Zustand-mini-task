import { create } from "zustand";
import { TodoStore } from "../types/todo.types";

export const useTodoStore = create<TodoStore>((set) => ({
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
}));

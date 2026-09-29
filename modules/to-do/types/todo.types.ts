export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export type TodoStore = {
  todos: Todo[];

  addTodo: (todo: Todo) => void;
  removeTodo: (todoId: number) => void;
  toggleTodo: (todoId: number) => void;
  updateTodo: (todoId: number, updates: Partial<Todo>) => void;
};

export type Filter = "all" | "active" | "completed";

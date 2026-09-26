export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export type TodoStore = {
  todos: Todo[];

  addTodo: (todo: Todo) => void;
};

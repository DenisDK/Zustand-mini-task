"use client";

import { useTodoStore } from "../store/todo.store";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

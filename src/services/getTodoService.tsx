import type { Todo } from "../types/TodoTypes";

const API_URL = "https://jsonplaceholder.typicode.com";

const getTodos = async () => {
  const response = await fetch(`${API_URL}/todos?_limit=10`);
  const todos = await response.json();
  return todos;
};

const addTodo = async (todo: Todo) => {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify(todo),
  });
  return response.json();
};

export { getTodos, addTodo };

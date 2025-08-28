import type { Todo } from "../types/TodoTypes";

const API_URL = "https://jsonplaceholder.typicode.com";

const getTodos = async () => {
  const response = await fetch(`${API_URL}/todos?_limit=10`);
  const todos = await response.json();
  return todos;
};

const addTodo = (todo: Todo) => {
  const response = fetch(`${API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify(todo),
  });
  return response;
};

export { getTodos };

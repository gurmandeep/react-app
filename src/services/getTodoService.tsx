import type { Todo } from "../types/TodoTypes";
import { supabase } from "../supabaseClient";

const getTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabase.from("todos").select();
  console.log(error);
  return (data ?? []) as Todo[];
};

const addTodo = async (todo: Todo) => {
  return await supabase.from("todos").insert([todo]).select();
};

export { getTodos, addTodo };

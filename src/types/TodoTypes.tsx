export type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: [] }
  | { type: "FETCH_ERROR"; payload: string };

export type Todo = {
  id?: number;
  title: string;
  completed: boolean;
};

export type TodoState = {
  loading: boolean;
  error: string | null;
  todos: Todo[];
};

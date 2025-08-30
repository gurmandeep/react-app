export type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: Todo[] }
  | { type: "FETCH_ERROR"; payload: string };

export type Todo = {
  id?: number;
  title: string;
  completed: boolean;
  userid?: number;
};

export type TodoState = {
  loading: boolean;
  error: string | null;
  todos: Todo[];
};

export type TodoListProp = {
  search: string;
  type: string;
};

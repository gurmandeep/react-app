import type { Action, TodoState } from "../types/TodoTypes";

const initialState: TodoState = {
  loading: false,
  error: null,
  todos: [],
};

const reducer = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, todos: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { initialState, reducer };

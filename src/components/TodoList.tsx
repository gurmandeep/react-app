import { useEffect, useReducer } from "react";
import { getTodos } from "../services/getTodoService";
import type { Action, TodoState, Todo } from "../types/TodoTypes";

// Initial state
const initialState: TodoState = {
  loading: false,
  error: null,
  todos: [],
};

const reducer = (state: TodoState, action: Action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, todos: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
  }
};

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });
    getTodos().then((data) => {
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    });
  }, []);

  return (
    <>
      <div className="border">
        <ul>
          {state.todos.map((todo: Todo, key: number) => {
            return (
              <li className="" key={key}>
                <input type="checkbox" /> {todo.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;

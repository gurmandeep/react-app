import { useEffect, useReducer } from "react";
import { getTodos } from "../services/getTodoService";
import type { Todo, TodoListProp } from "../types/TodoTypes";
import { initialState, reducer } from "../reducers/todoReducer";

function TodoList({ search, type }: TodoListProp) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    getTodos().then((data) => {
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    });
  }, []);

  const filtered = state.todos.filter((todo) => {
    if (type == "completed" && !todo.completed) {
      return false;
    }
    if (type == "pending" && todo.completed) {
      return false;
    }
    return todo.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Todo List
      </h2>
      {state.loading && (
        <div className="flex justify-center items-center mb-4">
          <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-indigo-500 mr-2"></span>
          <span className="text-indigo-500">Loading...</span>
        </div>
      )}
      {state.error && (
        <div className="text-red-500 text-center mb-4">{state.error}</div>
      )}
      <ul className="divide-y divide-gray-200">
        {filtered.length > 0 ? (
          filtered
            .filter((todo: Todo) =>
              todo.title.toLowerCase().includes(String(search).toLowerCase())
            )
            .map((todo: Todo, key: number) => (
              <li
                className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 transition-colors duration-150"
                key={key}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    className="accent-indigo-500 w-5 h-5"
                    onChange={() =>
                      dispatch({
                        type: "FETCH_SUCCESS",
                        payload: state.todos.map((t) =>
                          t.id === todo.id
                            ? { ...t, completed: !t.completed }
                            : t
                        ),
                      })
                    }
                    value={todo.id}
                  />
                  <span
                    className={`text-lg ${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    {todo.title}
                  </span>
                </div>
              </li>
            ))
        ) : (
          <li>no record found.</li>
        )}
      </ul>
      {state.todos.length === 0 && !state.loading && (
        <div className="text-gray-500 text-center mt-6">No todos found.</div>
      )}
    </div>
  );
}

export default TodoList;

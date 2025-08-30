import { useState } from "react";
import TodoList from "../components/TodoList";
// import type { TodoListProp } from "../types/TodoTypes";

function AllTodos() {
  const [search, setSearch] = useState<string>("");
  const [type, setType] = useState<string>("all");

  return (
    <div>
      <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <span
                onClick={() => setType("all")}
                className={`${
                  type === "all"
                    ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                    : "hover:text-gray-600 hover:border-gray-300 border-transparent"
                } cursor-pointer inline-block p-4 border-b-2 rounded-t-lg`}
              >
                All
              </span>
            </li>
            <li className="me-2">
              <span
                onClick={() => setType("pending")}
                className={`${
                  type === "pending"
                    ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                    : "hover:text-gray-600 hover:border-gray-300 border-transparent"
                } cursor-pointer inline-block p-4 border-b-2 rounded-t-lg`}
                aria-current="page"
              >
                Pending
              </span>
            </li>
            <li className="me-2">
              <span
                onClick={() => setType("completed")}
                className={`${
                  type === "completed"
                    ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                    : "hover:text-gray-600 hover:border-gray-300 border-transparent"
                } cursor-pointer inline-block p-4 border-b-2 rounded-t-lg`}
              >
                Completed
              </span>
            </li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center mt-4">
          {type == "completed"
            ? "Completed Todos"
            : type == "pending"
            ? "Pending Todos"
            : "All Todos"}
        </h2>
        <div className="mb-6 flex flex-col gap-2">
          <input
            id="search-todo"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search todos..."
          />
        </div>
        <TodoList search={search} type={type} />
      </div>
    </div>
  );
}

export default AllTodos;

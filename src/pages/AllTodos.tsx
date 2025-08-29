import { useState } from "react";
import TodoList from "../components/TodoList";

function AllTodos() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        All Todos
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
      <TodoList search={search} />
    </div>
  );
}

export default AllTodos;

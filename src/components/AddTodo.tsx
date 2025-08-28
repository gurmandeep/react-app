import { useState } from "react";
import { addTodo } from "../services/getTodoService";

function AddTodo() {
  const [title, setTitle] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");

  function add() {
    const saveTodo = addTodo({ title: title, completed: completed });
    console.log(saveTodo);
    saveTodo.then((res) => {
      if (res.id > 0) {
        setSuccess("Success! Todo has been created");
      }
    });
  }

  function close() {
    setSuccess("");
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg flex flex-col gap-6">
      {success ? (
        <div>
          <div className="bg-green-400 px-4 py-2 rounded text-white">
            {success}
            <span className="top-0 float-end">
              <button onClick={close}>X</button>
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Add New Todo
      </h2>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="todo-title"
          className="text-sm font-medium text-gray-700"
        >
          Enter Title
        </label>
        <input
          id="todo-title"
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo title..."
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          id="todo-completed"
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="accent-indigo-500 w-4 h-4"
        />
        <label htmlFor="todo-completed" className="text-sm text-gray-700">
          Completed
        </label>
      </div>
      <button
        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition-colors duration-200"
        onClick={add}
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllTodos from "./pages/AllTodos";
import AddTodo from "./components/AddTodo";

const router = createBrowserRouter([
  { path: "/", Component: AllTodos },
  { path: "/add-todo", Component: AddTodo },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// const { data, error } = await supabase.from("todos").select();

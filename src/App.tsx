import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllTodos from "./pages/AllTodos";

const router = createBrowserRouter([{ path: "/", Component: AllTodos }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

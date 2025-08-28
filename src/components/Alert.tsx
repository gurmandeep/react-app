import type { AlertType } from "../types/AlertType";

function Alert({ type, message, close }: AlertType) {
  if (message == "") {
    return;
  }
  return (
    <div
      className={`${
        type === "success" ? "bg-green-400" : "bg-red-600"
      } px-4 py-2 rounded text-white`}
    >
      {message}
      <span className="top-0 float-end">
        <button onClick={close}>X</button>
      </span>
    </div>
  );
}

export default Alert;

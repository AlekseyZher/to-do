import React from "react";
import ReactDOM from "react-dom/client";
import { TodoListPage } from "./Pages/TodoListPage";
import "./assets/styles/normalize.scss";
import "./assets/styles/style.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoListPage />
  </React.StrictMode>
);

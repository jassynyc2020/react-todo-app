import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
// import Dashboard from "./components/clock/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import { BrowserRouter } from "react-router-dom";

// import Dashboard from "./components/clock/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Todo />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Dashboard /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

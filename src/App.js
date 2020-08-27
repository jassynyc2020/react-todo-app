import React from "react";
import logo from "./images/logo.jpeg";
import jassy from "./images/jassy.jpeg";
import johnny from "./images/johnny.jpeg";
import madonna from "./images/madonna.jpeg";
import "./App.css";

const user = [
  {
    username: "Jassy",
    id: 1,
    avatarImg: "./images/jassy.jpeg",
    completed: false,
  },
  {
    username: "Johnny",
    id: 2,
    avatarImg: "./images/johnny.jpeg",
    completed: false,
  },
  {
    username: "Madonna",
    id: 3,
    avatarImg: "./images/madonna.jpeg",
    completed: false,
  },
];

function App() {
  return (
    <>
      <ul className="Navigation-container">
        <li className="Navigation-list">
          <a href="./App.js"> To Do</a>
        </li>
        <li className="Navigation-list">
          <a href="./App.js">Calendar</a>
        </li>
        <li className="Navigation-list">
          <a href="./App.js">Notes</a>
        </li>
      </ul>
      <img src={jassy} className="user-avatar" alt="user-avatar" />
      <h2>Nisha</h2>
      <h1>To Do Today</h1>
      <div className="user-container">
        <p>{user.username}</p>
      </div>
      <div>
        <form className="todo-button-container">
          <button type="submit">Done</button>
          <input placeholder="Add your To Do here"></input>
          <button type="submit">Delete</button>
          <br></br>
          <button type="submit">Done</button>
          <input placeholder="Add your To Do here"></input>
          <button type="submit">Delete</button>
          <br></br>
          <button type="submit">Done</button>
          <input placeholder="Add your To Do here"></input>
          <button type="submit">Delete</button>
        </form>
      </div>
    </>
  );
}

export default App;

import React from "react";
import Image from "./images/jassy.jpeg";
import "./App.css";

const todos = [
  {
    id: 1,
    todo: "Study react",
    isCompleted: true,
  },
  {
    id: 2,
    todo: "Buy Lotto ticket",
    isCompleted: false,
  },
  {
    id: 3,
    todo: "Buy car",
    isCompleted: false,
  },
];
const user = {
  name: "Jassy",
  image: Image,
};

function App() {
  return (
    <>
      <header style={navStyle.headerContainer}>
        <ul style={navStyle.listContainer}>
          <li style={navStyle.listItems}>
            <a style={navStyle.listLink} href="./App.js">
              To Do
            </a>
          </li>
          <li style={navStyle.listItems}>
            <a style={navStyle.listLink} href="./App.js">
              Calendar
            </a>
          </li>
          <li style={navStyle.listItems}>
            <a style={navStyle.listLink} href="./App.js">
              Notes
            </a>
          </li>
        </ul>
      </header>
      <div style={userAvatarContainer.avatarContainer}>
        <img
          style={userAvatarContainer.avatarImage}
          src={user.image}
          alt="user-avatar"
        />
        <h2>{user.name}</h2>
      </div>
      <h1 style={listItemStyle.titleList}>To Do Today</h1>
      <ul style={listItemStyle.listContainer}>
        {todos.map((todoItem) => (
          <li style={listItemStyle.listItem}>
            <input
              style={listItemStyle.inputTodo}
              type="checkbox"
              checked={todoItem.isCompleted}
            />
            <span style={listItemStyle.listItemtodo}>{todoItem.todo}</span>
          </li>
        ))}
      </ul>
      <form style={inputStyle.form}>
        <button style={inputStyle.doneButton} type="submit">
          Done
        </button>
        <input
          style={inputStyle.inputButton}
          placeholder="Add your To Do here"
        ></input>
        <button style={inputStyle.deleteButton} type="submit">
          Delete
        </button>
      </form>
    </>
  );
}

const listItemStyle = {
  listContainer: {
    textAlign: "flex-start",
  },
  titleList: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "roboto",
    fontSize: "40px",
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
    padding: "5px",
    fontFamily: "roboto",
  },
  inputTodo: {
    display: "flex",
  },
};

const navStyle = {
  headerContainer: {
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
  },
  listContainer: {
    display: "flex",
    margin: "15px",
    padding: "10px",
  },
  listItems: {
    listStyle: "none",
    fontFamily: "roboto",
    textDecoration: "none",
    fontSize: "30px",
    paddingLeft: "40px",
  },
  listLink: {
    textDecoration: "none",
    color: "darkblue",
    display: "flex",
    justifyContent: "center",
  },
};

const userAvatarContainer = {
  avatarContainer: {
    fontSize: "50px",
    textAlign: "center",
    fontFamily: "fantasy",
    color: "white",
    background: "#ff00de",
  },
  avatarImage: {
    margin: "20px",
    width: "150px",
    boxShadow: "10px 5px 5px black",
    borderRadius: "70px",
  },
};

const inputStyle = {
  form: {
    display: "flex",
    justifyContent: "center",
  },
  doneButton: {
    boxShadow: "10px 5px 5px black",
    height: "45px",
    width: "70px",
    padding: "10px",
  },
  deleteButton: {
    boxShadow: "10px 5px 5x black",
    height: "45px",
    width: "70px",
    padding: "10px",
  },
  inputButton: {
    boxShadow: "10px 5px 5px black",
    height: "45px",
    width: "200px",
    padding: "10px",
  },
};

export default App;

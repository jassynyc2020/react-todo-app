// import React from "react";
import Image from "./images/jassy.jpeg";
import "./App.css";
import Todo from "./components/Todo.js";
import Navbar from "./components/Navbar.js";
import React, { Component } from "react";
import { BrowserRouter} from "react-router-dom";
// import Dashboard from "./components/clock/Dashboard";

class TodoApp extends Component {
  state = {
    todo: [
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
],
newItem: "",
newItemTodo: "",
};
handleNewItemChange = (event) => {
  this.setState({ newItem: event.target.value });
};

handleNewItemTypeChange = (event) => {
  this.setState({ newItemTodo: event.targe.value });
};

handleNewItem = (event) => {
  this.setState((state) => {
    return {
      todo: [...state.todo, { todo: state.newItem, todo: state.newItemTodo }],
      newItem: "",
      newItemTodo: "",
    };
  });
};

render() {
  return (
    <>
      <div style={userAvatarContainer.avatarContainer}>
        <img
          style={userAvatarContainer.avatarImage}
          src={user.image}
          alt="user-avatar"
        />
        <h2>{user.name}</h2>
      </div>
      <h1 style={listItemStyle.titleList}>To Do Today</h1>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))};
      {/* <ul style={listItemStyle.listContainer}>
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        <li style={listItemStyle.listItem}>
          <input
            style={listItemStyle.inputTodo}
            type="checkbox"
          />
        </li>
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
        </form> */}
    </>
  );
}

export default App;

const listItemStyle = {
  listContainer: {
    border: "5px inset lightgray",
    background: "lightblue",
    color: "blue",
  },
  titleList: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "roboto",
    color: "blue",
    fontSize: "40px",
    background: "lightblue",
  },
  listItem: {
    display: "flex",
    padding: "10px",
    border: "2px solid blue",
    fontFamily: "roboto",
  },
  inputTodo: {
    position: "absolute",
    height: "45px",
    width: "20px",
  },
  listItemtodo: {
    fontSize: "20px",
    padding: "10px",
  },
};

const userAvatarContainer = {
  avatarContainer: {
    fontSize: "30px",
    textAlign: "center",
    fontFamily: "fantasy",
    color: "",
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 66%, rgba(148,187,233,1) 100%)",
    border: "5px inset lightgray",
  },
  avatarImage: {
    margin: "10px",
    width: "100px",
    boxShadow: "10px 5px 5px black",
    borderRadius: "70px",
  },
};

const inputStyle = {
  form: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 66%, rgba(148,187,233,1) 100%)",
  },
  doneButton: {
    boxShadow: "10px 5px 5px black",
    height: "45px",
    width: "70px",
    padding: "10px",
    background: "lightblue",
    color: "blue",
  },
  deleteButton: {
    boxShadow: "10px 5px 5x black",
    height: "45px",
    width: "70px",
    padding: "10px",
    background: "lightblue",
    color: "blue",
  },
  inputButton: {
    boxShadow: "10px 5px 5px black",
    height: "45px",
    width: "200px",
    padding: "10px",
  },
};

// how to use @media for table and desktop
// how to design for mobile first using display.flex ect
// add spin to avatar

/* <div style={userAvatarContainer.avatarContainer}>
<img
  style={userAvatarContainer.avatarImage}
  src={user.image}
  alt="user-avatar"
/>
<h2>{user.name}</h2>
</div>   */
//             // checked={todoItem.isCompleted}

/* /* /* <span style={listItemStyle.listItemtodo}>{todoItem.todo}</span>} */

//     style={listItemStyle.inputTodo}
//     type="checkbox"
//     checked={todoItem.isCompleted}
//   />
//   <span style={listItemStyle.listItemtodo}>{todoItem.todo}</span>
// </li>
/* <form style={inputStyle.form}>
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
// </form> */

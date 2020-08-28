import React from "react";
import jassy from "./images/jassy.jpeg";
import "./App.css";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// Install the Styled Components link below - ask for help

// const Button = styled.a`
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: white;
//   border: 2px solid white;

//   ${(props) =>
//     props.primary &&
//     css`
//       background: white;
//       color: black;
//     `}
// `;

// render(
//   <div>
//     <Button
//       href="https://github.com/styled-components/styled-components"
//       target="_blank"
//       rel="noopener"
//       primary
//     >
//       GitHub
//     </Button>

//     <Button as={Link} href="/docs">
//       Documentation
//     </Button>
//   </div>
// );

const todos = [
  {
    todo: "Study react",
    id: 1,
    todoDone: true,
  },
  {
    todo: "Buy Lotto ticket",
    id: 2,
    todoDone: true,
  },
  {
    todo: "Buy car",
    id: 3,
    todoDone: true,
  },
];

function App() {
  return (
    <>
      <header style={HeaderStyles}>
        <ul style={NavStyle}>
          <li style={NavItemStyle}>
            <a href="./App.js">To Do</a>
          </li>
          <li style={NavItemStyle}>
            <a href="./App.js">Calendar</a>
          </li>
          <li style={NavItemStyle}>
            <a href="./App.js">Notes</a>
          </li>
        </ul>
      </header>
      <div style={userAvatarContainer}>
        <img style={avatar} src={jassy} alt="user-avatar" />
        <h2>Nisha</h2>
        <h1>To Do Today</h1>
      </div>
      <div style={todoList}>
        <ul>
          {todos.map((todo) => {
            return (
              <li style={listItemStyle}>
                <p>{todo.todo}</p>
                <input type="checkbox" checked={todo.todoDone} />
              </li>
            );
          })}
        </ul>
      </div>
      <div style={submitButton}>
        <form style={AddToDoButton}>
          <button style={InputDoneButton} type="submit">
            Done
          </button>
          <input style={InputButton} placeholder="Add your To Do here"></input>
          <button style={InputDeleteButton} type="submit">
            Delete
          </button>
        </form>
      </div>
    </>
  );
}

export default App;

const HeaderStyles = {
  border: "2px solid blue",
  backgroundColor: "lightblue",
  display: "flex",
  justifyContent: "center",
};

const NavStyle = {
  display: "flex",
  listStyle: "none",
  fontFamily: "roboto",
};

const NavItemStyle = {
  margin: "4em",
};

const userAvatarContainer = {
  fontSize: "20px",
  textAlign: "center",
  fontFamily: "roboto",
  backgroundColor: "lightpink",
  border: "2px solid blue",
};

const avatar = {
  margin: "20px",
  width: "100px",
  border: "4px solid white",
};

const todoList = {
  fontFamily: "roboto",
  textAlign: "center",
  border: "2px solid gray",
  backgroundColor: "lightblue",
};

const listItemStyle = {
  listStyle: "none",
};

const AddToDoButton = {
  backgroundColor: "fuschia",
  border: "4px solid fuschia",
  liststyletype: "circle",
};

const submitButton = {
  textAlign: "center",
};

const InputButton = {
  border: "1px solid blue",
  height: "45px",
  width: "300px",
  padding: "10px",
};

const InputDeleteButton = {
  border: "1px solid blue",
  height: "45px",
  width: "50px",
  padding: "10px",
};

const InputDoneButton = {
  border: "1px solid blue",
  height: "45px",
  width: "50px",
  padding: "10px",
};

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
            <a style={NavLink} href="./App.js">
              To Do
            </a>
          </li>
          <li style={NavItemStyle}>
            <a style={NavLink} href="./App.js">
              Calendar
            </a>
          </li>
          <li style={NavItemStyle}>
            <a style={NavLink} href="./App.js">
              Notes
            </a>
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
  backgroundColor: "lightblue",
  display: "flex",
  justifyContent: "center",
};

const NavStyle = {
  display: "flex",
  listStyle: "none",
  fontFamily: "roboto",
  textDecoration: "none",
  fontSize: "20px",
};

const NavItemStyle = {
  margin: "1.5em",
};

const NavLink = {
  textDecoration: "none",
  color: "darkblue",
};

const userAvatarContainer = {
  fontSize: "20px",
  textAlign: "center",
  fontFamily: "fantasy",
  color: "white",
  background: "#ff00de",
};

const avatar = {
  margin: "20px",
  width: "100px",
  boxShadow: "10px 5px 5px black",
};

const todoList = {
  fontFamily: "roboto",
  textAlign: "center",
  boxShadow: "10px 5px 5px black",
  backgroundColor: "lightblue",
};

const listItemStyle = {
  listStyle: "none",
};

const AddToDoButton = {
  backgroundColor: "fuschia",
  boxShadow: "10px 5px 5px black",
  liststyletype: "circle",
};

const submitButton = {
  textAlign: "center",
  boxShadow: "10px 5px 5px black",
};

const InputButton = {
  boxShadow: "10px 5px 5px black",
  height: "45px",
  width: "300px",
  padding: "10px",
};

const InputDeleteButton = {
  boxShadow: "10px 5px 5px black",
  height: "45px",
  width: "70px",
  padding: "10px",
};

const InputDoneButton = {
  boxShadow: "10px 5px 5px black",
  height: "45px",
  width: "70px",
  padding: "10px",
};

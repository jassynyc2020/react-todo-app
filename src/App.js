import React from "react";
import logo from "./images/logo.jpeg";
import "./App.css";

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
      <img src={logo} className="App-avatar-logo" alt="Avatar-logo" />
      <h2>Nisha</h2>
      <h1>To Do Today</h1>
      <div className="Todo-list">
        <div>
          <form className="Todo-button">
            <button type="submit">Done</button>
            <input placeholder="Add your To Do here"></input>
          </form>
        </div>
      </div>
    </>
  );
}

// function AppEdit() {
//   return (
//     <>
//       <ul>
//         <li>
//           <a href="">To Do</a>
//         </li>
//         <li>
//           <a href="">Calendar</a>
//         </li>
//         <li>
//           <a href="">Notes</a>
//         </li>
//       </ul>
//       <img src={logo} className="App-avatar-logo" alt="Avatar-logo" />
//       <h2>Nisha</h2>
//       <h1>Edit</h1>
//       <div className="Todo-edit">
//         <form>
//           <input placeholder="Title"></input>
//           <input placeholder="Description"></input>
//           <input placeholder="Add image"></input>
//           <button type="submit">Save</button>
//         </form>
//       </div>
//     </>
//   );
// }

/* <form className="Todo-button">
          <button type="submit">Done</button>
          <input placeholder="Add your To Do here"></input>
        </form> */

export default App;

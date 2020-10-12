import React from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import Addtodo from "./components/Addtodo";
import Navbar from "./components/Navbar";
import shortid from "shortid";
// import Dashboard from "./components/clock/Dashboard";

const todos = [
  {
    id: shortid.generate(),
    text: "Study react",
    isCompleted: true,
  },
  {
    id: shortid.generate(),
    text: "Buy Lotto ticket",
    isCompleted: false,
  },
  {
    id: shortid.generate(),
    text: "Buy car",
    isCompleted: false,
  },
];

const user = {
  name: "Jassy",
  image: Image,
};

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <TodoList todos={todos} user={user} />
        <Addtodo />
        {/* <input type="text" />
        <button>Add Todo</button>
        <button>Clear Complete</button>
        <div>0 left to do</div> */}
      </>
    );
  }
}

export default App;

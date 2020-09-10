import React from "react";
import TodoList from "./components/TodoList";
import Addtodo from "./components/Addtodo";
import Navbar from "./components/Navbar";

const todos = [
  {
    id: 1,
    text: "Study react",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Buy Lotto ticket",
    isCompleted: false,
  },
  {
    id: 3,
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
      </>
    );
  }
}

export default App;

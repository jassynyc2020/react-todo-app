// import React from "react";
import "./App.css";
import React, { Component } from "react";

// class TodoApp extends Component {
//   state = {
//     todo: [
//       {
//         id: "a",
//         todo: "Study react",
//         isCompleted: true,
//       },
//       {
//         id: "b",
//         todo: "Buy Lotto ticket",
//         isCompleted: false,
//       },
//       {
//         id: "c",
//         todo: "Buy car",
//         isCompleted: false,
//       },
//     ],
//     newItem: "",
//     newItemTodo: "",
//   };

  // handleNewItemChange = (event) => {
  //   this.setState({ newItem: event.target.value });
  // };

  // handleNewItemTypeChange = (event) => {
  //   this.setState({ newItemTodo: event.targe.value });
  // };

  // handleNewItem = (event) => {
  //   this.setState((state) => {
  //     return {
  //       todo: [...state.todo, { todo: state.newItem, todo: state.newItemTodo }],
  //       newItem: "",
  //       newItemTodo: "",
  //     };
  //   });
  // };

  render() {
    return (
      <>
        <div style={listItemStyle.listContainer}>
          <ul className="newList">
            {this.state.todo.map((todo,index) => (
            <li key={index.id}>{index.todo}<Todo todo={todo} />
            </li>
            ))}
          </ul>
        </div>
        <form style={inputStyle.form}>
          <button style={inputStyle.doneButton} type="submit">
            Done
          </button>
          <input
            style={
              inputStyle.inputButton
              // ? listItemStyle.inputTodo
              // : listItemStyle.inputTodoNone
            }
          ></input>
          <button style={inputStyle.deleteButton} type="submit">
            Delete
          </button>
        </form>
      </>
    )
  };

export default Todo;

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
const inputStyle = {
  form: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 66%, rgba(148,187,233,1) 100%)",
  },
  doneButton: {
    // boxShadow: "10px 5px 5px black",
    height: "45px",
    width: "70px",
    padding: "10px",
    background: "lightblue",
    color: "blue",
  },
  deleteButton: {
    // boxShadow: "10px 5px 5x black",
    height: "45px",
    width: "70px",
    padding: "10px",
    background: "lightblue",
    color: "blue",
  },
  inputButton: {
    // boxShadow: "10px 5px 5px black",
    height: "45px",
    width: "50px",
    padding: "10px",
  },
};

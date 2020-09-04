import React from "react";

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
function Todo(props) {
  return (
    <>
      <ul style={listItemStyle.listContainer}>
        <li style={listItemStyle.listItem} >
          <input type="checkbox" checked={todos.todo} />
        </li>
      </ul>
      <form style={inputStyle.form}>
        <button style={inputStyle.doneButton} type="submit">
          Done
        </button>
        <input
          style={inputStyle.inputButton
            ? listItemStyle.inputTodo
            : listItemStyle.inputTodoNone}
          type="text"
          placeholder="Add your To Do here"
        ></input>
        <button style={inputStyle.deleteButton} type="submit">
          Delete
        </button>
      </form>
    </>
  );
}

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

import React from "react";
import Todo from "./Todo.js";
import avatar from "../images/jassy.jpeg";

function TodoList({ todos, user }) {
  return (
    <>
      <div style={userAvatarContainer.avatarContainer}>
        <img src={avatar} alt="Jassy" style={userAvatarContainer.avatarImage} />
        <h2>{user.name}</h2>
      </div>
      <h1 style={listItemStyle.titleList}>To Do Today</h1>
      {/* TODO Fix key here */}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default TodoList;

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

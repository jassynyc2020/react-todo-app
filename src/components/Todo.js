import React from "react";

function Todo(props) {
  return (
    <>
      <div style={inputStyle.inputContainer}>
        <input type="checkbox" checked={props.item.isCompleted} />
        <p>{props.item.text}</p>
        <button style={inputStyle.deleteButton} type="submit">
          Delete
        </button>
      </div>
    </>
  );
}

export default Todo;

const inputStyle = {
  inputContainer: {
    display: "flex",
    justifyContent: "space-evenly",
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
    height: "30px",
    width: "50px",
    background: "lightblue",
    color: "blue",
  },
};

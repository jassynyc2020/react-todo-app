import React from "react";

function Addtodo() {
  return (
    <input
      style={styles.inputButton}
      type="text"
      placeholder="Add your To Do here"
    />
  );
}

const styles = {
  inputButton: {
    display: "flex",
    margin: "20px auto",
    boxShadow: "10px 5px 5px black",
    height: "45px",
    width: "200px",
    textAlign: "center",
    backgroundColor: "lightblue",
  },
};

export default Addtodo;

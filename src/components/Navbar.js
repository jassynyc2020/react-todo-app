import React from "react";

function Navbar() {
  return (
    <ul style={navStyle.NavListContainer}>
      <li style={navStyle.listItems}>
        <a style={navStyle.listLink} href="./App.js">
          To Do
        </a>
      </li>
      <li style={navStyle.listItems}>
        <a style={navStyle.listLink} href="./App.js">
          Calendar
        </a>
      </li>
      <li style={navStyle.listItems}>
        <a style={navStyle.listLink} href="./App.js">
          Notes
        </a>
      </li>
    </ul>
  );
}

export default Navbar;

const navStyle = {
  headerContainer: {
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "space-evenly",
    boxShadow: "10px 5px 5px black",
    border: "5px inset lightgray",
  },
  listItems: {
    listStyle: "none",
    fontFamily: "roboto",
    textDecoration: "none",
    fontSize: "20px",
  },
  listLink: {
    textDecoration: "none",
    color: "darkblue",
    justifyContent: "center",
  },
};


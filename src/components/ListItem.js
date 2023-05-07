import React from "react";
import "../styles.css";

function ListItem({ note }) {
  return (
    <li className="list-item">
      <span>{note.title}</span>
    </li>
  );
}

export default ListItem;

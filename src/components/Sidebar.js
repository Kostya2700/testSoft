import React from "react";
import ListItem from "./ListItem";
import SearchBox from "./SearchBox";
import "../styles.css";

function Sidebar() {
  const notes = [
    { id: 1, title: "Note 1" },
    { id: 2, title: "Note 2" },
    { id: 3, title: "Note 3" },
  ];

  return (
    <div className="sidebar">
      <SearchBox />
      <ul className="note-list">
        {notes.map((note) => (
          <ListItem key={note.id} note={note} />
        ))}
      </ul>
      <button className="add-note-button">+</button>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "../styles.css";

function Workspace() {
  return (
    <div className="workspace">
      <textarea className="editor" placeholder="Enter your note here..." />
      <div className="preview">Note preview</div>
    </div>
  );
}

export default Workspace;

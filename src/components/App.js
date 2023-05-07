import React from "react";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";
import "../styles.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Workspace />
    </div>
  );
}

export default App;

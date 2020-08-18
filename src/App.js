import React from "react";
import "./App.css";
import fetchToDos from "./api/fetchToDos";

function App() {
  fetchToDos();
  return <div>Hallo</div>;
}

export default App;

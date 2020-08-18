import React, { useEffect, useState } from "react";
import "./App.css";
import fetchToDos from "./api/fetchToDos";
import postToDo from "./api/postToDo";

function App() {
  const [toDos, setToDos] = useState(null);
  async function doFetch() {
    const fetchData = await fetchToDos();
    setToDos(fetchData);
  }
  useEffect(() => {
    doFetch();
  }, []);

  function addToDo() {
    postToDo().then(doFetch);
  }
  return (
    <div>
      {toDos?.map((todo) => (
        <h3 key={todo.id}>{todo.task}</h3>
      ))}
      <button onClick={addToDo}>Click</button>
    </div>
  );
}

export default App;

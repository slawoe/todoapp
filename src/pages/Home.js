import React, { useEffect, useState } from "react";
import fetchToDos from "../api/fetchToDos";
import postToDo from "../api/postToDo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  const [toDos, setToDos] = useState(null);
  async function doFetch() {
    const fetchData = await fetchToDos();
    setToDos(fetchData);
  }
  useEffect(() => {
    doFetch();
  }, []);

  function addToDo() {
    postToDo("Hello", "zweiteZeile", "Dritte").then(doFetch);
  }
  return (
    <div>
      <Link to="/add">Add Task</Link>
      {toDos?.map((todo) => (
        <h3 key={todo.id}>{todo.task}</h3>
      ))}

      <form>
        <input placeholder="Task" />
        <input placeholder="Autor" />
        <input placeholder="Completed? true or false" />
        <button onClick={addToDo}>Click</button>
      </form>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import postToDo from "../api/postToDo";

function AddTask() {
  const [task, setTask] = useState(null);
  const [author, setAuthor] = useState(null);
  const [completed, setCompleted] = useState(null);

  function addToDo() {
    postToDo(task, author, completed);
  }

  function taskChange(task) {
    setTask(task.target.value);
  }
  function authorChange(author) {
    setAuthor(author.target.value);
  }
  function completedChange(completed) {
    setCompleted(completed.target.value);
  }

  return (
    <div>
      <Link to="/">Tasks</Link>
      <form>
        <label>
          Task:
          <input type="text" name="task" onChange={taskChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" onChange={authorChange} />
        </label>
        <label>
          Completed:
          <input type="text" name="completed" onChange={completedChange} />
        </label>
        <input type="submit" value="Submit" onClick={addToDo} />
      </form>
    </div>
  );
}

export default AddTask;

// postToDo("Hello", "zweiteZeile", "Dritte").then(doFetch);

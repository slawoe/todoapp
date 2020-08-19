import React, { useState } from "react";
import postToDo from "../api/postToDo";
import "./AddTask.css";

function AddTask() {
  const [task, setTask] = useState("");
  const [author, setAuthor] = useState("");

  function taskChange(task) {
    setTask(task.target.value);
  }
  function authorChange(author) {
    setAuthor(author.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const todo = { task, author };
    await postToDo(todo);
    setTask("");
    setAuthor("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="addTask--main">
        <label>
          Task:
          <input placeholder="Task" value={task} onChange={taskChange} />
        </label>
        <label>
          Author:
          <input placeholder="Author" value={author} onChange={authorChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddTask;

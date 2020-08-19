import React, { useState } from "react";
import postToDo from "../api/postToDo";
import "./AddTask.css";

function AddTask() {
  const [task, setTask] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  function taskChange(task) {
    setTask(task.target.value);
  }
  function authorChange(author) {
    setAuthor(author.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const todo = { task, author };
    await postToDo(todo);
    setTask("");
    setAuthor("");
    setLoading(false);
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
        <input
          type="submit"
          value="Submit"
          disabled={!task || !author || loading}
        />
      </form>
    </div>
  );
}

export default AddTask;

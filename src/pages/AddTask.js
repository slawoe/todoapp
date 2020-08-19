import React, { useState } from "react";
import postToDo from "../api/postToDo";
import "./AddTask.css";

function AddTask() {
  const [task, setTask] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function taskChange(task) {
    setTask(task.target.value);
  }
  function authorChange(author) {
    setAuthor(author.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    const todo = { task, author, createdAt: Date.now() };
    try {
      await postToDo(todo);
      setTask("");
      setAuthor("");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }

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
        {error && <p>Something bad happened 🤣. Please try again.</p>}
      </form>
    </div>
  );
}

export default AddTask;

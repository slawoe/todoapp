import React, { useState } from "react";
import postToDo from "../api/postToDo";
import styled from "@emotion/styled";

function AddTask() {
  const [task, setTask] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const Label = styled.label`
    color: black;
  `;
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Input = styled.input`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
  `;

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
    <>
      <Form onSubmit={handleSubmit} className="addTask--main">
        <Label>
          Task:
          <Input placeholder="Task" value={task} onChange={taskChange} />
        </Label>
        <Label>
          Author:
          <Input placeholder="Author" value={author} onChange={authorChange} />
        </Label>
        <Input
          type="submit"
          value="Submit"
          disabled={!task || !author || loading}
        />
        {error && <p>Something bad happened 🤣. Please try again.</p>}
      </Form>
    </>
  );
}

export default AddTask;

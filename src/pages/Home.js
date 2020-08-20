import React, { useEffect, useState } from "react";
import fetchToDos from "../api/fetchToDos";
import useAsync from "../hooks/useAsync";

function Home() {
  const { data: toDos, loading, error } = useAsync(fetchToDos);

  return (
    <div>
      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}
      {toDos?.map((todo) => (
        <h3 key={todo.id}>{todo.task}</h3>
      ))}
    </div>
  );
}

export default Home;

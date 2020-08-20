import React, { useEffect, useState } from "react";
import fetchToDos from "../api/fetchToDos";
import useAsync from "../hooks/useAsync";
import styled from "@emotion/styled";
import Button from "./Button";
import ResetButton from "./ResetButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Span = styled.span`
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  background: grey;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px;
`;

function Home() {
  const { data: toDos, loading, error } = useAsync(fetchToDos);

  return (
    <Container>
      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}
      {toDos?.map((todo) => (
        <Span key={todo.id}>
          {todo.task}{" "}
          <ButtonContainer>
            <Button />
            <ResetButton />
          </ButtonContainer>
        </Span>
      ))}
    </Container>
  );
}

export default Home;

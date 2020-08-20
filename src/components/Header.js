import React from "react";
import styled from "@emotion/styled";

const Container = styled.header`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 4;
  background: grey;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header(children) {
  return (
    <Container>
      <h1>ToDoList</h1>
    </Container>
  );
}

export default Header;

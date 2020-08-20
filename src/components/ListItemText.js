import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: blue;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

function ListItems(children) {
  return <Container></Container>;
}

export default ListItems;

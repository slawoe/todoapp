import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const CheckButton = styled.button`
  border-radius: 10px;
  text-align: center;
  color: green;
  background: white;
  margin: 2px;
`;

function Button(props) {
  return <CheckButton>✓</CheckButton>;
}

export default Button;

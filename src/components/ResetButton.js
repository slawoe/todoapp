import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const ReseterButton = styled.button`
  border-radius: 10px;
  text-align: center;
  color: red;
  background: white;
  margin: 2px;
`;

function ResetButton(props) {
  return <ReseterButton>x</ReseterButton>;
}

export default ResetButton;

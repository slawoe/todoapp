import React from "react";
import styled from "@emotion/styled";

const ReseterButton = styled.button`
  border-radius: 10px;
  text-align: center;
  color: red;
  background: white;
  margin: 2px;
`;

function ResetButton() {
  return <ReseterButton>x</ReseterButton>;
}

export default ResetButton;

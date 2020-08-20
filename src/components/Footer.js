import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import List from "../assets/list.svg";
import Plan from "../assets/plan.svg";

const MainFooter = styled.footer`
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 4;
  width: 100vw;
  color: white;
  background: grey;
  padding: 5px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  display: flex;
  justify-content: space-around;
  & > a {
    color: white;
    display: grid;
  }
  & > a > img {
    height: 3em;
  }
`;

function Footer(props) {
  return (
    <MainFooter>
      <Link to="/">
        {" "}
        <img src={List} alt="Tasks" />
      </Link>
      <Link to="/add">
        <img src={Plan} alt="Add task" />
      </Link>
    </MainFooter>
  );
}

export default Footer;

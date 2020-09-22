import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HelpQueueHeader = styled.h1`
  font-size: 80px;
  text-align: center;
  color: #39ff14;
  background-color: black;
`;

function Header() {
  const headerText = "Help Queue";
  return (
    <React.Fragment>
      <HelpQueueHeader>{headerText}</HelpQueueHeader>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;

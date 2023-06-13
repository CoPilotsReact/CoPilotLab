import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import Nav from "./nav";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <a href="/">
          <img alt="React Logo" src="./src/assets/react.svg"></img>
        </a>
        <Nav />
      </StyledHeader>
    </>
  );
};

export default Header;

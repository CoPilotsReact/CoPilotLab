import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import Nav from "./nav";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Nav />
        <h1>Hej ifrån en styled header </h1>
      </StyledHeader>
    </>
  );
};

export default Header;

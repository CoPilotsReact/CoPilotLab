import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import Nav from "./nav";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Nav />
      </StyledHeader>
    </>
  );
};

export default Header;

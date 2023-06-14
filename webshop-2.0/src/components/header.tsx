import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import Nav from "./nav";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <a className="logo" href="/">
          <img  alt="React Logo" src="./src/assets/react.svg"></img>
        </a>
        <Nav />
        <a className="cart" href="/cart">
          <img  alt="Cart logo" src="./src/assets/cart-shopping-solid.svg"></img>
        </a>
      </StyledHeader>
    </>
  );
};

export default Header;

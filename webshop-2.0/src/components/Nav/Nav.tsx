
import { Link, Outlet } from "react-router-dom";
import { StyledNav } from "./Nav.styled";

const Nav = () => {
  return (
    <>
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNav>
    <Outlet/>
    </>
  );
  
};

export default Nav;


/*
<li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>

*/
import React from "react";
// React Router
import { Link } from "react-router-dom";

// Styled Components
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Link className="navbar-link navbar-link-home" to="/">
        My Life
      </Link>
      <ul className="navbar-list">
        <li>
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  .navbar-list {
    display: flex;
    gap: 4rem;
    list-style: none;
  }
  .navbar-link {
    font-weight: 900;
  }
  .navbar-link-home {
    font-size: 1.5rem;
    text-decoration: none;
  }
`;

import React from "react";
// React Router
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">My Life</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

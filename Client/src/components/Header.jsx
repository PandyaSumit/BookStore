import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/book.webp";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img  style={{width:31.88, height:32}}src={logo} alt="ReactJs" /> BookStore
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
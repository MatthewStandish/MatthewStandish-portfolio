import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Matthew Standish</h1>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="active">
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

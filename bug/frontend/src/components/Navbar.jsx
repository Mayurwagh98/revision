import React from "react";
import {NavLink} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Signin</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };

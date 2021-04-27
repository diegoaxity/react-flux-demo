import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const active = { color: "orange" };
  return (
    <nav>
      <NavLink to="/" exact activeStyle={active}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={active}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={active}>
        About
      </NavLink>
    </nav>
  );
}

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="nav-header">
      <NavLink to="/" className="nav_link_home">
        Accueil
      </NavLink>
      <NavLink to="/about" className="nav_link_about">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;
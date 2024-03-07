import React from "react";
import { NavLink } from "react-router-dom";
import './nav.scss'


const Nav = () =>  {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link-home">
        Accueil
      </NavLink>
      <NavLink to="/about" className="nav-link-about">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;
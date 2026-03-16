import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

/*
const Navbar = () => {

  return (
    <nav>
        <ul className="pages-list">
          <li><NavLink to="/" end>Accueil</NavLink></li>
          <li><NavLink to="/cours">Cours</NavLink></li>
          <li><NavLink to="/publications">Publications</NavLink></li>
          <li><NavLink to="/parcours">Parcours</NavLink></li>
          <li><NavLink to="/autre">Autre</NavLink></li>
        </ul>
    </nav>
  );
};
*/

const Navbar = () => {

  return (
    <nav>
        <ul className="pages-list">
          <li><NavLink to="/publications">Publications</NavLink></li>
        </ul>
    </nav>
  );
};

export default Navbar;
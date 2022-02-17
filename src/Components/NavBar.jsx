import React from "react";
import { NavLink } from "react-router-dom";
import StyledNavbar from "../Styles/StyledNavbar";
import avatar from "../assets/oscar1.png";
import logo from "../assets/ozzylogo.png";
const NavBar = () => {
  return (
    <StyledNavbar>
      <div className="avatar">
        <img src={avatar} alt="my personal pict" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
      <footer className="footer">
        <img src={logo} alt="logo picute" />
        <p>@2022 Portfolio Website</p>
      </footer>
    </StyledNavbar>
  );
};

export default NavBar;

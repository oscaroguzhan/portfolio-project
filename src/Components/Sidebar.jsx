import React from "react";
import StyledSidebar from "../Styles/StyledSidebar";
import NavBar from "./NavBar";

const Sidebar = ({hamburgerMenu}) => {
  return (
    <StyledSidebar className={hamburgerMenu ? "toogleHamburger" : ""} >
      <NavBar />
    </StyledSidebar>
  );
};

export default Sidebar;

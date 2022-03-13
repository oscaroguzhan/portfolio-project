import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import StyledMainContent from "./Styles/StyledMainContent";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [hamburgerMenu, SetHamburgerMenu] = useState(false);
  return (
    <div className="App">
      <Sidebar hamburgerMenu={hamburgerMenu}/>

      <div className="hamburger-menu">
        <IconButton onClick={() => SetHamburgerMenu(!hamburgerMenu)}>
          <MenuIcon />
        </IconButton>
      </div>
      <StyledMainContent>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/about">
            <AboutPage />
          </Route>

          <Route path="/resume">
            <ResumePage />
          </Route>

          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </StyledMainContent>
    </div>
  );
}

export default App;

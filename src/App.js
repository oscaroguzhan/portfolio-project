import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import StyledMainContent from "./Styles/StyledMainContent";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
function App() {
  return (
    <div className="App">
      <Sidebar />
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

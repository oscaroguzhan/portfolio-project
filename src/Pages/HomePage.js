import React from "react";
import Typical from "react-typical";
import StyledHomePage from "../Styles/StyledHomePage";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const HomePage = () => {
  return (
    <StyledHomePage>
      <h2> Hi This is</h2>
      <h1>Oscar</h1>
      <div className="personal-info">
        <h3>
          I am an enthusiastic front end developer student and I have experience
          in
        </h3>
        <span>
          <Typical
            className="typical-div"
            steps={[
              "React/Router-Redux ⭐️",
              1000,
              "HTML5/CSS3",
              1000,
              "Bootstrap/SASS/Styled-Component ⭐️",
              1000,
              "UX-Design",
              1000,
              "Node.js",
              1000,
              "C-sharp/Python",
              1000,
            ]}
            loop={Infinity}
            wrapper="h3"
          />
        </span>
      </div>
      <div className="social-icons">
        <div className="icons">
          <a href="https://github.com/oscaroguzhan">
            <GitHubIcon className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/oscar-wihlborg-erg%C3%BCn/">
            <LinkedInIcon className="icon" />
          </a>
          <a href="https://www.facebook.com/oscaroguzhan">
            <FacebookIcon className="icon" />
          </a>
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;

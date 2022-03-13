import React from "react";
import styled from "styled-components";
import { InnerLayout, Layout } from "../Styles/Layout";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <StyledSkills>
      <Layout>
        <Title title={"Skills"} span={"Skills"} />
        <InnerLayout />
        <div className="skills">
          <ProgressBar title={"REACT JS"} width={"80%"} text={"80%"} />
          <ProgressBar title={"JAVASCRIPT"} width={"80%"} text={"80%"} />
          <ProgressBar title={"HTML5/CSS3"} width={"85%"} text={"85%"} />
          <ProgressBar title={"BOOTSTARP/SASS"} width={"75%"} text={"75%"} />
          <ProgressBar title={"NODE.JS"} width={"75%"} text={"75%"} />
          <ProgressBar title={"C++"} width={"75%"} text={"75%"} />
        </div>
      </Layout>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  color: white;
  .skills {
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      @media all and (max-width:700px) {
        grid-template-columns: 1fr;
      }
  }
  
`;

export default Skills;

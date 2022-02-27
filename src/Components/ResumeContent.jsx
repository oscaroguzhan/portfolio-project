import React from "react";
import styled from "styled-components";
import ResumeElement from "./ResumeElement";

const ResumeContent = () => {
  return (
    <StyledResumeContent>
      <ResumeElement
        year={"2021 - present"}
        title={"Front End Developer"}
        subtitle={"EC-Utbildning"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugiat!"
        }
      />
      <ResumeElement
        year={"2011 - 2015"}
        title={"Master education in Molecular Biology"}
        subtitle={"Lund University"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugiat!"
        }
      />
    </StyledResumeContent>
  );
};

const StyledResumeContent = styled.div`
margin: 10px;

border-left: 2px solid var(--border-color);

`;
export default ResumeContent;

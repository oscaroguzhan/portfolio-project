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
        text={"Front end developer student looking for new opportunities"}
      />
      <ResumeElement
        year={"2011 - 2015"}
        title={"Master in Molecular Biology"}
        subtitle={"Lund University"}
        text={
          "Realized my passion at IT and programming"
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

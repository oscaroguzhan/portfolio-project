import React from "react";
import styled from "styled-components";
import { Layout, InnerLayout } from "../Styles/Layout";
import SubTitle from "./SubTitle";
import Title from "./Title";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ResumeContent from "./ResumeContent";
const Resume = () => {
  return (
    <Layout>
      <StyledResume>
        <Title title={"Resume"} span={"Resume"} />
        <InnerLayout>
          <SubTitle icon={<SchoolIcon />} subtitle={"Educations"} />
          <ResumeContent />
        </InnerLayout>
      </StyledResume>
    </Layout>
  );
};

const StyledResume = styled.div`
`;
export default Resume;

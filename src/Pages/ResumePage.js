import React from "react";
import Skills from "../Components/Skills";
import Title from "../Components/Title";
import { InnerLayout } from "../Styles/Layout";

const ResumePage = () => {
  return (
    <div>
      <Skills />
      <InnerLayout />
      <Title title={"Resume"} span={"Resume"} />
    </div>
  );
};

export default ResumePage;

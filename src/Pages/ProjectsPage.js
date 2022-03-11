import React, { useState } from "react";
import Button from "../Components/Button";
import ProjectsMenu from "../Components/ProjectsMenu";
import Title from "../Components/Title";
import projects from "../data/projects";
import { Layout, InnerLayout } from "../Styles/Layout";
const ProjectsPage = () => {
  const allButtons = ["All", ...new Set(projects.map((item) => item.category))];
  console.log(allButtons);
  const [menuItem, setMenuItem] = useState(projects);
  const [button, setButton] = useState(allButtons);
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(projects);
      return;
    }
    let filteredProjects = projects.filter((item) => item.category === button);
    setMenuItem(filteredProjects);
  };
  return (
    <div>
      <Layout>
        <Title title={"Portfolio"} span={"Projects"} />
        <InnerLayout>
          <Button filter={filter} button={button} />
          <ProjectsMenu menuItem={menuItem} />
        </InnerLayout>
      </Layout>
    </div>
  );
};

export default ProjectsPage;

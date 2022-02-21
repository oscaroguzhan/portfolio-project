import React from "react";
import Title from "../Components/Title";
import Layout from "../Styles/Layout";
import StyledAboutPage from "../Styles/StyledAboutPage";

const AboutPage = () => {
  return (
    <Layout>
      <StyledAboutPage>
        <Title title={"About me"} span={"Ozzy"} />
      </StyledAboutPage>
    </Layout>
  );
};

export default AboutPage;

import React from "react";

import Title from "../Components/Title";
import {Layout} from "../Styles/Layout";

import me from "../assets/me.jpeg";
import ImageSection from "../Components/ImageSection";
const AboutPage = () => {
  return (
    <Layout>
      <>
        {/* reusable component */}
        <Title title={"About me"} span={"Who Am I"} />
        <ImageSection />
      </>
    </Layout>
  );
};

export default AboutPage;

import React from "react";
import StyledTitle from "../Styles/StyledTitle";

const Title = ({ title, span }) => {
  return (
    <StyledTitle>
      <h1>
        {title}
        <span>{span} </span>
      </h1>
      
    </StyledTitle>
  );
};

export default Title;

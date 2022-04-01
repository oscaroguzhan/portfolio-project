import React from "react";
import { useSelector } from "react-redux";
import StyledTitle from "../Styles/StyledTitle";

const Title = ({ title, span }) => {
  const { lightMode } = useSelector((state) => state.toggle);
  return (
    <StyledTitle>
      <h1>
        {title}
        <span
          style={{
            color: lightMode ? "var(--secondary-color)" : "rgba(25,29,43,.90)",
          }}
        >
          {span}{" "}
        </span>
      </h1>
    </StyledTitle>
  );
};

export default Title;

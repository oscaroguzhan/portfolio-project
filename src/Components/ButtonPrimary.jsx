import React from "react";
import styled from "styled-components";

const ButtonPrimary = ({ title }) => {
  return (
    <StyledButtonPrimary href="cv.pdf" download="oscar cv.pdf">
      {title}
    </StyledButtonPrimary>
  );
};

const StyledButtonPrimary = styled.a`
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  border-radius: 8px;
  margin: 2rem 2rem 2rem 5rem;
  &:hover {
    opacity: 0.8;
    transition: all 0.5 ease-in;
  }
  @media all and (max-width: 920px) {
    display: flex;
    width: 20rem;
    margin: 2rem auto;
    align-items: center;
    justify-content: center;
  }
`;
export default ButtonPrimary;

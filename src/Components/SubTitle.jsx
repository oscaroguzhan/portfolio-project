import React from "react";
import styled from "styled-components";

const SubTitle = ({ icon, subtitle }) => {
  return (
    <StyledSubTitle>
      <span>{icon}</span>
      <h3>{subtitle}</h3>
    </StyledSubTitle>
  );
};

const StyledSubTitle = styled.div`
  color: var(--white);
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    padding: 0.2rem;
    svg {
      font-size: 1.8rem;
      color: var(--primary-color);
    }
  }
  h3 {
    font-size: 2rem;
    margin: 1rem 0 1rem 0.3rem;
  }
`;
export default SubTitle;

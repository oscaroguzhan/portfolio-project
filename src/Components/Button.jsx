import React from "react";
import styled from "styled-components";

const Button = ({ filter, button }) => {
  return (
    <StyledButtonContainer>
      {button.map((btn, i) => {
        return (
          <StyledButton key={i} onClick={() => filter(btn)}>
            {btn}
          </StyledButton>
        );
      })}
    </StyledButtonContainer>
  );
};

const StyledButtonContainer = styled.div`
margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  
  margin: 3rem auto;
`;
const StyledButton = styled.button`
border:none;
outline:none;
background-color:var(--primary-color);
opacity:0.95;
color:var(--white);
padding: 0.8rem 1.5rem;
font-size:1.2rem;
border-radius:10px;
cursor: pointer;
transition: all .5 ease-in-out;
&:not(:last-child) {
    margin-right:1rem;
}
&:hover {
    background-color:var(--border-color);
}
`;
export default Button;

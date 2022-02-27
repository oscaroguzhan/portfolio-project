import React from "react";
import styled from "styled-components";

const ResumeElement = ({ year, title, subtitle, text }) => {
  return (
    <StyledResumeElement>
      <section className="left">
        <p>{year}</p>
      </section>
      <section className="right">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{text}</p>
      </section>
    </StyledResumeElement>
  );
};
const StyledResumeElement = styled.div`
  color: var(--white);
  display: flex;
  margin-bottom: 4rem;
  .left {
    margin: 0.3rem;
    padding-left: 20px;
    width: 40%;
    position:relative;
    &::before {
      content:"";
      position:absolute;
      top:4px;
      left:-14px;
      height:15px;
      width:15px;
      background-color:var(--primary-color);
      border-radius:50%;
    }
    p {
      display: inline-block;
    }
  }
  .right {
    position: relative;
    padding-left: 5rem;
    
    &::before {
      content: "";
      position: absolute;
      top: 15px;
      left: -10px;
      width: 3rem;
      height: 2px;
      background-color: var(--border-color);
    }
    h4 {
      color: var(--primary-color);
      font-size: 1.6rem;
      padding-bottom: 0.3rem;
    }
    h5 {
      font-size: 1.2rem;
      padding-bottom: 0.3rem;
    }
  }
`;
export default ResumeElement;

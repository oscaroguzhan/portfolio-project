import React from "react";
import styled from "styled-components";
import profilPict from "../assets/me3-modified.jpeg";
import ButtonPrimary from "./ButtonPrimary";
const ImageSection = () => {
  return (
    <StyledImageSect>
      <div className="left">
        <img src={profilPict} alt="" />
      </div>
      <div className="right">
        <div className="right-subtitle">
          <h3> Front End Developer </h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, repellendus similique. Velit provident harum odio
            reiciendis, quia minima voluptate{" "}
          </p>
        </div>
        <div className="info-container">
          <ul className="info-left">
            <li>Name :</li>
            <li>Age :</li>
            <li>Country : </li>
            <li>Languages :</li>
            <li>Family :</li>
          </ul>
          <ul className="info-right">
            <li>Oscar Wihlborg Ergun</li>
            <li>37</li>
            <li>Sweden</li>
            <li>Swedish, English, Turkish</li>
            <li>3 wonderful kids</li>
          </ul>
        </div>
        <ButtonPrimary title={'Download Cover letter'}/>
      </div>
    </StyledImageSect>
  );
};

const StyledImageSect = styled.div`
  margin-top: 6rem;
  color: var(--white);
  display: flex;
 gap:10px;
  .left {
    width: 100%;
    margin-top:1rem;
    flex: 1;
    height:60vh;
    img {
      width: 100%;
      border-radius: 10px;
      height:100%;
      object-fit:cover;
    }
  }
  .right {
    flex: 2;
    .right-subtitle {
      text-align: center;
      font-size: 2.2rem;
      color: var(--primary-color);
      
      
    }
    p {
      text-align:center;
      margin: 2rem auto;
      font-size: 1.3rem;
      
      
    }

    .info-container {
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        line-height:2.5rem;
        margin-top:3rem;
        font-size: 1.3rem;
        
        
    }
    
  }
  
`;
export default ImageSection;

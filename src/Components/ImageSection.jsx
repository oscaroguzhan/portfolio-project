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
        <div className="right-text">
          <div className="right-subtitle">
            <h3> Front End Developer </h3>
          </div>
          <div>
            <p>
              Ambitious, curious and social front-end developer who is eager and
              ready to learn much more...
            </p>
          </div>
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

        <ButtonPrimary
          title={"Download CV"}
          className="btn-cv"
         
        />
      </div>
    </StyledImageSect>
  );
};

const StyledImageSect = styled.div`
  margin-top: 6rem;
  color: var(--white);
  display: flex;

  gap: 10px;
  .left {
    width: 100%;
    margin-top: 1rem;
    min-height: 30rem;

    img {
      width: 100%;
      border-radius: 10px;
      height: auto;
      object-fit: cover;
    }
  }
  .right {
    flex: 1;
    .right-subtitle {
      text-align: center;
      font-size: 2.2rem;
      color: var(--primary-color);
    }
    p {
      text-align: center;
      margin: 2rem auto;
      font-size: 1.3rem;
    }

    .info-container {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      line-height: 2.5rem;
      margin-top: 3rem;
      font-size: 1.3rem;
    }
  }
  // MEDIA QUERIES
  @media all and (max-width: 560px) {
    .right {
      .info-container {
        font-size: 0.9rem;
      }
      a {
        padding: 0.8rem;
        font-size: 1.2rem;
      }
    }
  }
  @media all and (min-width: 561px) {
    .right {
      a {
        margin-left: 4rem;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    .left {
      width: 100%;
      margin: 4rem auto;
      img {
        object-fit: cover;
        width: 90%;
      }
    }
    .right {
      .right-subtitle {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
      a {
        margin-right: 0;
      }
    }
  }
  @media all and (min-width: 1025px) {
    .left {
      flex: 1;
      height: auto;
    }
    .right {
      margin: 1rem;
      .right-text {
        flex: 2;
      }
      a {
        margin-right: 0;
      }
    }
  }
  @media all and (min-width: 1120) {
    .left {
    }
    .right {
      margin: 1rem;
      a {
        font-size: 0.9rem;
        margin-right: 0;
      }
    }
  }
`;
export default ImageSection;

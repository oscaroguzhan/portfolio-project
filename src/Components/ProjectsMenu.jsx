import React from "react";
import styled from "styled-components";
import { GitHub } from "@material-ui/icons";
const ProjectsMenu = ({ menuItem }) => {
  return (
    <StyledProjectsMenu>
      {menuItem.map((item) => {
        console.log(item.link_github);
        return (
          <div className="grid-item" key={item.id}>
            <div className="project-content">
              <div className="project-img">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link_github}>
                      <GitHub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h5> {item.title}</h5>
            <p>{item.text}</p>
          </div>
        );
      })}
    </StyledProjectsMenu>
  );
};

const StyledProjectsMenu = styled.div`
  margin-top: 4rem;
  color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  @media all and (max-width: 520px){
        grid-template-columns: 1fr;
        text-align:center;
        margin-bottom:1rem;
    }
    @media all and (max-width:1420px) {
      grid-template-columns:repeat(3,1fr);
      text-align:center;
    }

    @media all and (max-width:1200px) {
      grid-template-columns:repeat(2,1fr);
      text-align:center;
    }
    @media all and (max-width:680px) {
      grid-template-columns:1fr;
      text-align:center;
    }
  .grid-item {
    width: 100%;

    .project-content {
      display: block;
      position: relative;
    }
    
    img {
      object-fit: cover;
      height: 40vh;
    }

    ul {
      display: none;
    }
    .project-img {
      &::before {
        content: "";
        position: absolute;
        left: 10%;
        top: 20%;

        height: 0;
        width: 0;
        transition: all 0.5s ease-in-out;
      }
    }
    .project-img:hover {
      ul {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        @media all and (max-width: 520px) {
          left:40%;
        }
        li {
          background-color: var(--secondary-color);
          padding: 0.8rem;
          border-radius: 50%;
          @media all and (max-width: 520px) {
          padding:0.5rem;
          margin-left: 4rem;
        }
          a {
            display: flex;
            text-align: center;
          }
        }
        svg {
          font-size: 2.5rem;
          color: var(--white);
          cursor: pointer;
          @media all and (max-width: 520px) {
          font-size: 2rem;
          text-align:center;
        }
        }
      }
      &::before {
        height: 25vh;
        width: calc(100% - 25%);
        background-color: var(--border-color);
        opacity: 0.9;
        transform-origin: left;
        transform: scale(1);
        transition: all 0.5s ease-in-out;
        @media all and (max-width: 520px) {
          width: 40%;
          margin-left: 4rem;
    }
      }
    }
  }
`;
export default ProjectsMenu;

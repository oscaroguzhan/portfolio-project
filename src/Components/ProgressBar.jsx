import React from "react";
import styled from "styled-components";

const ProgressBar = ({ title,width, text }) => {
  return (
    <StyledProgressbar>
      <h4>{title} </h4>
      <div className="progress-bar">
          <p>{text}</p>
          <div className="progress">
              <span style={{width: width}}></span>
          </div>
      </div>
    </StyledProgressbar>
  );
};

const StyledProgressbar = styled.div`
    .progress-bar {
        display:flex;
        align-items:center;
        margin-bottom:0.5rem;

        p{
            padding-right: 0.5rem;
        }
       
        .progress {
            position: relative;
            margin-left: 10px ;
            width:100%;
            background-color:var(--border-color);
            height:.5rem;
            border-radius:1rem;

            span {
                background-color:var(--primary-color);
                position:absolute;
                left:0;
                bottom:0;
                height:100%;
                border-radius:1rem;
            }
        }
    }

`;
export default ProgressBar;

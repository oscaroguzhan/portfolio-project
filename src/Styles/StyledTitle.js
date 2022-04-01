import styled from "styled-components";

const StyledTitle = styled.div`
  position: relative;
  h1 {
    color:var(--white);
    font-size: 3.5rem;
    text-transform:uppercase;
    position: relative;
    
    &::before {
      content:"";
      position:absolute;
      margin-top:4px;
      width:12rem;
      border:0.1px solid white;
      height:.35rem;
      top:80%;
      border-radius:10px;
      left:0;
      background-color:var(--sidebar-bg-color);
      font-weight:900;

    }
    &::after {
      content:"";
      position:absolute;
      margin-top:4px;
      width:4rem;
      border:0.1px solid white;
      height:.35rem;
      top:80%;
      left:0;
      
      border-radius:10px;
      background-color:var(--primary-color);

    }
    span {
      color:rgba(25,29,43,.90)!important;
      font-weight:900;
      font-size:5.5rem;
      position:absolute;
      top:60%;
      left:10%;
      z-index:-10;
    }
  }
  
  @media all and (max-width: 920px) {
    h1 {
      font-size: 3.5rem;

      span {
        margin-top: 1.5rem;
        font-size: 4.5rem;
      }
    }
  }
  @media all and (max-width:560px) {
    h1 {
      font-size: 2.5rem;
      span {
        font-size: 3.5rem;
      }
    }
  }
`;
export default StyledTitle;

import styled from "styled-components";

const StyledHomePage = styled.div`
  width: 100%;
  height: 100vh;
  color: var(--white);

  display: flex;
  flex-direction: column;
  h2 {
    margin-top: 5rem;
    margin-left: 4rem;
    font-size: 2rem;
  }
  h1 {
    margin-left: 9rem;
    font-size: 3rem;
  }
  .personal-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 1.5rem 2rem 1.5rem;

    span {
      margin: 4rem auto;
      font-size: 1.8rem;

      .typical-div {
        color: var(--primary-color);
        font-size: 2.4rem;
      }
    }
  }
  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    .icon {
      border-radius: 50%;
      font-size: 3rem;
      margin-left: 1.8rem;
      &:hover {
        border: 2px solid var(--border-color);
        padding: 3px;
        color: var(--primary-color);
        cursor: pointer;
        transition: all 0.5 ease-out;
      }
    }
  }
  @media screen and (min-width: 920px) {
    h2 {
      font-size: 2.3rem;
    }
    h1 {
      font-size: 3.5rem;
    }
    h3 {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 920px) {
    h2 {
      font-size: 1.5rem;
    }
    h1 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    .social-icons .icons .icon {
      font-size: 2.2rem;
    }
    .personal-info span .typical-div {
      font-size: 1.7rem;
    }
  }
`;

export default StyledHomePage;

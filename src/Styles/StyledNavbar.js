import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1.5rem 0;
    img {
      width: 90%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }
  .nav-items {
    li {
      display: flex;
      justify-content: center;
      text-align: center;
      a {
        margin: 0.6rem auto;

        &:hover {
          color: var(--primary-color);
          cursor: pointer;
          transition: all 0.5s ease-out;
        }
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    padding-top: 1.5rem;

    img {
    width: 100px;
    border-radius: 8px;
    }
    p{
        font-size: 1rem;
    }
  }
  
`;
export default StyledNavbar;

import styled from "styled-components";

const StyledSidebar = styled.div`
  width: 16.5rem;
  height: 100vh;
  position: fixed;
  background-color: var(--sidebar-bg-color);
  transition: all 0.5s ease-out;
  @media screen and (max-width: 1120px) {
    transform: translateX(-100%);
    z-index: 5;
  }
`;

export default StyledSidebar;

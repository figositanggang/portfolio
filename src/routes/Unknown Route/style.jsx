import styled from "styled-components";

import chopper from "../../assets/chopper.png";

export const Main = styled.main`
  color: black;
  background: url("${chopper}") no-repeat fixed center;
  background-size: 250px;
  min-height: 100vh;
  width: 100vw;
  opacity: 0;
  animation: munculUnkown 0.5s linear forwards;
  @keyframes munculUnkown {
    to {
      opacity: 1;
    }
  }
`;

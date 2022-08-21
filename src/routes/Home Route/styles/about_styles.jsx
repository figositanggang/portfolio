import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0;
  animation: munculAboutSection 0.5s linear forwards;
  @keyframes munculAboutSection {
    to {
      opacity: 1;
    }
  }
  h2 {
    transition: all 0.25s;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  padding: 1em;
  color: cyan;
  max-width: 25em;
  text-align: center;
  background: rgb(14, 23, 38);
  border: 5px solid rgb(119, 248, 255);
  box-shadow: 0 0 15px rgb(14, 23, 38);
  transition: all 0.25s cubic-bezier(0.77, 0, 0.175, 1);
  @media screen and (min-width: 500px) {
    :hover {
      background: rgba(119, 248, 255, 0);
      border: 5px solid rgb(14, 23, 38);
      color: rgb(14, 23, 38);
      font-weight: bold;
    }
  }
`;

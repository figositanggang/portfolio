import styled from "styled-components";

export const Main = styled.main`
  min-height: calc(100vh - 10.75vh);
  background: linear-gradient(90deg, black, var(--dark));
`;

export const Jumbotron = styled.div`
  width: 100%;
  height: calc(100vh - 20vh);
`;

export const Welcome = styled.div`
  font-size: 3em;
  font-weight: bold;
  color: rgb(185, 211, 255);
  position: relative;
  ::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 0.25rem;
    width: 0;
    background: rgb(138, 159, 194);
    border-radius: 0.5rem;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;
    -ms-border-radius: 0.5rem;
    -o-border-radius: 0.5rem;
    animation: munculBorder 0.5s linear forwards;
    -webkit-animation: munculBorder 0.5s linear forwards;
    animation-timing-function: ease-out;
    animation-delay: 0.25s;
  }
  ::before {
    content: "";
    background: linear-gradient(90deg, black, var(--dark));
    height: 100%;
    width: 110%;
    position: absolute;
    left: -10%;
    top: 0;
    animation: hilang 0.5s linear forwards;
    -webkit-animation: hilang 0.5s linear forwards;
    animation-timing-function: ease-out;
    animation-delay: 0.25s;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
  }
  @keyframes munculBorder {
    to {
      width: 45%;
    }
  }

  @keyframes hilang {
    to {
      left: 100%;
      opacity: 0;
      display: none;
      width: 0;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 2em;
  }
`;

export const Img = styled.img`
  width: 10em;
  opacity: 0;
  border-radius: 100%;
  box-shadow: 0 10px 50px black;
  animation: munculGambar 0.5s linear forwards;
  animation-delay: 0.25s;
  animation-timing-function: ease-out;
  @keyframes munculGambar {
    to {
      width: 25em;
      opacity: 0.75;
    }
  }
  @media screen and (max-width: 500px) {
    width: 150px !important;
  }
  @media (max-width: 700px) and (min-width: 500px) {
    width: 250px !important;
  }
`;

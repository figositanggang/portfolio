import styled from "styled-components";

export const FloatingButton = styled.div`
  bottom: 1rem;
  right: 1rem;
  color: white;
`;

export const Button = styled.a`
  color: cyan;
  background: black;
  padding: 0.25rem 0.75rem;
  transition: all 0.25s;
  @media screen and (min-width: 500px) {
    :hover {
      background: #000613;
    }
  }
`;

import styled from "styled-components";

export const Header = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.a`
  font-weight: bold;
  transition: all 0.25s;
  color: #bee4ff;
  letter-spacing: 1px;
  @media screen and (min-width: 500px) {
    :hover {
      background: #00000013;
      letter-spacing: 0;
    }
  }
  :active {
    background: #00000013;
    letter-spacing: 1px;
  }
`;
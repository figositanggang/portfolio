import "./App.css";

import { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

// Components
import { Header, Nav, NavItem } from "./components/Home/Header";
import { FloatingButton, Button } from "./components/FloatingButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FloatingButton className="d-flex position-fixed align-items-center">
          <Button href="https://www.facebook.com/unlinked182/" target="_blank">
            <span>
              <i class="fa-brands fa-facebook"></i>
            </span>
          </Button>
          |
          <Button href="https://twitter.com/emmet_182/" target="_blank">
            <span>
              <i class="fa-brands fa-twitter"></i>
            </span>
          </Button>
          |
          <Button href="https://www.instagram.com/mas.ogif/" target="_blank">
            <span>
              <i class="fa-brands fa-instagram"></i>
            </span>
          </Button>
        </FloatingButton>
        <Header>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <NavItem>Home</NavItem>
          </NavLink>
          <Nav>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link me-4" : " me-4"
              }
            >
              <NavItem>About</NavItem>
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <NavItem>Work</NavItem>
            </NavLink>
          </Nav>
        </Header>
        <Outlet />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;

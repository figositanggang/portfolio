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
          <Button href="https://www.facebook.com" target="_blank">
            f
          </Button>
          |
          <Button href="https://www.facebook.com" target="_blank">
            f
          </Button>
          |
          <Button href="https://www.facebook.com" target="_blank">
            f
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

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
          <Button
            href="https://www.facebook.com/unlinked182/"
            target="_blank"
            title="Figo Sitanggang"
          >
            <i class="fa-brands fa-facebook"></i>
          </Button>
          |
          <Button
            href="https://twitter.com/emmet_182/"
            target="_blank"
            title="Amwill Ph.D"
          >
            <i class="fa-brands fa-twitter"></i>
          </Button>
          |
          <Button
            href="https://www.instagram.com/mas.ogif/"
            target="_blank"
            title="Figo Sitanggang"
          >
            <i class="fa-brands fa-instagram"></i>
          </Button>
        </FloatingButton>
        <Header>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : "un-active"
            }
          >
            <NavItem>Home</NavItem>
          </NavLink>
          <Nav>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link me-4" : " me-4 un-active"
              }
            >
              <NavItem>About</NavItem>
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                isActive ? "active-link" : "un-active"
              }
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

import "./App.css";

import { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

// Components
import { Header, Nav, NavItem } from "./components/Home/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
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
              to="/gallery"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <NavItem>Gallery</NavItem>
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

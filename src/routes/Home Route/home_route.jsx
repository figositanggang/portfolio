import React, { Component } from "react";

import profile from "../../assets/pp baru.png";
import { Main, Jumbotron, Welcome, Img } from "./style";

class HomeRoute extends Component {
  render() {
    return (
      <Main>
        <Jumbotron className="d-flex justify-content-evenly align-items-center px-lg-5 px-md-3">
          <Welcome>Welcome to My Website</Welcome>
          <Img src={profile}></Img>
        </Jumbotron>
      </Main>
    );
  }
}

export default HomeRoute;

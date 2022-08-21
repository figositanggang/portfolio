import React, { Component } from "react";
import DocumentTitle from "react-document-title";

import profile from "../../assets/pp baru.png";
import { Main } from "./style";
import { Jumbotron, Welcome, Img } from "./styles/jumbotron_styles";
import { AboutSection, Box } from "./styles/about_styles";

class HomeRoute extends Component {
  render() {
    return (
      <DocumentTitle title="Figo Sitanggang | Home">
        <Main>
          <Jumbotron className="d-flex justify-content-evenly align-items-center px-lg-5 px-md-3 px-sm-2">
            <Welcome>Welcome to My Website</Welcome>
            <Img src={profile} loading="lazy"></Img>
          </Jumbotron>
          <AboutSection className="about-section px-lg-5 px-md-3 px-sm-2">
            <div>
              <h2>
                Halo guys,<h2>Saya Figo Collins Sitanggang</h2>
              </h2>
            </div>
            <Box>
              Saya adalah seorang mahasiswa Teknik Informatika dari Universitas
              Mikroskil
            </Box>
          </AboutSection>
        </Main>
      </DocumentTitle>
    );
  }
}

export default HomeRoute;

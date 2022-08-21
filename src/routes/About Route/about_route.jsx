import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
`;

class AboutRoute extends Component {
  render() {
    return (
      <DocumentTitle title="Figo Sitanggang | About">
        <Main></Main>
      </DocumentTitle>
    );
  }
}

export default AboutRoute;

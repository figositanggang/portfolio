import React, { Component } from "react";
import DocumentTitle from "react-document-title";

import { Main } from "./style";

class UnkownRoute extends Component {
  render() {
    return (
      <DocumentTitle title="Figo Sitanggang | Page Not Found">
        <Main>
          <h2>Kosong</h2>
        </Main>
      </DocumentTitle>
    );
  }
}

export default UnkownRoute;

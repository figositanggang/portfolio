import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background: rgb(15, 17, 21);
    }
    p, h1, h2, h3, h4, h5, h6 {
        color: rgba(255, 255, 255, 0.75);
    }
`;

export default GlobalStyle;

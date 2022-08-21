import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
    --dark: rgb(15, 19, 26);
    }
    body {
        background: linear-gradient(rgb(15, 17, 21) 27%, rgb(26, 30, 37), rgb(63, 71, 86), rgb(88, 100, 121)) no-repeat;
    }
    p, h1, h2, h3, h4, h5, h6 {
        color: rgba(255, 255, 255, 0.75);
    }
    ::-webkit-scrollbar {
    width: 5px;
    background: rgba(181, 206, 255, 0.512);
    }
    ::-webkit-scrollbar-thumb {
    background: #bfffff;
    border-radius: 1rem;
    }
    ::-webkit-scrollbar-thumb:active {
    background: #83aeae;

    }
`;

export default GlobalStyle;

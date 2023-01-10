import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root { font-family: 'Inter', sans-serif; }
    @supports (font-variation-settings: normal) {
        :root { font-family: 'Inter var', sans-serif; }
    }   

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color: #3A3335;
    }

    body {
        line-height: 1.4;
    }
    h1, h2, h3 {
        line-height: 1.2;
    }
`;
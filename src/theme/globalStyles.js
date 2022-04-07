import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;

        padding: 0;
        border: 0;
        margin: 0;

        text-decoration: none;
        list-style-type: none;
    }

    a {
        color: white;
    }

    body {
        font-family: 'Roboto', sans-serif;

        color: white;
        background-color: #0E0E13;
    }
`;

export default GlobalStyles;
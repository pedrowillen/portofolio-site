import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
    
    /* :root {
    --color-scheme1: #0081A7;
    --color-scheme2: #00AFB9;
    --color-scheme1-dark: #00475B;
    --color-scheme2-dark: #005B61;
    } */

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Raleway", Arial, Helvetica, sans-serif;
        background-color: #242424;
    }

    .gradient {
        background-image: linear-gradient(to right, #00475B, #00AFB9);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: white;
    }
`
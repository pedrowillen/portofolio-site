import styled from "styled-components";

export const HeaderMainContent = styled.div`
    padding: 100px 0;
    display: flex;
    justify-content: space-evenly;

    /* --color-scheme1: #0081A7;
    --color-scheme2: #00AFB9;
    --color-scheme1-dark: #00475B;
    --color-scheme2-dark: #005B61; */

    .gradient {
        background-image: linear-gradient(to right, #00475B, #00AFB9);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: white;
    }

    .font-s-40 {
        font-size: 40px;
    }

    .font-w-900 {
        font-weight: 900;
    }

    .intro {
        width: 650px;
        color: white;
    }

    h1 {
        font-size: 60px;
        line-height: 50px;
    }

    p {
        font-size: 18px;
        width: 600px;
    }

    .social-media {
        display: flex;
    }

    .social-media-icons {
        text-decoration: none;
        margin: 15px 15px 0 0;
    }
`
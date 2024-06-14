import styled from "styled-components";

export const AboutSectionContainer = styled.section`
    /* --color-scheme1: #0081A7;
    --color-scheme2: #00AFB9;
    --color-scheme1-dark: #00475B;
    --color-scheme2-dark: #005B61; */

    display: flex;
    justify-content: space-evenly;
    margin: 0 20%;

    .gradient-light-bg {
        background-image: linear-gradient(to right, #0081A7, #00AFB9);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: white;
    }

    .mb {
        margin-bottom: 10px;
    }

    .about-img {
        height: 600px;
        display: flex;
        align-items: center;
    }

    .about-description {
        width: 600px;
        height: 600px;
        display: flex;
        align-items: center;
    }

    h2 {
        font-size: 40px;
        position: relative;
        display: inline-block;
        margin-bottom: 20px;
    }

    h2::after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        height: 5px;
        background: linear-gradient(to right, #0081A7, #00AFB9);
    }

    p {
        font-size: 1.3em;
        font-weight: 500;
        color: #dfdfdf;
    }

    .social-media {
        display: flex;
    }

    .social-media-icons {
        text-decoration: none;
        margin: 15px 15px 0 0;
    }
`
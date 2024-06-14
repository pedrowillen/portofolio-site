import styled from "styled-components";

export const NavContent = styled.nav`
    /* --color-scheme1: #0081A7;
    --color-scheme2: #00AFB9;
    --color-scheme1-dark: #00475B;
    --color-scheme2-dark: #005B61; */

    display: flex;
    justify-content: space-between;
    margin: 0 80px;

    ul {
        list-style: none;
        display: flex;
        width: 500px;
        justify-content: space-between;
        align-items: center;
    }

    .nav-link, .contact {
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        position: relative;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        width: 0;
        height: 3px;
        background: linear-gradient(to right, #0081A7, #00AFB9);
        transition: width 0.5s ease;
    }

    .nav-link:hover::after {
        width: 100%;
    }

    .contact {
        background-color: white;
        padding: 5px 7px;
        color: #101010;
        border-radius: 3px;
    }
`
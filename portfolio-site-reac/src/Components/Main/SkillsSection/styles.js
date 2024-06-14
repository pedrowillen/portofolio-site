import styled from "styled-components";

export const SkillsSectionContainer = styled.section`

    /* :root {
    --color-scheme1: #0081A7;
    --color-scheme2: #00AFB9;
    --color-scheme1-dark: #00475B;
    --color-scheme2-dark: #005B61;
    } */

    background-color: #101010;
    padding: 100px 300px;

    h2 {
        font-size: 40px;
        position: relative;
        display: inline-block;
        margin-bottom: 30px;
    }

    h2::after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        height: 5px;
        background: linear-gradient(to right, #00475B, #00AFB9);
    }

.skills-cards {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card {
    background-color: #242424;
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-bottom: 35px;
    padding: 25px;
}

.card-img {
    text-align: center;
}

.card-title {
    color: white;
    text-align: center;
    font-size: 1.5em;
    margin: 15px;
}

.card-p {
    color: white;
    font-size: 1.3em;
    margin-bottom: 10px;
}

.card-img-icon {
    display: flex;
}
`
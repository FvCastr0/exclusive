import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin-top: 1.5rem;
    border-bottom: 0.1px solid #00000049;
    padding-bottom: 1rem;
    flex-wrap: wrap;

    .nav-links{
        color: #000;
        text-decoration: none;
        margin: 1.35rem;
        padding-bottom: 0.2rem;
        font-size: 1.15rem;
        position: relative;

    }

    .nav-links::after,
    .nav-links::before {
        content: " ";
        width: 0%;
        height: 1px;
        background: #000;
        position: absolute;
        bottom: 0;
        right: 50%;
        transition: all .3s ease-in-out
    }

    .nav-links::before {
        left: 50%;
    }

    .nav-links:hover::after,
    .nav-links:hover::before {
        width: 50%
    }

    div {
        display: flex;
        align-items: center;
    }

    .find-items {
        margin: 0 .8rem;
        cursor: pointer;
    }

    .find,
    .nav-items {
        display: flex;
        flex-direction: row;
    }

    .nav-items img{
        margin: 0 .6rem;
        cursor: pointer
    }

    .find {
        background-color: #F5F5F5;
        padding: .3rem 1rem;
        display: flex;
        cursor: pointer;
        margin-right: 1.2rem;
    }

    .find label {
        margin-top: .3rem;
    }

    .find input {
        border: none;
        outline: none;
        font-size: 1rem;
        background-color: transparent;
    }

    @media (max-width: 940px) {
        .find {
            margin-top: 2rem;
            margin-bottom: 1rem
        }

        div {
            flex-direction: column;
        }
    } 

    @media (max-width: 540px) {
        #logo {
            margin-bottom: 2rem;
        }
    } 

    @media (max-width: 400px) {
        ul {
           display: flex;
           flex-wrap: wrap;
           justify-content: center;
        }
    } 
`

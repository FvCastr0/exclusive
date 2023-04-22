import styled from "styled-components"
import logo from './img/logo.png'
import find from './img/find.svg'
import cart from './img/cart.svg'
import wishlist from './img/wishlist.svg'
import { Link } from "react-router-dom"

export default function Navigation() {
    return (
        <StyledNav>
            <img src={logo} alt="exclusive logo" id="logo" />

            <ul>
                <Link to="/" className="nav-links">Home</Link>
                <Link to="/" className="nav-links">Contact</Link>
                <Link to="/" className="nav-links">About</Link>
                <Link to="/" className="nav-links">SignUp</Link>
            </ul>

            <div>
                <div className="find">
                    <input type="text" id="find" placeholder="What are you looking for?" />
                    <label htmlFor="find"><img src={find} alt="find" /></label>
                </div>

                <div className="nav-items" >
                    <img src={cart} alt="cart" />
                    <img src={wishlist} alt="wishlist" />
                </div>
            </div>
        </StyledNav>
    )
}


const StyledNav = styled.nav`
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

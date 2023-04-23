import logo from './img/logo.png'
import find from './img/find.svg'
import cart from './img/cart.svg'
import wishlist from './img/wishlist.svg'
import { Link } from "react-router-dom"
import { StyledNav } from "components/styles/StyledNav"

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
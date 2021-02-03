import React from 'react';
// import { Hashlink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './style.css';
import honeyHomageLogoWhite from "../../images/honeyHomageLogoWhite.svg";
import LogoutButtonAuthenticator from "../LogoutButtonAuthenticator/LogoutButtonAuthenticator"

const Navbar = () => {
    return (
        <nav className="honeyHomageNavBar">
            <section>
                <div className="navLogoContainer">
                    <Link to="/">
                        <img src={honeyHomageLogoWhite} alt="honeyHomageNavLogo" className="honeyHomageNavLogo" />
                    </Link>
                </div>
                <div className="navLinkContainer">
                        <a href="#ourStory">Our Story</a>
                        <p>|</p>
                        <a href="#store">Honey Store</a>
                        <p>|</p>
                        <a href="#contactUs">Contact Us</a>
                </div>
                <div className="navUserContainer">
                        <Link to='/shoppingCart'><LogoutButtonAuthenticator /></Link> 
                </div>
            </section>
        </nav>
    );
}

export default Navbar;
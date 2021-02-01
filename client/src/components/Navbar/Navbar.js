import React from 'react';
import './style.css';
import honeyHomageLogoCarrot from "../../images/honeyHomageLogoCarrot.svg";
import LogoutButtonAuthenticator from "../LogoutButtonAuthenticator/LogoutButtonAuthenticator"

const Navbar = () => {
    return (
        <nav className="honeyHomageNavBar">
            <section>
                <div className="navLogoContainer">
                    <a href="/">
                    <img src={honeyHomageLogoCarrot} alt="honeyHomageNavLogo" className="honeyHomageNavLogo" />
                    </a>
                </div>
                <div className="navLinkContainer">
                        <a href="#">Our Story</a>
                        <p>|</p>
                        <a href="#">Honey Store</a>
                        <p>|</p>
                        <a href="#">Contact Us</a>
                </div>
                <div className="navUserContainer">
                        <LogoutButtonAuthenticator />
                </div>
            </section>
        </nav>
    );
}

export default Navbar;
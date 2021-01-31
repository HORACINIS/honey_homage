import React from 'react';
import './style.css';
import honeyHomageLogoWhite from "../../images/honeyHomageLogoCarrot.svg";

const Navbar = () => {
    return (
        <nav className="honeyHomageNavBar">
            <section>
                <div className="navLogoContainer">
                    <img src={honeyHomageLogoWhite} alt="honeyHomageNavLogo" className="honeyHomageNavLogo" />
                </div>
                <div className="navLinkContainer">
                        <a href="#">Our Story</a>
                        <p>|</p>
                        <a href="#">Honey Store</a>
                        <p>|</p>
                        <a href="#">Contact Us</a>
                </div>
                <div className="navUserContainer">
                        <a href="#"><i class="fas fa-user-circle"></i></a>
                        <a href="#"><i class="fas fa-shopping-cart"></i></a>
                </div>
            </section>
        </nav>
    );
}

export default Navbar;
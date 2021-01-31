import React from 'react';
import './style.css';
import honeyHomageLogoWhite from "../../images/honeyHomageLogoWhite.svg";

const Navbar = () => {
    return (
        <nav className="honeyHomageNavBar">
            <section>
                <div className="navLogoContainer">
                    <img src={honeyHomageLogoWhite} alt="honeyHomageNavLogo" className="honeyHomageNavLogo" />
                    <a href="#">Honey Homage</a>
                </div>
                <div className="navLinkContainer">
                        <a href="#">Our Story</a>
                        <a href="#">Honey Store</a>
                        <a href="#">Contact Us</a>
                </div>
                <div className="socialMediaLinksContainer">
                    <div>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-pinterest"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#">|</a>
                        <a href="#"><i class="fas fa-user-circle"></i></a>
                        <a href="#"><i class="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
            </section>
        </nav>
    );
}

export default Navbar;
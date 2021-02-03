import React from 'react';
import "./style.css";
import honeyHomageLogoWhite from "../../images/honeyHomageLogoWhite.svg";
import LoginButtonAuthenticator from "../LoginButtonAuthenticator/LoginButtonAuthenticator"
import Navbar from "../Navbar/Navbar"

const HeroCover = () => {
    return (
        <section className="heroCoverSection">
            <Navbar />
            <div className="heroCoverSectionContainer">
                <img src={honeyHomageLogoWhite} alt="honeyHomageLogoWhite" className="honeyHomageLogo" />
                <div className="text-center">
                    <h1 className="honeyHomageCoverTitle">Honey Homage</h1>
                </div>
                <div className="heroCoverButtons">
                    <LoginButtonAuthenticator />

                    <a href="#store"><button className="shopButton">Shop</button></a>
                </div>
                <div className="socialMediaLinksContainer" id="contactUs">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </section>
    );
}

export default HeroCover;

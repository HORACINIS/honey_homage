import React from 'react';
import './style.css';
import honeyHomageLogoWhite from "../../images/honeyHomageLogoWhite.svg";

const Footer = () => {
    return (
        <footer className="honeyHomageFooterSection">
            <img src={honeyHomageLogoWhite} alt="honeyHomageFooterLogo" className="honeyHomageFooterLogo" />
            <p>Copyright 2021 | Honey Homage | CodingPowerBuddies</p>
        </footer>
    );
}

export default Footer;
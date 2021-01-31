import React from 'react';
import "./style.css";
import honeyHomageLogoWhite from "../../images/honeyHomageLogoWhite.svg";

const HeroCover = () => {
    return (
        <section className="heroCoverSection">
            <img src={honeyHomageLogoWhite} alt="honeyHomageLogoWhite" className="honeyHomageLogo" />
            <div className="text-center">
                <h1 className="honeyHomageCoverTitle">Honey Homage</h1>
            </div>
        </section>
    );
}

export default HeroCover;
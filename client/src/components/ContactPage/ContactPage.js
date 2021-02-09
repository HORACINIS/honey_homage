import React from 'react';
import { ExternalLink } from 'react-external-link';
import './style.css';

const ContactPage = () => {
    return (
        <section className="contactUsSection" id="contactUs">
            <div className="contactUsTitleContainer">
                <h2>Contact Details</h2>
            </div>
            <div className="contactUsDetailsContainer">
                <div className="contactUsDetailsAddressContainer">
                    <p>1080 Goldtree Road, Honeywood NSW 2804</p>
                    <p>info@honeyhomage.com.au</p>
                    <p>(02) 4773 3279</p>
                </div>
            </div>
            <div className="socialMediaLinksSection">
                <div className="socialMediaLinksContainer">
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

export default ContactPage;
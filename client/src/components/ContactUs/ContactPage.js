import React from 'react';
import { ExternalLink } from 'react-external-link';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Locution from './Locution';

const ContactPage = () => {
    return (

        <section className="contactUsSection">
            <div className="contactUsContainer">
                <div className="linkContainer">
                    <div className="linkIcon">
                        <ExternalLink href="https://github.com/aBuiDev">
                        <span><i className="fab fa-instagram"></i></span>
                        </ExternalLink>
                    </div>
                    
                    <div className="linkIcon">
                        <ExternalLink href="https://github.com/HORACINIS">
                        <span><i className="fab fa-twitter"></i></span>
                        </ExternalLink>
                    </div>

                    <div className="linkIcon">
                        <ExternalLink href="https://github.com/Soni-247">
                        <span>  <i className="fab fa-pinterest"></i></span>
                        </ExternalLink>
                    </div>

                    <div className="linkIcon">
                        <ExternalLink href="https://github.com/HORACINIS/honey_homage">
                        <span><i className="fab fa-facebook"></i></span>
                        </ExternalLink>
                    </div>
                </div>
                <div className="location">
                    <Locution/>
                </div>
            </div>
        </section>
    );
    
}

export default ContactPage;
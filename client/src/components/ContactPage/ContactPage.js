import React from 'react';
import { ExternalLink } from 'react-external-link';


const ContactPage = () => {
    return (

        <section className="contactUsSection">
            <div className="contactUsContainer">
                <h2>Give us a Buzz!</h2>
                <div className='contactInfo' id='location'>
                    <div className='contactIcon'>

                    </div>
                    <div className="content">
                        <h3>Office, Australia</h3>
                        <br/>
                        <p>Australia, NSW</p>
                        <p>2828 The Northern Rd, Luddenham NSW 2745</p>
                        <h4>Phone</h4>
                        <br/>
                        <p>(02) 4773 3279</p>
                    </div>
                </div>

                <div className='contactInfo' id="email">
                    <div className='contactIcon'>

                    </div>      
                    <div className="content">
                      <h3>Emails</h3>
                      <h4>General Information:</h4>
                      <a href="andrew.bui.au@gmail.com">El Tigre</a>
                      <h4>Support:</h4>
                      <a href="horacinis@gmail.com">El Guapo</a>
                    </div>
                </div>
                

                <div className="contactInfo" id='socialMedia'>
                    <div className='contactIcon'>

                    </div>
                    <div className="content">
                        <h3>Social Media</h3>
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
                </div>
              
            </div>
        </section>
    );
    
}

export default ContactPage;
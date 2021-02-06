import React from 'react';
import './style.css';
import Carousel from 'react-bootstrap/Carousel'
import ProfileImage01 from './Images/01.jpg';
import ProfileImage02 from './Images/02.jpg';
import ProfileImage03 from './Images/03.jpg';
import ProfileImage04 from './Images/04.jpg';
import ProfileImage05 from './Images/05.jpg';
import ProfileImage06 from './Images/06.jpg';
import ProfileImage07 from './Images/07.jpg';
import ProfileImage08 from './Images/08.jpg';
import ProfileImage09 from './Images/09.jpg';

function Testimonials() {

    return (
        <Carousel>
        <Carousel.Item>
            <div className="testimonialSlideContainer">
                <div className="testimonialElementContainer">
                    <img src={ProfileImage01} alt="randomProfileImage01" className="testimonialProfileImage"/>
                    <div className="testimonialTextContainer">
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"</p>
                        <h3>Karen Bogdan</h3>
                        <p> - Sydney, NSW</p>
                    </div>
                </div>
                <div className="testimonialElementContainer">
                    <img src={ProfileImage02} alt="randomProfileImage01" className="testimonialProfileImage"/>
                    <div className="testimonialTextContainer">
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"</p>
                        <h3>Karen Bogdan</h3>
                        <p> - Sydney, NSW</p>
                    </div>
                </div>
                <div className="testimonialElementContainer">
                    <img src={ProfileImage03} alt="randomProfileImage01" className="testimonialProfileImage"/>
                    <div className="testimonialTextContainer">
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"</p>
                        <h3>Karen Bogdan</h3>
                        <p> - Melbourne, VIC</p>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="testimonialSlideContainer">
                <div className="testimonialElementContainer">
                    <img src={ProfileImage04} alt="randomProfileImage01" className="testimonialProfileImage"/>
                    <div className="testimonialTextContainer">
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"</p>
                        <h3>Karen Bogdan</h3>
                        <p> - Gold Coast, QLD</p>
                    </div>
                </div>
                <div className="testimonialElementContainer">
                    <img src={ProfileImage05} alt="randomProfileImage01" className="testimonialProfileImage"/>
                    <div className="testimonialTextContainer">
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"</p>
                        <h3>Karen Bogdan</h3>
                        <p> - Melbourne, VIC</p>
                    </div>
                </div>
                <div className="testimonialElementContainer">
                    <img src={ProfileImage06} alt="randomProfileImage01" className="testimonialProfileImage"/>
                    <div className="testimonialTextContainer">
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"</p>
                        <h3>Karen Bogdan</h3>
                        <p> - Brisbane, QLD</p>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="testimonialSlideContainer">
                <div className="testimonialElementContainer">
                    <img src={ProfileImage07} alt="randomProfileImage01" className="testimonialProfileImage"/>
                    <div className="testimonialTextContainer">
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"</p>
                        <h3>Karen Bogdan</h3>
                        <p> - Perth, WA</p>
                    </div>
                </div>
                <div className="testimonialElementContainer">
                    <img src={ProfileImage08} alt="randomProfileImage01" className="testimonialProfileImage"/>
                    <div className="testimonialTextContainer">
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"</p>
                        <h3>Karen Bogdan</h3>
                        <p> - Sydney, NSW</p>
                    </div>
                </div>
                <div className="testimonialElementContainer">
                    <img src={ProfileImage09} alt="randomProfileImage01" className="testimonialProfileImage"/>
                    <div className="testimonialTextContainer">
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"</p>
                        <h3>Karen Bogdan</h3>
                        <p> - Sydney, NSW</p>
                    </div>
                </div>
            </div>
        </Carousel.Item>
      </Carousel>
    );

};

export default Testimonials;
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
        <Carousel className="carouselSection">
            <Carousel.Item>
                <div className="testimonialSlideContainer">
                    <Testimonial
                        name={'Karen Bogdan'} place={" - Canberra, ACT"}
                        image={ProfileImage01}
                        testimony={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"}
                    />
                    <Testimonial
                        name={'Katie Maloud'} place={" - Sydney, NSW"}
                        image={ProfileImage02}
                        testimony={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"}
                    />
                    <Testimonial
                        name={'Charlie Hernandez'} place={" - Melbourne, VIC"}
                        image={ProfileImage03}
                        testimony={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="testimonialSlideContainer">
                    <Testimonial
                        name={'Greg Meedus'} place={" - Gold Coast, QLD"}
                        image={ProfileImage04}
                        testimony={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"}
                    />
                    <Testimonial
                        name={'Ben Chapman'} place={" - Melbourne, VIC"}
                        image={ProfileImage05}
                        testimony={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"}
                    />
                    <Testimonial
                        name={'David Melon'} place={" - Brisbane, QLD"}
                        image={ProfileImage06}
                        testimony={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="testimonialSlideContainer">
                    <Testimonial
                        name={'Sonya Meadow'} place={" - Perth, WA"}
                        image={ProfileImage07}
                        testimony={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"}
                    />
                    <Testimonial
                        name={'Margaret Nguyen'} place={" - Sydney, NSW"}
                        image={ProfileImage08}
                        testimony={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"}
                    />
                    <Testimonial
                        name={'Justin Beard'} place={" - Sydney, NSW"}
                        image={ProfileImage09}
                        testimony={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolore tempora aperiam neque, voluptas a!"}
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );

};

export default Testimonials;

const Testimonial = ({ name, place, image, testimony }) => {
    return (
        <div className="testimonialElementContainer">
            <img src={image} alt="randomProfileImage" className="testimonialProfileImage" />
            <div className="testimonialTextContainer">
                <p>{testimony}</p>
                <h3>{name}</h3>
                <p>{place}</p>
            </div>
        </div>
    )
}
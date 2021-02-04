import React from 'react';
import './style.css';

import honeyHomageCuteBee from '../../images/Videos/honeyHomageCuteBee.mp4'


const AboutUs = () => {
    return (
        <section className="aboutUsSection" id="ourStory">
             <div className="AboutUsTextContainer">
                    <h1>Our Story</h1>
                    <p>We're a family owned and operated farm that has been producing organic honey for over six generations in Australia. Our bees are our family. In early 2020, we heartbreakingly lost over 90% of our bee family due to the devastating fires that ravaged through Australia. Since then, we have nurtured back our surviving family to health and are now ready to share their premium grade organic honey with Australia!</p>
            </div>
            <video className='videoTag' autoPlay loop muted>
                <source src={honeyHomageCuteBee} type='video/mp4' />
            </video>
        </section>
    );
}

export default AboutUs;

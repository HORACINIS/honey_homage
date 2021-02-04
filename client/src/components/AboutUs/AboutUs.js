import React from 'react';
import './style.css';

import honeyHomageCuteBee from '../../images/Videos/honeyHomageCuteBee.mp4'


const AboutUs = () => {
    return (
        <section className="aboutUsSection" id="ourStory">
             <div className="AboutUsTextContainer">
                    <h1>Our Story</h1>
                    <p>Before the outbreak of COVID-19, Australia had minimal time to react after taking a tragic blow of uncontrollable bushfires. Such destruction was vast, consuming both wildlife and rural homes. Affecting many farmers and crops, the road to recovery for our honey farm was steep after losing countless bees.</p>
            </div>
            <video className='videoTag' autoPlay loop muted>
                <source src={honeyHomageCuteBee} type='video/mp4' />
            </video>
        </section>
    );
}

export default AboutUs;

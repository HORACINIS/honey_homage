import React from 'react';
import './style.css';
import honeyHomageVideo01 from '../../images/Videos/honeyHomage01.mp4'
import honeyHomageVideo02 from '../../images/Videos/honeyHomage02.mp4'
import honeyHomageVideo03 from '../../images/Videos/honeyHomage03.mp4'

function SellingPoints() {

    return (
        <section className="sellingPointsSection">
            <div className="sellingPointElementContainer01">
                <h3>100% Australian Owned & Operated</h3>
                <video className='sellingPointVideo01' autoPlay loop muted>
                    <source src={honeyHomageVideo01} type='video/mp4' />
                </video>
            </div>
            <div className="sellingPointElementContainer03">
                <h3>Ultra Premium Organic Honey</h3>
                <video className='sellingPointVideo03' autoPlay loop muted>
                    <source src={honeyHomageVideo03} type='video/mp4' />
                </video>
            </div>
        </section>
    );

};

export default SellingPoints;
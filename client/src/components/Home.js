import React from 'react';
import beehive from '../images/beehive.png';

const Home = () => {
    return (
        <div className="text-center">
            <h1>Honey Homage</h1>
            <h2>Home Page</h2>
            <img src={beehive} className="img-fluid" alt="beehive" style={{ margin: "90px, 20px" }} />
        </div>
    )
}

export default Home;

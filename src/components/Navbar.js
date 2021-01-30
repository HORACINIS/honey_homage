import React from 'react';
import honeycomb from '../images/honeycomb.png';
import shoppingCart from '../images/shoppingCart.png';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { numOfItems } = props;

    // console.log(numOfItems);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand mb-0 h1">
                    <img src={honeycomb} alt="honeycomb" /> Honey Homage
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className="nav-link active" href="#!">Our products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutUs" className="nav-link active">Who we are</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contactUs" className="nav-link active">Connect with us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link active">Login/Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <img src={shoppingCart} style={{ marginLeft: '20px' }} alt="Cart" />
                            <Link to="/checkout" style={{ marginLeft: '10px' }} type="button" className="btn btn-warning position-relative">
                                Shopping Cart <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{numOfItems}<span className="visually-hidden">Items</span></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
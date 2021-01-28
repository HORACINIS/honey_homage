import React from 'react';
import honeycomb from '../images/honeycomb.png';
import shoppingCart from '../images/shoppingCart.png';

const Navbar = (props) => {
    const { numOfItems } = props;
    console.log(numOfItems);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand mb-0 h1" href="#!">
                    <img src={honeycomb} alt="honeycomb" /> Honey Homage
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#!">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#!">Our products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#!">Who we are</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#!">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#!">Login/Sign up</a>
                        </li>
                        <li className="nav-item">
                            <img src={shoppingCart} style={{ marginLeft: '20px' }} alt="Cart" />
                            <button style={{ marginLeft: '10px' }} type="button" className="btn btn-warning position-relative">
                                Shopping Cart <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{numOfItems}<span className="visually-hidden">Items</span></span>
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


const MenuItem = (props) => {

}







// import React from 'react';
// import honeycomb from '../images/honeycomb.png';
// import shoppingCart from '../images/shoppingCart.png';

// const Navbar = (props) => {
//     const { numOfItems } = props;
//     console.log(numOfItems);
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <a className="navbar-brand mb-0 h1" href="#!">
//                     <img src={honeycomb} alt="honeycomb" /> Honey Homage
//                 </a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#!">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#!">Our products</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#!">Who we are</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#!">Contact us</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#!">Login/Sign up</a>
//                         </li>
//                         <li className="nav-item">
//                             <img src={shoppingCart} style={{ marginLeft: '20px' }} alt="Cart" />
//                             <button style={{ marginLeft: '10px' }} type="button" className="btn btn-warning position-relative">
//                                 Shopping Cart <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{numOfItems}<span className="visually-hidden">Items</span></span>
//                             </button>
//                         </li>

//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;



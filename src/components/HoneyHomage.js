import React from 'react';
import Navbar from './Navbar';
import Products from './Products';
import Footer from './Footer';

function HoneyHomage() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='container'>
        <Products />

      </div>
      <Footer />
    </React.Fragment>
  );
}

export default HoneyHomage;

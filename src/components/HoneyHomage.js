import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Products from './Products';
import Footer from './Footer';
import { items } from '../data/honey_products';


const HoneyHomage = () => {
  let itemsPicked = [];
  const [itemsInCart, setItemsInCart] = useState(itemsPicked);
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(itemsPicked.length);

  const addItemsToCart = (product) => {
    itemsPicked.push(product);
    setItemsInCart(itemsList => [...itemsList, product]);
    setNumOfItemsInCart(itemsInCart.length);

    console.log(itemsInCart);
  }

  return (
    <React.Fragment>
      <Navbar numOfItems={numOfItemsInCart} itemsInCart={itemsInCart} />
      <div className='container'>
        <Products itemsListing={items} addItemsToCart={addItemsToCart} />

      </div>
      <Footer />
    </React.Fragment>
  );
}

export default HoneyHomage;









// import React from 'react';
// import Navbar from './Navbar';
// import Products from './Products';
// import Footer from './Footer';

// function HoneyHomage() {
//   return (
//     <React.Fragment>
//       <Navbar />
//       <div className='container'>
//         <Products />

//       </div>
//       <Footer />
//     </React.Fragment>
//   );
// }

// export default HoneyHomage;
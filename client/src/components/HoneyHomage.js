import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Products from './Products';
import Checkout from './Checkout';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';
import { items } from '../data/honey_products';


const HoneyHomage = () => {
  let itemsPicked = [];
  const [itemsInCart, setItemsInCart] = useState(itemsPicked);
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);

  const addItemsToCart = (product) => {
    setItemsInCart(itemsPicked => [...itemsPicked, product]);

    setTimeout(() => {
      setNumOfItemsInCart(itemsInCart.length + 1);
    }, 500);
  }

  return (
    <Switch>
      <React.Fragment>
        <Navbar numOfItems={numOfItemsInCart} itemsInCart={itemsInCart} />

        <div className='container'>

          <Route exact path='/' render={(props) => <Home {...props} />} />

          <Route path='/login' render={(props) => <Login {...props} />} />

          <Route path='/products' render={(props) => <Products itemsListing={items} addItemsToCart={addItemsToCart} {...props} />} />

          <Route path='/checkout' render={(props) => <Checkout itemsInCart={itemsInCart} {...props} />} />

          <Route path='/aboutUs' render={(props) => <AboutUs {...props} />} />

          <Route path='/contactUs' render={(props) => <ContactUs {...props} />} />

        </div>
      </React.Fragment>
    </Switch>
  );
}

export default HoneyHomage;
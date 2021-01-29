import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Products from './Products';
import Checkout from './Checkout';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import { items } from '../data/honey_products';


const HoneyHomage = () => {
  let itemsPicked = [];
  const [itemsInCart, setItemsInCart] = useState(itemsPicked);
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(itemsPicked.length);

  const addItemsToCart = (product) => {
    itemsPicked.push(product);
    setItemsInCart(itemsList => [...itemsList, product]);

    setTimeout(() => {
      setNumOfItemsInCart(itemsInCart.length);
    }, 500);

    console.log(itemsInCart);
  }

  return (
    <Switch>
      <React.Fragment>
        <Navbar numOfItems={numOfItemsInCart} itemsInCart={itemsInCart} />

        <div className='container'>

          <Route exact path='/' render={(props) => <Home {...props} />} />

          <Route path='/login' render={(props) => <Login {...props} />} />

          <Route path='/products' render={(props) => <Products itemsListing={items} addItemsToCart={addItemsToCart} {...props} />} />

          <Route path='/checkout' render={(props) => <Checkout {...props} />} />

          <Route path='/aboutUs' render={(props) => <AboutUs {...props} />} />

          <Route path='/contactUs' render={(props) => <ContactUs {...props} />} />

        </div>

        <Footer />
      </React.Fragment>
    </Switch>
  );
}

export default HoneyHomage;
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

          <Route path="/">
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/products'>
            <Products itemsListing={items} addItemsToCart={addItemsToCart} />
          </Route>

          <Route path='/checkout'>
            <Checkout />
          </Route>

          <Route path='aboutUs'>
            <AboutUs />
          </Route>

          <Route path='/contactUs'>
            <ContactUs />
          </Route>

        </div>

        <Footer />
      </React.Fragment>
    </Switch>
  );
}

export default HoneyHomage;
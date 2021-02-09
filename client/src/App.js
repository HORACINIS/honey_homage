import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import "./App.css";
import HeroCover from "./components/HeroCover/HeroCover.js";
import Navbar from "./components/Navbar/Navbar.js";
import Products from './components/Products/Products';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import CheckoutPortal from './components/CheckoutPortal/CheckoutPortal';
import AboutUs from "./components/AboutUs/AboutUs.js";
import Footer from "./components/Footer/Footer.js";
import UserProfile from "./components/UserProfile/UserProfile.js";
import { useAuth0 } from "@auth0/auth0-react";
import Testimonials from "./components/Testimonials/Testimonials"
import Orders from "./components/Orders/Orders"
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation"
import SellingPoints from "./components/SellingPoints/SellingPoints"

// Pages
import AdminPortal from "../src/pages/AdminPortal/AdminPortal"
import ContactPage from "./components/ContactPage/ContactPage";

const App = () => {

  const { isLoading } = useAuth0();
  const url = '/products/all';
  const [pickedItems, setPickedItems] = useState([]);
  const [products, setProducts] = useState();

  async function fetchProductsApi() {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data)
  }

  useEffect(() => {
    fetchProductsApi();
  }, []);

  if (isLoading) {
    return <div className="loadingDiv"><i className="fas fa-spinner loadingSpinner"></i></div>
  }

  // Everytime the addToCart btn is pressed, the object itself and the quantity of each item in Products return back to this function
  function selectedProducts(selectedItems, qty) {
    let item = { ...selectedItems, quantity: qty };
    setPickedItems(pickedItems => [...pickedItems, item]);
    document.title = 'Items in Cart'
  }

  return (
    <Switch>
      <div className="App">
        <Navbar pickedItems={pickedItems} />
        <Route exact path='/'>
          <HeroCover />
          <SellingPoints />
          <Products products={products} selectedProducts={selectedProducts} />
          <AboutUs />
          <Testimonials />
        </Route>
        <Route path='/shoppingCart' render={(props) => <ShoppingCart pickedItems={pickedItems} {...props} />} />
        <Route exact path='/AdminPortal' component={AdminPortal} />
        <Route exact path='/UserProfile' component={UserProfile} />
        <Route exact path='/CheckoutPortal' component={CheckoutPortal} />
        <Route exact path='/OrderConfirmation' component={OrderConfirmation} />
        <ContactPage />
        <Footer />
      </div>
    </Switch>
  );
}

export default App;




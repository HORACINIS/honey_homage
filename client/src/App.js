import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import "./App.css";
import HeroCover from "./components/HeroCover/HeroCover.js";
import Navbar from "./components/Navbar/Navbar.js";
import Products from './components/Products/Products';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import AboutUs from "./components/AboutUs/AboutUs.js";
import Footer from "./components/Footer/Footer.js";
import Profile from "./components/UserProfile/UserProfile.js";
import { useAuth0 } from "@auth0/auth0-react";

// Pages
import AdminPortal from "../src/pages/AdminPortal/AdminPortal"

const App = () => {
  let picked = [];
  const [pickedItems, setPickedItems] = useState(picked);

  const { isLoading } = useAuth0();
  const url = '/products/all';

  const [products, setProducts] = useState();

  async function fetchProductsApi() {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data)
  }
  useEffect(() => {
    fetchProductsApi();
  }, [])

  if (isLoading) {
    return <div className="loadingDiv"><i className="fas fa-spinner loadingSpinner"></i></div>
  }

  // Everytime the addToCart btn is pressed, the object itself and the quantity of each item in Products return back to this function
  function selectedProducts(selectedItems, qty) {
    // const { title } = selectedItems;
    // console.log(title);
    // console.log(qty);

    setPickedItems({ ...selectedItems, total: qty });
  }
  // console.log(pickedItems);

  return (
    <Switch>
      <div className="App">
        <Navbar pickedItems={pickedItems} />
        <Route exact path='/'>
          <HeroCover />
          <Products products={products} selectedProducts={selectedProducts} />
          <AboutUs />
        </Route>
        <Route path='/shoppingCart' render={(props) => <ShoppingCart {...props} />} />
        <Route exact path='/AdminPortal' component={AdminPortal} />
        <Footer />
      </div>
    </Switch>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import HeroCover from "./components/HeroCover/HeroCover.js";
import Navbar from "./components/Navbar/Navbar.js";
import Products from './components/Products/Products';
import AboutUs from "./components/AboutUs/AboutUs.js";
import Footer from "./components/Footer/Footer.js";
import Profile from "./components/UserProfile/UserProfile.js";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading } = useAuth0();
  const url = '/products/all';

  const [products, setProducts] = useState();

  async function fetchApi() {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data)
  }
  useEffect(() => {
    fetchApi()
  }, [])

  if (isLoading) {
    return <div className="loadingDiv"><i className="fas fa-spinner loadingSpinner"></i></div>
  }

  return (
    <div className="App">
      <Navbar />
      <HeroCover />
      <AboutUs />
      <Products products={products} />
      <Footer />
    </div>
  );
}

export default App;

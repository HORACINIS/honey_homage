import React, { Component } from "react";
import "./App.css";
import HeroCover from "./components/HeroCover/HeroCover.js";
import Navbar from "./components/Navbar/Navbar.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import Footer from "./components/Footer/Footer.js";
import Profile from "./components/UserProfile/UserProfile.js";
import { useAuth0 } from "@auth0/auth0-react";

// Components

const apiCall = function() {
  fetch('/products/all', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => console.log(data));
}



const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loadingDiv"><i class="fas fa-spinner loadingSpinner"></i></div>
  }
    return (
      <div className="App">
        <Navbar />
        <HeroCover />
        <AboutUs />
        <Footer />

      </div>
    );
}


export default App;

import React, { Component } from "react";
import "./App.css";
import HeroCover from "./components/HeroCover/HeroCover.js";
import Navbar from "./components/Navbar/Navbar.js";
import AboutUs from "./components/AboutUs/AboutUs.js";

// Components

const apiCall = function() {
  fetch('/hey', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => console.log(data));
}



const App = () => {
    return (
      <div className="App">
        <Navbar />
        <HeroCover />
        <AboutUs />
      </div>
    );
}


export default App;

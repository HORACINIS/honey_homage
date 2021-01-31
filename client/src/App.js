import React, { Component } from "react";
import "./App.css";
import HeroCover from "./components/HeroCover/HeroCover";
import Navbar from "./components/Navbar/Navbar.js";

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
        <button onClick={apiCall}>Submit</button>
      </div>
    );
}


export default App;

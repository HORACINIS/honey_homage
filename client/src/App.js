import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HeroCover from "./components/HeroCover/HeroCover";

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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>Hello World!</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={apiCall}>Submit</button>
        <HeroCover />
      </div>
    );
}


export default App;

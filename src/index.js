import React from 'react';
import ReactDOM from 'react-dom';
import HoneyHomage from './components/HoneyHomage';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HoneyHomage />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
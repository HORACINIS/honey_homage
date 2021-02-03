// src/components/authentication-button.js

import React from "react";
import './style.css';

import LogoutButton from "../LogoutButton/LogoutButton";
import SignupButton from "../SignupButton/SignupButton";
import CheckoutMeter from "../CheckoutMeter/CheckoutMeter";
import AdminButtonAuthenticator from "../AdminButtonAuthenticator/AdminButtonAuthenticator";

import { Link } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";

const LoginButtonAuthenticator = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated 
  
  ? 

  <div className="loggedInNavBarElementsContainer">
    <Link to='/adminportal'>
        <AdminButtonAuthenticator />
    </Link>
    <LogoutButton /> 
    <Link to='/userProfile'>
        <a><i className="fas fa-user-circle"></i></a>
    </Link>
    <Link to='/shoppingCart'>
        <a><i className="fas fa-shopping-cart shoppingCartIcon"><CheckoutMeter /></i></a>
    </Link>
  </div> 

  :

  <div className="loggedInNavBarElementsContainer">
    <SignupButton />
  </div>

  ;

};

export default LoginButtonAuthenticator;
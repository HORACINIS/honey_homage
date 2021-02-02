// src/components/authentication-button.js

import React from "react";
import './style.css';

import LogoutButton from "../LogoutButton/LogoutButton";
import SignupButton from "../SignupButton/SignupButton";
import CheckoutMeter from "../CheckoutMeter/CheckoutMeter";
import AdminButtonAuthenticator from "../AdminButtonAuthenticator/AdminButtonAuthenticator";

import { useAuth0 } from "@auth0/auth0-react";

const LoginButtonAuthenticator = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated 
  
  ? 

  <div className="loggedInNavBarElementsContainer">
    <AdminButtonAuthenticator />
    <LogoutButton /> 
    <a href="#"><i class="fas fa-user-circle"></i></a>
    <a href="#"><i class="fas fa-shopping-cart"></i><CheckoutMeter /></a>
  </div> 

  :

  <div className="loggedInNavBarElementsContainer">
    <SignupButton />
  </div>

  ;

};

export default LoginButtonAuthenticator;
// src/components/authentication-button.js

import React from "react";

import LogoutButton from "../LogoutButton/LogoutButton"

import { useAuth0 } from "@auth0/auth0-react";

const LoginButtonAuthenticator = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated 
  ? 
  <div>
    <a href="#"><i class="fas fa-user-circle"></i></a>
    <a href="#"><i class="fas fa-shopping-cart"></i></a>
    <LogoutButton /> 
  </div>
  : 
  <div></div>;
};

export default LoginButtonAuthenticator;
// src/components/authentication-button.js

import React from "react";

import LoginButton from "../LoginButton/LoginButton"

import { useAuth0 } from "@auth0/auth0-react";

const LoginButtonAuthenticator = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <div></div> : <LoginButton />;
};

export default LoginButtonAuthenticator;
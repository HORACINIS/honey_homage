// src/components/authentication-button.js

import React from "react";

import LogoutButton from "../LogoutButton/LogoutButton"

import { useAuth0 } from "@auth0/auth0-react";

const LoginButtonAuthenticator = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <div></div>;
};

export default LoginButtonAuthenticator;
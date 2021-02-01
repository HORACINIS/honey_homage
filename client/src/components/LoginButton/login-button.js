// src/components/login-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="loginButton"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
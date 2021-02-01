// src/components/logout-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="logoutButton"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
// src/components/logout-button.js

import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

const AdminButton = () => {
  return (
    <Link to="/AdminPortal">
    <button className="adminButton">
      Admin Portal
    </button>
    </Link>
  );
};

export default AdminButton;
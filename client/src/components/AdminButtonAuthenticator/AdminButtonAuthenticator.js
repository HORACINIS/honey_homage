// src/components/authentication-button.js

import React from "react";
import './style.css';
import AdminButton from "../AdminButton/AdminButton"

import { useAuth0 } from "@auth0/auth0-react";


const AdminButtonAuthenticator = () => {
    const { user, isAuthenticated } = useAuth0();
    const { name, picture, email } = user;

    if (isAuthenticated === true && email === "admin@honeyhomage.com.au") {
        return  <AdminButton /> ;
    } else {
        return <div></div>;
    }

};

export default AdminButtonAuthenticator;
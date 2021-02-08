import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

const CheckoutPortal = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;

    const submitOrder = () => {

    }


    return (
        <div>
            <div>
                <h1 className="checkoutPortalTitle">
                    Checkout Portal
                </h1>
            </div>
            <div>
                <form className="form">
                    <input
                        value=""
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value=""
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                    />
                    <button onClick={submitOrder}>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default CheckoutPortal;
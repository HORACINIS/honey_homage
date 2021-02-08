import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

const CheckoutPortal = () => {
    const { user } = useAuth0();
    const { name, email, sub } = user;

    const submitOrder = () => {
        fetch('/orders/update', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({})
        }).then(() => {
            console.log("Item Saved to Database");
        })
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
                        name="First Name"
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        name="Last Name"
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        name="Contact Number"
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        name="Shipping Address"
                        type="text"
                        placeholder="Last Name"
                    />
                    <textarea
                        name="Comments"
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
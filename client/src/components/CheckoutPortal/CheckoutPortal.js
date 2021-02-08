import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

const CheckoutPortal = () => {
    const { user } = useAuth0();
    const { name, email, sub } = user;

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let formData = {};
        formData.name = event.target.name;
        fetch('/orders/update', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(formData)
        }).then(() => {
            console.log("Database Item Updated");
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
                        name="FirstName"
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        name="LastName"
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        name="ContactNumber"
                        type="text"
                        placeholder="Contact Number"
                    />
                    <input
                        name="ShippingAddress"
                        type="text"
                        placeholder="Shipping Address"
                    />
                    <textarea
                        name="Comments"
                        type="text"
                        placeholder="Comments"
                    />
                    <button onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default CheckoutPortal;
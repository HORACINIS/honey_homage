import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";


const CheckoutPortal = () => {
    const { user } = useAuth0();
    const { name, picture, email, sub } = user;
    
    const [formData, setFormData] = useState ({
        firstName: "",
        lastName: "",
        shippingAddress: "",
        contactNumber: "",
        comments: ""
      });  

    const handleFormSubmit = event => {
        // event.preventDefault();
        console.log(formData);
        fetch('/orders/update/' + sub, {
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
                    <div className="orderConfirmationFormSection">
                        <form className="orderConfirmationForm">
                            <div className="orderConfirmationFormNameInputContainer">
                                <input className="orderConfirmationFormNameInput"
                                    value={formData.firstName}
                                    name="firstName"
                                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                    type="text"
                                    placeholder="First Name"
                                />
                                <input className="orderConfirmationFormNameInput"
                                    value={formData.lastName}
                                    name="lastName"
                                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="orderConfirmationFormAddressInputContainer">
                                <textarea className="orderConfirmationFormAddressInput"
                                    value={formData.shippingAddress}
                                    name="shippingAddress"
                                    onChange={(e) => setFormData({...formData, shippingAddress: e.target.value})}
                                    type="text"
                                    placeholder="Shipping Address"
                                />
                            </div>
                            <div className="orderConfirmationFormCommentsInputContainer">
                                <textarea className="orderConfirmationFormCommentsInput"
                                    value={formData.comments}
                                    name="comments"
                                    onChange={(e) => setFormData({...formData, comments: e.target.value})}
                                    type="text"
                                    placeholder="Comments"
                                />
                            </div>
                            <div className="orderConfirmationFormNumberAndSubmitInputContainer">
                                <input className="orderConfirmationFormNumberInput"
                                    value={formData.contactNumber}
                                    name="contactNumber"
                                    onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                                    type="text"
                                    placeholder="Contact Number"
                                />
                                <Link to='/OrderConfirmation'>
                                    <button className="orderConfirmationButton" onClick={handleFormSubmit}>Submit Order</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            )
};     


export default CheckoutPortal;
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";


const CheckoutPortal = () => {
    
    const [formData, setFormData] = useState ({
        firstName: "",
        lastName: "",
        shippingAddress: "",
        contactNumber: "",
        comments: ""
      });

    // handleFormSubmit = (event) => {
    //     let value = event.target.value;
    //     const name = event.target.name;

        // this.setState({
        //     [name]: value
        //   });



    

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(formData);
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
                            value={formData.firstName}
                            name="firstName"
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            value={formData.lastName}
                            name="lastName"
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            type="text"
                            placeholder="Last Name"
                        />
                        <input
                            value={formData.shippingAddress}
                            name="shippingAddress"
                            onChange={(e) => setFormData({...formData, shippingAddress: e.target.value})}
                            type="text"
                            placeholder="Shipping Address"
                        />
                        <input
                            value={formData.contactNumber}
                            name="contactNumber"
                            onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                            type="text"
                            placeholder="Contact Number"
                        />
                        <textarea
                            value={formData.comments}
                            name="comments"
                            onChange={(e) => setFormData({...formData, comments: e.target.value})}
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
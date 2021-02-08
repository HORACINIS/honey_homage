import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

class CheckoutPortal extends Component {

    state = {
        firstName: "",
        lastName: "",
        shippingAddress: "",
        contactNumber: "",
        comments: ""
      };

    handleFormSubmit = (event) => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
          });


        fetch('/orders/update', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.name)
        }).then(() => {
            console.log("Database Item Updated");
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            firstName: "",
            lastName: "",
            shippingAddress: "",
            contactNumber: "",
            comments: ""
            });
        }

        render() {
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
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Last Name"
                        />
                        <input
                            value={this.state.shippingAddress}
                            name="shippingAddress"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Shipping Address"
                        />
                        <input
                            value={this.state.contactNumber}
                            name="contactNumber"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Contact Number"
                        />
                        <textarea
                            value={this.state.comments}
                            name="comments"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Comments"
                        />



                            {/* <input
                                onChange={handleFormSubmit}
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
                            /> */}
                            <button onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            )
        }
    };



      


export default CheckoutPortal;
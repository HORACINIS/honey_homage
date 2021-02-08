import "./style.css";

const CheckoutPortal = () => {

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
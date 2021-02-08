import React, { useEffect } from 'react';
import './style.css';
import honeyType01 from '../../images/ProductImages/honeyType01.jpg';
import honeyType02 from '../../images/ProductImages/honeyType02.jpg';
import honeyType03 from '../../images/ProductImages/honeyType03.jpg';
import honeyType04 from '../../images/ProductImages/honeyType04.jpg';
import honeyType05 from '../../images/ProductImages/honeyType05.jpg';
import honeyType06 from '../../images/ProductImages/honeyType06.jpg';
import honeyType07 from '../../images/ProductImages/honeyType07.jpg';
import honeyType08 from '../../images/ProductImages/honeyType08.jpg';
import honeyType09 from '../../images/ProductImages/honeyType09.jpg';

const ShoppingCart = ({ pickedItems }) => {
    console.log(pickedItems)

    let orderTotal = 0;

    return (
        <div>
            <h1>Shopping Cart</h1>
            {!pickedItems.length > 0 && <h2>No items in cart</h2>}

            <div className="shoppingCartItemSection">
                {pickedItems.map((item, index) => {
                    const { _id, title, image, quantity, details, price } = item
                    const totalPerItem = quantity * price;
                    
                    orderTotal += totalPerItem;
                    return (
                        <div key={_id} className="shoppingCartItemContainer">
                            <div>
                                <img src={honeyType01} alt="honey product" className="shoppingCartItemImage"></img>
                            </div>
                            <div>
                                <h5>{title}</h5>
                                <p>{details}</p>
                            </div>
                            <div>
                                <h5>Quantity: {quantity} units</h5>
                                <p>Total: ${totalPerItem}0</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <h3>Order Total: ${orderTotal}</h3>
                <button>Confirm Checkout</button>
            </div>

        </div>
    )
}

export default ShoppingCart;

import React, { useEffect } from 'react';
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

    return (
        <div>
            <h1>Shopping Cart</h1>
            {!pickedItems.length > 0 && <h2>No items in cart</h2>}

            <ul>
                {pickedItems.map((item, index) => {
                    const { _id, title, image, quantity, details, price } = item
                    const totalPerItem = quantity * price;
                    return (
                        <li key={_id}>
                            <img src={honeyType01} alt="honey product"></img>
                            <h2>{title}</h2>
                            <p>{details}</p>
                            <p>${price} ea</p>
                            <h5>Quantity: {quantity} units</h5>
                            <p><b>${totalPerItem}0</b></p>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default ShoppingCart;

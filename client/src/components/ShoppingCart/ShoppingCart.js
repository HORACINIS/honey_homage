import React, { useEffect } from 'react';

const ShoppingCart = ({ pickedItems }) => {


    console.log(pickedItems)

    return (
        <div>
            <h1>Shopping Cart</h1>
            {!pickedItems.quantity > 0 && <h2>No items in cart</h2>}



        </div>
    )
}

export default ShoppingCart;

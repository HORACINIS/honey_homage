import React, { useState } from 'react';
import Products from './Products';
import Quantity from './Quantity';
import Axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

const AddToCart = (data) => {
    const [cartQty, setCartQty] = useState({ Qty: ''});
    const { user } = useAuth0();
    const cart_id =  user.sub;
    const product = data.name;
    const price = data.price;
    

    const addItem = () => {
        Axios.post('http://localhost:3000/#store', {
            cart_id: cart_id,
            product: product,
            price: price,
            quantity: cartQty}
        );
    }

    return (
        <div>
            <input type='number' name='qty' placeholder='0' min='0' max='25' onChange={(e) => {setCartQty ({ Qty: e.target.value })}}></input>
            <button onClick={addItem}>Add To Cart</button>
        </div>
    );
}

export default AddToCart;
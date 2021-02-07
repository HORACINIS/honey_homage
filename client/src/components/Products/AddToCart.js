import React, { useState } from 'react';
import Products from './Products';
import Quantity from './Quantity';
import {useAuth0} from '@auth0/auth0-react'

const AddToCart = (item) => {
    const [Qty, setQty] = useState({Qty: ''});
    const UserId =  user.id;
    const Title = item.title;
    const Price = item.price;
    

    const addItem = () => {
        axios.post('http:localhost:3000/', {cart_id : {UserId}, product: {Title}, price: {Price}, quantity: {Qty}})
    .then((response) => {console.log(response);},
    (error) => {console.log(error);
    });
    }

    return (
        <div>
            <input type='number' name='qty' placeholder='0' min='0' max='25' onChange={(e) => {setQty ({Qty: e.target.value })}}></input>
            <button onClick={addItem}>Add To Cart</button>
        </div>
    );
}

export default AddToCart;
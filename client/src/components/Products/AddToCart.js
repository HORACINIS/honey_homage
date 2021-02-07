import React from 'react';
import Products from './Products';
import Quantity from './Quantity';

const AddToCart = (item) => {

    const addItem = () => {
        console.log(Qty, item)
    }

    return (
        <div>
            <input type='number' name='Qty' placeholder='0' min='0' max='25'></input>
            <button onClick={addItem}>Add To Cart</button>
        </div>
    );
}

export default AddToCart;
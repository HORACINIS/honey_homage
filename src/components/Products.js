import React, { useState, useEffect } from 'react';
import { products } from '../data/honey_products';

const Products = () => {



    return (
        <div>
            <h3>Products</h3>
            <ul>
                {products.map(item => (
                    <li key={item.id}>
                        <h1>{item.title}</h1>
                        <img src={item.url} alt='Honey Product' />
                        <h4>{item.details}</h4>
                        <h4>${item.price}</h4>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Products;

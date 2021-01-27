import React, { useState, useEffect } from 'react';
import { products } from '../data/honey_products';

const Products = () => {

    return (
        <div className="container">
            <div className="row">
                {products && products.map(item => (
                    <div className="col-sm-4 " key={item.id}>
                        <div className="card" width="18rem;">
                            <img src={item.url} className="card-img-top" alt="honey" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.details}</p>

                                <h5>${item.price} {item.onSale && <span className="p-1 mb-2 bg-danger text-white">ON SALE</span>}</h5>
                                

                                <a href="#!" className="btn btn-warning ">
                                    <i style={{ fontSize: '2em' }} className="fas fa-plus-circle" />
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;

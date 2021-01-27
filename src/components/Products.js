import React, { useState, useEffect } from 'react';
import { products } from '../data/honey_products';

const Products = () => {

    return (
        <div className="container">
            <div className="row">
                {products && products.map(item => {
                    const { id, url, title, details, price, onSale } = item;
                    return (
                        <div className="col-sm-4 " key={id}>
                            <div className="card" width="18rem;">
                                <img src={url} className="card-img-top" alt="honey" />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{details}</p>
                                    <h5>${price} {onSale && <span className="p-1 mb-2 bg-danger text-white">ON SALE</span>}</h5>
                                    <a href="#!" className="btn btn-warning ">
                                        <i style={{ fontSize: '2em' }} className="fas fa-plus-circle" />
                                    Add to cart
                                </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Products;

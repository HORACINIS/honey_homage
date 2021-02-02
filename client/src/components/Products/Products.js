import React from 'react';

const Products = ({ products }) => {

	return (
		<div>
			<h1>Products</h1>
			<ul>
				{products && products.map(item => {
					const { _id, title, image, price, sale, inStock } = item;
					return (
						<li key={_id}>
							<img src={image} alt="honey product" />
							<h3>{title}</h3>
							<p>${price} {sale && <span>Discounted</span>}</p>
							<p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Products;

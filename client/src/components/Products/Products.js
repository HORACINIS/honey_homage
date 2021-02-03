import React from 'react';
import './style.css';

const Products = ({ products }) => {

	return (
		<section className="productsSection">
			<div className="productsContainer">
				{products && products.map(item => {
					const { _id, title, image, price, sale, inStock } = item;
					return (
						<div key={_id} className="productListingContainer">
							<div className="productListingImageContainer">
							    <img src={image} alt="honey product" className="productListingImage" />
							</div>
							<div className="productListingInfoContainer">
								<h3>{title}</h3>
								<p>${price} {sale && <span>Discounted</span>}</p>
								{/* <p>{inStock ? 'In Stock' : 'Out of Stock'}</p> */}
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Products;

import React from 'react';
import './style.css';
import honeyType01 from '../../images/ProductImages/honeyType01.jpg';
import honeyType02 from '../../images/ProductImages/honeyType02.jpg';
import honeyType03 from '../../images/ProductImages/honeyType03.jpg';
import honeyType04 from '../../images/ProductImages/honeyType04.jpg';
import honeyType05 from '../../images/ProductImages/honeyType05.jpg';
import honeyType06 from '../../images/ProductImages/honeyType06.jpg';
import honeyType07 from '../../images/ProductImages/honeyType07.jpg';
import honeyType08 from '../../images/ProductImages/honeyType08.jpg';
import honeyType09 from '../../images/ProductImages/honeyType09.jpg';

const Products = ({ products }) => {

	return (
		<section className="productsSection" id="store">
			<section className="productsTitleSection">
				Products
            </section>
			<div className="productsContainer">
				{products && products.map((item, i ) => {
					const { _id, title, image, price, sale, details, inStock } = item;

					const imageSrc = [honeyType01, honeyType02, honeyType03, honeyType04, 
						honeyType05, honeyType06, honeyType07, honeyType08, honeyType09];

					return (
						<div key={_id} className="productListingContainer">
							<div className="productListingImageContainer">
								<img src={imageSrc[i]} alt="honey product" className="productListingImage" />
							</div>
							<div className="productListingInfoContainer">
								<h3>{title}</h3>
								<p className="productListingInfoDetails">{details}</p>
								<p>${price} {sale && <span>Discounted</span>}</p>
								{/* <p>{inStock ? 'In Stock' : 'Out of Stock'}</p> */}
							</div>
							<div>
								<form className="productListingForm">
									<label>Qty:</label>
									<input type="number" placeholder="0" className="productListingQuanityInput"/>
									<button className="productListingAddToCarButton">Add to Cart</button>
								</form>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Products;

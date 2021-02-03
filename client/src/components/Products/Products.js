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
		<section className="productsSection">
			<section className="titleSection">

            </section>
			<div className="productsContainer">
				{products && products.map(item => {
					const { _id, title, image, price, sale, details, inStock } = item;

					let imageSrc = ""

					if (image === "honeyType01") {
						imageSrc = honeyType01;
					} else if (image === "honeyType02") {
						imageSrc = honeyType02;
					} else if (image === "honeyType03") {
						imageSrc = honeyType03;
					} else if (image === "honeyType04") {
						imageSrc = honeyType04;
					} else if (image === "honeyType05") {
						imageSrc = honeyType05;
					} else if (image === "honeyType06") {
						imageSrc = honeyType06;
					} else if (image === "honeyType07") {
						imageSrc = honeyType07;
					} else if (image === "honeyType08") {
						imageSrc = honeyType08;
					} else if (image === "honeyType09") {
						imageSrc = honeyType09;
					}

					return (
						<div key={_id} className="productListingContainer">
							<div className="productListingImageContainer">
							    <img src={imageSrc} alt="honey product" className="productListingImage" />
							</div>
							<div className="productListingInfoContainer">
								<h3>{title}</h3>
								<p className="productListingInfoDetails">{details}</p>
								<p>${price} {sale && <span>Discounted</span>}</p>
								{/* <p>{inStock ? 'In Stock' : 'Out of Stock'}</p> */}
							</div>
							<div>
								<form className="productListingForm">
									<input type="number" className="productListingQuanityInput"/>
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

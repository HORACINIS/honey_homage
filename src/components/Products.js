import React from 'react';

const Products = (props) => {
	const { itemsListing, addItemsToCart } = props;

	return (
		<div className="container">
			<h1 className="text-center">Our Products</h1>
			<div className="row">
				{itemsListing && itemsListing.map(item => {
					const { id, title, details, price, onSale } = item;
					const honeyImg = 'https://www.flaticon.com/svg/vstatic/svg/525/525042.svg?token=exp=1611889485~hmac=e7b435b66c0addd626662b29db085d31';
					return (
						<div className="col-sm-4 " key={id}>
							<div className="card" width="18rem;">
								<img src={honeyImg} className="card-img-top" alt="honey" />
								<div className="card-body">
									<h5 className="card-title">{title}</h5>
									<p className="card-text">{details}</p>
									<h5>${price} {onSale && <span className="p-1 mb-2 bg-danger text-white">ON SALE</span>}</h5>
									<button className="btn btn-warning" onClick={() => addItemsToCart(item)}>
										<i style={{ fontSize: '2em' }} className="fas fa-plus-circle" />
                                        Add to cart
                                    </button>
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

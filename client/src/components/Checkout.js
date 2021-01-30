import React from 'react';
import honeyProductSmallImg from '../images/honeyProductSmallImg.png';

const Checkout = ({ itemsInCart }) => {
    // const [items, setItems] = useState(itemsInCart);
    console.log(itemsInCart)
    return (
        <div className='text-center'>
            <h1>Your Shopping Cart</h1>

            {itemsInCart.map(item => {
                const { title, id, price } = item;
                return (
                    <ul className='text-start list-unstyled' key={id}>

                        <li>{title}</li>
                        <li><img className='img-thumbnail' width='64px' src={honeyProductSmallImg} alt="honey" /></li>
                        <li>${price}</li>
                        <li><p><span> - </span>(quantity)<span> + </span></p></li>
                    </ul>
                )
            })}
            <h4>Total</h4>
        </div>
    )
}

export default Checkout;

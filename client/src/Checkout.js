import React from 'react';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css";
import {
  useStateValue,
} from './StateProvider';

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://via.placeholder.com/600x50" alt="" />

        <div>
          <h2 className="checkout_title">
            Your Shopping Basket
          </h2>
          {basket.map(item => {
            return <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          })}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>

  );
}

export default Checkout;
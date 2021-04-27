import React from 'react';
import { useCount, useDispatchCount } from '../context/Counter';
// import {useAppContext} from '../context/state';
import styles from '../styles/Product.module.css';

const Product = ({ id, title, image, price, rating }) => {
  const count = useCount();
  const dispatch = useDispatchCount();
  // const [dispatch] = useAppContext();
  // 
  // console.log(`basket: ${basket}`)
  const handleIncrease = (e) =>
    dispatch({
      type: 'INCREASE',
    })

  const handleIncrease15 = (e) =>
    dispatch({
      type: 'INCREASE_BY',
      payload: 15,
    })

  const addToBasket = () => {
    console.log('add to basket')
    //   //dispatch the item to the data layer
    //   dispatch({
    //     type: 'ADD_TO_BASKET',
    //     item: {
    //       id: id,
    //       title: title,
    //       image: image,
    //       price: price,
    //       rating: rating,
    //     },
    //   })
  };

  return (
    <div className={styles.product}>
      <div className={styles.product_info}>
        <p>{title}</p>

        <p className={styles.product_price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className={styles.product_rating}>
          {Array(rating).fill().map((_, i) => (
            <p key={i}>*</p>
          ))}
        </div>
      </div>
      <img className=""
        src={image} alt="" />
      <p>Counter: {count}</p>
      <button onClick={addToBasket}>
        Add to Basket
      </button>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button>
    </div>
  );
}

export default Product;
'use client';
import React, { useState } from 'react';

const StepTwoCard = ({ imgSrc, title, price, desc, nextStep }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Ensure quantity doesn't go below 1
  };

  return (
    <div className='card'>
      <div className='card-top'>
        <div className='card-img'>
          <img src={imgSrc} alt={title} />
        </div>
        <div className='card-title-price title-price-stepthree'>
          <h3>{title}</h3>
          <div className='price-desc'>
            <h3>{price}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <div className="btn-group btn-group-stepthree">
        <div className='quantity-control'>
            <button className='quantity-btn quantity-increase' onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button className='quantity-btn quantity-dicrease' onClick={increaseQuantity}>+</button>
        </div>
        <div className='cart-buttons'>
          <button className="long-btn add-cart-btn">
            Add to cart
          </button>
          <button className="arrow-btn cart-btn">
            <img src="/assets/cart.svg" alt="cart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwoCard;

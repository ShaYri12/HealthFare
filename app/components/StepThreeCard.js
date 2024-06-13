'use client';
import React, { useState, useEffect } from 'react';

const StepThreeCard = ({ imgSrc, title, price, desc, addToCart, nextStep }) => {
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    if (quantity === 0 && inCart) {
      setInCart(false);
    }
  }, [quantity]);

  const handleAddToCart = () => {
    if (quantity > 0) {
      const item = {
        imgSrc: imgSrc,
        title: title,
        price: price,
        quantity: quantity,
      };
      addToCart(item);
      setInCart(true);
      nextStep();
    } else {
      console.log('Quantity should be greater than zero to add to cart.');
    }
  };

  return (
    <div className='card card-suppliment' onClick={handleAddToCart}>
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
    </div>
  );
};

export default StepThreeCard;

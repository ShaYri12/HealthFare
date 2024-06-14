'use client';
import React, { useState, useEffect } from 'react';

const StepThreeCard = ({ imgSrc, title, price, desc, addToCart, originalStep, nextStep }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      const item = {
        imgSrc: imgSrc,
        title: title,
        price: price,
        desc: desc,
        quantity: quantity,
      };
      addToCart(item); // Notify parent component (StepThree) about the added item
      nextStep(); // Proceed to the next step
    } else {
      console.log('Quantity should be greater than zero to add to cart.');
      // Optionally, you could display an error message or alert the user.
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

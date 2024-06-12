'use client';
import React, { useState, useEffect } from 'react';

const StepThreeCard = ({ imgSrc, title, price, desc, addToCart, removeFromCart, nextStep }) => {
  const [quantity, setQuantity] = useState(0);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    if (quantity === 0 && inCart) {
      setInCart(false);
    }
  }, [quantity]);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
  };

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

  const handleRemoveFromCart = () => {
    removeFromCart(title);
    setInCart(false);
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
          <button className={`long-btn add-cart-btn ${inCart ? 'added-cart' : ''}`} onClick={handleAddToCart} disabled={inCart}>
            {inCart ? 'In Cart' : 'Add to cart'}
          </button>
          <button className={`arrow-btn cart-btn ${inCart ? 'in-cart' : ''}`} onClick={inCart ? handleRemoveFromCart : handleAddToCart}>
            {inCart ? <img src="/assets/delete.svg" alt="delete" /> : <img src="/assets/cart.svg" alt="cart" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThreeCard;

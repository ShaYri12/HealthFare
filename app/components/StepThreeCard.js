'use client';

import next from 'next';
import '../styles/stepthree.css'
import React, { useState } from 'react';

const StepThreeCard = ({ imgSrc, title, price, desc, quantityInCart, addToCart, nextStep, cart, setCart}) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0)); // Ensure quantity doesn't go below 0
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      const item = {
        imgSrc: imgSrc,
        title: title,
        price: price,
        desc: desc,
        quantity: quantity,
      };

      // Check if the item already exists in the cart
      const existingItem = cart.find(cartItem => cartItem.title === title);
      if (existingItem) {
        // Item exists, update its quantity
        const updatedCart = cart.map(cartItem =>
          cartItem.title === title ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
        );
        setCart(updatedCart);
        console.log("AS:",cart)
        nextStep()
      } else {
        // Item doesn't exist, add it to the cart
        addToCart(item);
        console.log("AS1:",cart)
        nextStep()
      }
    } else {
      console.log('Quantity should be greater than zero to add to cart.');
      // Optionally, you could display an error message or alert the user.
    }
  };

  const removeFromCart = () => {
    const updatedCart = cart.filter(cartItem => cartItem.title !== title);
    setCart(updatedCart);
    setQuantity(0)
    console.log("AS:",cart)
  };

  const isInCart = quantityInCart > 0;

  return (
    <div className='card card-suppliment' >
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
        {isInCart ? (
          <div className='forward-btns'>
          <button className="long-btn add-cart-btn" onClick={handleAddToCart}>
           {quantityInCart} - In Cart
          </button>
          <button className="arrow-btn cart-btn in-cart" onClick={removeFromCart}>
            <img src="/assets/delete.svg" alt="cart" />
          </button>
        </div>
        ):(
        <div className='forward-btns'>
          <button className="long-btn add-cart-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
          <button className="arrow-btn cart-btn">
            <img src="/assets/cart.svg" alt="cart" />
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default StepThreeCard;

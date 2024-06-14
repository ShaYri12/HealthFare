'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const StepTwoCard = ({ imgSrc, title, price, monthlyPrice, savings, description, features, nextStep, addToCart }) => {
  const { t } = useTranslation(); // Hook to access translations
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      const item = {
        medication:{
          imgSrc: imgSrc,
          title: title,
          price: price,
          savings: savings,
          description: description,
          monthlyPrice: monthlyPrice,
          features: features,
          quantity: quantity
        }
      };
      addToCart(item); // Notify parent component (StepThree) about the added item
      nextStep(); // Proceed to the next step
    } else {
      console.log('Quantity should be greater than zero to add to cart.');
      // Optionally, you could display an error message or alert the user.
    }
  };

  return (
    <div className='card'>
      <div className='card-top'>
        <div className='card-img'>
          <img src={imgSrc} alt={title} />
        </div>
        <div className='card-title-price'>
          {savings && (
            <div className='savings'>
              <p>Total Savings</p>
              <span>{savings}<p>/year</p></span>
            </div>
          )}
          <h3>{title}</h3>
          <span>
            <h2>{price}</h2>
            <p>{monthlyPrice}<span>/month*</span></p>
          </span>
          <p className='lose'>{description}</p>
        </div>
      </div>
      <div className='card-info'>
        {features.map((feature, index) => (
          <span key={index}>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>{feature}</p>
          </span>
        ))}
      </div>
      <div className="btn-group">
        <button className="long-btn" onClick={handleAddToCart}>
          {t('stepTwo.startLosingWeight')} {/* Translated button text */}
        </button>
        <button className="arrow-btn" onClick={handleAddToCart}>
          <img src="/assets/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default StepTwoCard;

'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const StepTwoCard = ({ imgSrc, title, titleDesc, injection, price, stock, label, totalSavings, month, year, savings, description, star, header, features, nextStep, addToCart }) => {
  const { t } = useTranslation(); // Hook to access translations
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      const item = {
          imgSrc: imgSrc,
          title: title,
          titleDesc: titleDesc,
          price: price,
          savings: savings,
          description: description,
          injection: injection,
          stock: stock,
          label: label,
          totalSavings :totalSavings,
          month: month,
          year: year,
          features: features,
          quantity: quantity
      };
      addToCart(item); // Notify parent component (StepThree) about the added item
      nextStep(); // Proceed to the next step
    } else {
      console.log('Quantity should be greater than zero to add to cart.');
      // Optionally, you could display an error message or alert the user.
    }
  };

  return (
    <div className='medication'>
      <div className='card-header'>
        <h3>{title}</h3>
        <span>
          {Array.from({ length: star }).map((_, index) => (
            <img key={index} src="assets/star.svg" alt="star"/>
          ))}
        </span>
      </div>
    <div className='card'>
      <div className='card-top'>
        <div className='card-img'>
          <img src={imgSrc} alt={title} />
        </div>
        <div className='card-title-price'>
          <span>{label}</span>
          <h3>{stock}</h3>
          <p className='title-desc'>{titleDesc}</p>
          <span className='price-injection'>
            <div>{injection}</div>
            <div className='price'>{price}</div>
          </span>
        </div>
      </div>
      <div className='card-info'>
          <span className='lose-upto'>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p className='lose'>{description}</p>
          </span>
      
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
      </div>
    </div>
    </div>
  );
};

export default StepTwoCard;

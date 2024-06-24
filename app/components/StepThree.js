'use client';
import '../styles/stepthree.css';
import '../styles/form.css';
import StepThreeCard from './StepThreeCard';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import React, { useState } from 'react';

const StepThree = ({ prevStep, nextStep,  handleChange, values, cartitem }) => {
  const [cart, setCart] = useState([]);
  const { t } = useTranslation(); // Initialize useTranslation hook

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
    cartitem(item)
    console.log('Cart:', [...cart, item]); // Log the updated cart for debugging
    handleChange(item);
  };

  const cardsData = [
    // {
    //   imgSrc: "/assets/med1.svg",
    //   title: t('stepThree.product1.title'), // Translate title using t function
    //   price: "$889.99",
    //   desc: t('stepThree.product1.description'), // Translate description using t function
    // },
    // {
    //   imgSrc: "/assets/med2.svg",
    //   title: t('stepThree.product2.title'), // Translate title using t function
    //   price: "$889.99",
    //   savings: "$360",
    //   desc: t('stepThree.product2.description'), // Translate description using t function
    // },
    {
      imgSrc: "/assets/med2.svg",
      title: t('stepThree.product3.title'), // Translate title using t function
      price: "$889.99",
      desc: t('stepThree.product3.description'), // Translate description using t function
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>{t('stepThree.title')}</h2> {/* Translate title using t function */}
      </div>
      {cardsData.map((card, index) => (
        <StepThreeCard
          key={index}
          {...card}
          addToCart={addToCart}
          nextStep={nextStep}
        />
      ))}

      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> {t('stepThree.back')} {/* Translate Back button using t function */}
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={nextStep}>{t('stepThree.skip')}</button> {/* Translate Skip button using t function */}
        </div>
      </div>

      <div className='review-inline review-md review-stepthree'>
        <h3>{t('review.excellent')}</h3> {/* Translate Excellent using t function */}
        <div className='stars'>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
        </div>
        <p className='reviews'>712 <span>{t('review.reviewsOn')}</span></p> {/* Translate reviewsOn using t function */}
        <div className='trustpilot'>
          <img src="/assets/star-trustpilot.svg" alt="trust"/> <span>Trustpilot</span>
        </div>
      </div>

      <div className='review review-sm'>
        <h3>{t('review.excellent')}</h3> {/* Translate Excellent using t function */}
        <div className='stars'>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
        </div>
        <p>{t('review.basedOn')} <b>712 {t('review.reviews')}</b></p>
        <div className='trustpilot'>
          <img src="/assets/star-trustpilot.svg" alt="trust"/> Trustpilot
        </div>
      </div>
    </div>
  );
};

export default StepThree;

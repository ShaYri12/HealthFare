'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/steptwo.css';
import '../styles/form.css';
import StepTwoCard from './StepTwoCard';

const StepTwo = ({ prevStep, nextStep, handleChange, values, cartitem2 }) => {
  const { t } = useTranslation();
  const [cart2, setCart2] = useState([]);

  const addToCart = (item) => {
    setCart2(prevCart => [...prevCart2, item]);
    cartitem2(item)
    console.log('Cart:', [...cart2, item]); // Log the updated cart for debugging
    handleChange(item);
  };

  const cardsData = [
    {
      imgSrc: "/assets/step2-product1.svg",
      title: t('stepTwo.cards.0.title'),
      price: "$889.99",
      monthlyPrice: "$296",
      description: t('stepTwo.cards.0.description'),
      features: [
        t('stepTwo.cards.0.feature1'),
        t('stepTwo.cards.0.feature2')
      ],
    },
    {
      imgSrc: "/assets/step2-product2.svg",
      title: t('stepTwo.cards.1.title'),
      price: "$1599.99",
      monthlyPrice: "$266",
      savings: "$360",
      description: t('stepTwo.cards.1.description'),
      features: [
        t('stepTwo.cards.1.feature1'),
        t('stepTwo.cards.1.feature2')
      ],
    },
    {
      imgSrc: "/assets/step2-product3.svg",
      title: t('stepTwo.cards.2.title'),
      price: "$887.78",
      monthlyPrice: "$266",
      description: t('stepTwo.cards.2.description'),
      features: [
        t('stepTwo.cards.2.feature1'),
        t('stepTwo.cards.2.feature2')
      ],
    },
    {
      imgSrc: "/assets/step2-product4.svg",
      title: t('stepTwo.cards.3.title'),
      price: "$1599.99",
      monthlyPrice: "$266",
      savings: "$1176",
      description: t('stepTwo.cards.3.description'),
      features: [
        t('stepTwo.cards.3.feature1'),
        t('stepTwo.cards.3.feature2')
      ],
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>{t('stepTwo.title')}</h2>
        <p>{t('stepTwo.description')}</p>
      </div>
      <div className='review-inline'>
          <h3>{t('review.excellent')}</h3>
          <div className='stars'>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
          </div>
          <p className='reviews'>456 <span>{t('review.reviewsOn')}</span></p>
          <div className='trustpilot'>
              <img src="/assets/star-trustpilot.svg" alt="trust"/> <span>Trustpilot</span>
          </div>
      </div>
      {cardsData.map((card, index) => (
        <StepTwoCard key={index} {...card} nextStep={nextStep} addToCart={addToCart} />
      ))}
      <button className='back-btn' onClick={prevStep}>
        <img src="/assets/arrow.svg" alt="arrow" /> {t('stepTwo.back')}
      </button>
    </div>
  );
};

export default StepTwo;

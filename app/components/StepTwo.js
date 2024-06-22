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
    setCart2(item);
    console.log("cart2",cart2)
    cartitem2(item)
    console.log('Cart:', item); // Log the updated cart for debugging
    handleChange(item);
  };

  const cardsData = [
    {
      header: t('stepTwo.cards.0.header'),
      imgSrc: "/assets/med1.svg",
      title: t('stepTwo.cards.0.title'),
      titleDesc: t('stepTwo.cards.0.titleDesc'),
      price: "$296",
      description: t('stepTwo.cards.0.description'),
      monthPlan: t('stepTwo.cards.0.monthPlan'),
      totalSavings:  t('stepTwo.totalSavings'),
      month: t('stepTwo.month'),
      year: t('stepTwo.year'),
      bestSeller: "5",
      features: [
        t('stepTwo.cards.0.feature1'),
        t('stepTwo.cards.0.feature2')
      ],
    },
    {
      imgSrc: "/assets/med1.svg",
      title: t('stepTwo.cards.1.title'),
      titleDesc: t('stepTwo.cards.1.titleDesc'),
      price: "$279",
      description: t('stepTwo.cards.1.description'),
      monthPlan: t('stepTwo.cards.1.monthPlan'),
      totalSavings:  t('stepTwo.totalSavings'),
      month: t('stepTwo.month'),
      year: t('stepTwo.year'),
      features: [
        t('stepTwo.cards.1.feature1'),
        t('stepTwo.cards.1.feature2')
      ],
    },
    {
      header: t('stepTwo.cards.2.header'),
      imgSrc: "/assets/med2.svg",
      title: t('stepTwo.cards.2.title'),
      titleDesc: t('stepTwo.cards.2.titleDesc'),
      price: "$425",
      description: t('stepTwo.cards.2.description'),
      totalSavings:  t('stepTwo.totalSavings'),
      month: t('stepTwo.month'),
      year: t('stepTwo.year'),
      monthPlan: t('stepTwo.cards.2.monthPlan'),
      features: [
        t('stepTwo.cards.2.feature1'),
        t('stepTwo.cards.2.feature2')
      ],
    },
    {
      header: t('stepTwo.cards.3.header'),
      imgSrc: "/assets/med1.svg",
      title: t('stepTwo.cards.3.title'),
      titleDesc: t('stepTwo.cards.3.titleDesc'),
      price: "$399",
      description: t('stepTwo.cards.3.description'),
      totalSavings:  t('stepTwo.totalSavings'),
      month: t('stepTwo.month'),
      year: t('stepTwo.year'),
      monthPlan: t('stepTwo.cards.3.monthPlan'),
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
          <p className='reviews'>712 <span>{t('review.reviewsOn')}</span></p>
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

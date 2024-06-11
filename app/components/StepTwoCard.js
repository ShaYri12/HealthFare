'use client';
import React from 'react';

const StepTwoCard = ({ imgSrc, title, price, monthlyPrice, savings, description, features, nextStep }) => (
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
      <button className="long-btn" onClick={nextStep}>
        Start Losing Weight
      </button>
      <button className="arrow-btn" onClick={nextStep}>
        <img src="/assets/arrow.svg" alt="arrow" />
      </button>
    </div>
  </div>
);

export default StepTwoCard;

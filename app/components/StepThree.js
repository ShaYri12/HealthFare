'use client';
import '../styles/stepthree.css';
import '../styles/form.css';
import StepThreeCard from './StepThreeCard';
import React, { useState } from 'react';

const StepThree = ({ prevStep, nextStep, handleChange, values }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
    console.log('Cart:', [...cart, item]); // Log the updated cart for debugging
  };

  const removeFromCart = (title) => {
    setCart(prevCart => prevCart.filter(item => item.title !== title));
    console.log('Updated Cart:', cart.filter(item => item.title !== title)); // Log the updated cart for debugging
  };

  const cardsData = [
    {
      imgSrc: "/assets/step3-product1.svg",
      title: "Metabolic Booster",
      price: "$889.99",
      desc: "Enhance your metabolism and increase energy levels with this potent blend of natural ingredients.",
    },
    {
      imgSrc: "/assets/step3-product2.svg",
      title: "Appetite Suppressant",
      price: "$889.99",
      savings: "$360",
      desc: "Reduce cravings and control hunger with our effective, natural appetite suppressant formula.",
    },
    {
      imgSrc: "/assets/step3-product3.svg",
      title: "Detox Cleanse",
      price: "$889.99",
      desc: "Support digestive health and eliminate toxins with our gentle and effective detox cleanse supplement.",
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>Would you like to add any additional supplements? <div>(optional)</div></h2>
      </div>
      {cardsData.map((card, index) => (
        <StepThreeCard
          key={index}
          {...card}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          nextStep={nextStep}
        />
      ))}

      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> Back
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={nextStep}>Skip</button>
        </div>
      </div>

      <div className='review-inline review-md review-stepthree'>
        <h3>Excellent</h3>
        <div className='stars'>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
        </div>
        <p className='reviews'>456 <span>reviews on</span></p>
        <div className='trustpilot'>
          <img src="/assets/star-trustpilot.svg" alt="trust"/> <span>Trustpilot</span>
        </div>
      </div>

      <div className='review review-sm'>
        <h3>Excellent</h3>
        <div className='stars'>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
        </div>
        <p>Based on <b>456 reviews</b></p>
        <div className='trustpilot'>
          <img src="/assets/star-trustpilot.svg" alt="trust"/> Trustpilot
        </div>
      </div>
    </div>
  );
};

export default StepThree;

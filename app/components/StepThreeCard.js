'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const StepThreeCard = ({ imgSrc, title, price, desc, addToCart, nextStep }) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const [isClaimedFree, setIsClaimedFree] = useState(false);

  const handleAddToCart = () => {
    if (quantity > 0) {
      const item = {
        imgSrc: imgSrc,
        title: title,
        price: isClaimedFree ? 0 : price,
        desc: desc,
        quantity: quantity,
      };
      addToCart(item); // Notify parent component (StepThree) about the added item
      nextStep()
    } else {
      console.log('Quantity should be greater than zero to add to cart.');
      // Optionally, you could display an error message or alert the user.
    }
  };

  const handleClaimFree = (e) => {
    setIsClaimedFree(true);
  };

  return (
    <div className='card card-suppliment' onClick={handleAddToCart}>
      <div className='card-top'>
        <div className='card-img'>
          <img src={imgSrc} alt={title} />
        </div>
        <button className="claim-free" onClick={handleClaimFree}>{t('stepThree.claimGift')}</button>
        <div className='card-title-price title-price-stepthree'>
          <h3>{title}</h3>
          <div className='price-desc'>
            <h3 className='price-decrease'>
                  <span className='original-price'>$90</span><span className='changed-price'>{price}</span>
            </h3>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThreeCard;

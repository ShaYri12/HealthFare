import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/review.css';

const Review = () => {
  const { t } = useTranslation();

  return (
    <div className='review'>
        <h3>{t('review.excellent')}</h3>
        <div className='stars'>
            <img src="/assets/star.png" alt="star"/>
            <img src="/assets/star.png" alt="star"/>
            <img src="/assets/star.png" alt="star"/>
            <img src="/assets/star.png" alt="star"/>
            <img src="/assets/star.png" alt="star"/>
        </div>
        <p>{t('review.basedOn')} <b>456 {t('review.reviewsOn')}</b></p>
        <div className='trustpilot'>
            <img src="/assets/star-trustpilot.svg" alt="trust"/> Trustpilot
        </div>
    </div>
  );
};

export default Review;

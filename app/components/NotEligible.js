'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/stepone.css';
import '../styles/form.css';
import Review from './Review';

const NotEligible = ({handleEligible, NotEligibleData,}) => {
    const { t } = useTranslation();

    return (
      <div className="formContainer step-form">
        <div className="title-info">
          <h2>{NotEligibleData.title}</h2>
          <p>{NotEligibleData.desc}</p>
        </div>
        <div className='btn-group btn-group-stepthree'>
            <button className='back-btn back-btn-stepthree back-noteligible' onClick={handleEligible}>
                <img src="/assets/arrow.svg" alt="arrow" /> {t('notEligible.backButton')}
            </button>
        </div>

        <Review />
      </div>
    );
};

export default NotEligible;

'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/stepone.css';
import '../styles/form.css';
import Review from './Review';

const NotEligible = ({ nextStep, prevStep, handleChange, values }) => {
    const { t } = useTranslation();

    return (
      <div className="formContainer step-form">
        <div className="title-info">
          <h2>{t('notEligible.title')}</h2>
          <p>{t('notEligible.message')}</p>
        </div>
        <div className='btn-group btn-group-stepthree'>
            <button className='back-btn back-btn-stepthree back-noteligible' onClick={prevStep}>
                <img src="/assets/arrow.svg" alt="arrow" /> {t('notEligible.backButton')}
            </button>
        </div>

        <Review />
      </div>
    );
};

export default NotEligible;

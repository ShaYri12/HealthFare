'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import '../styles/stepfour.css';
import '../styles/form.css';
import Testimonial from './Testimonial';

const StepFour = ({ nextStep, prevStep, handleChange, values }) => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>{t('stepFour.calculateBMI')}</h2>
        <p>{t('stepFour.calculateBMIDescription')}</p>
      </div>
      <div className="pounds">
        <p>{t('stepFour.pounds')}</p>
        <input
          type="number"
          placeholder={t('stepFour.poundsPlaceholder')}
        />
      </div>
      <div className='feet-inches'>
        <div className="feet-option">
          <p>{t('stepFour.feet')}</p>
          <select onChange={handleChange("feet")} value={values.feet}>
            <option value="">{t('stepFour.feetPlaceholder')}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="inches-option">
          <p>{t('stepFour.inches')}</p>
          <select onChange={handleChange("inches")} value={values.inches}>
            <option value="">{t('stepFour.inchesPlaceholder')}</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </select>
        </div>
      </div>
      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> {t('stepFour.back')}
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={nextStep}>{t('stepFour.continueJourney')}</button>
          <button className='arrow-btn arrow-btn-stepthree' onClick={nextStep}><img src="/assets/arrow.svg" alt=""/></button>
        </div>
      </div>

      <Testimonial/>
    </div>
  );
};

export default StepFour;

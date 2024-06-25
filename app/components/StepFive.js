// StepFive.js

'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/stepfive.css';
import '../styles/form.css';
import '../styles/image-slider.css';
import Review from './Review';

const slides = [
  {
    id: '1',
    beforeImg: '/assets/before1.png',
    afterImg: '/assets/after1.png',
  },
  {
    id: '2',
    beforeImg: '/assets/before2.png',
    afterImg: '/assets/after2.png',
  }
];

const StepFive = ({ nextStep, prevStep, handleChange, values }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(50);

  const prevSlide = () => {
    setCurrentIndex((currentIndex > 0) ? currentIndex - 1 : slides.length - 1);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex < slides.length - 1) ? currentIndex + 1 : 0);
  };

  const handleSliderChange = (e) => {
    setPosition(e.target.value);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2><span>{t('stepFive.title')} </span></h2>
        <p>{t('stepFive.subtitle')}</p>
      </div>

      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> {t('stepFive.back')}
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={nextStep}>{t('stepFive.continueJourney')}</button>
        </div>
      </div>
      
      <Review />
    </div>
  );
};

export default StepFive;

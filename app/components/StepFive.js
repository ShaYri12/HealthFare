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
  const { t } = useTranslation(); // 'stepFive' corresponds to the section in i18n.js
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
      
      <div className='transformation-box'>
        <div className='navigation-header'>
          <h3>{t('stepFive.inspiringTransformations')}</h3>
          <div className="slider-navigation">
            <button id="prev" className="navButton slider-prev" onClick={prevSlide}>
              <img src="/assets/arrow.svg" alt=""/>
            </button>
            <button id="next" className="navButton slider-next" onClick={nextSlide}>
              <img src="/assets/arrow.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="slider-box" style={{ '--position': `${position}%` }}>
          <div className="image-container">
            <img
              className="image-before slider-image"
              src={currentSlide.beforeImg}
              alt="Before"
            />
            <img
              className="image-after slider-image"
              src={currentSlide.afterImg}
              alt="After"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={position}
              aria-label="Percentage of before photo shown"
              className="slider"
              onChange={handleSliderChange}
            />
            <div className="slider-line" style={{ left: `${position}%` }}></div>
            <div className="slider-button" style={{ left: `${position}%` }}>
              <span className="slider-text before-text"><img src="/assets/arrow.svg" alt=""/> {t('stepFive.beforeText')}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="128"
                  y1="40"
                  x2="128"
                  y2="216"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="96"
                  y1="128"
                  x2="16"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="48 160 16 128 48 96"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="160"
                  y1="128"
                  x2="240"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="208 96 240 128 208 160"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <span className="slider-text after-text"><img src="/assets/arrow.svg" alt=""/> {t('stepFive.afterText')}</span>
            </div>
          </div>
        </div>
        <div className="slider-navigation slider-navigation-sm">
          <button id="prev" className="navButton slider-prev" onClick={prevSlide}>
            <img src="/assets/arrow.svg" alt=""/>
          </button>
          <button id="next" className="navButton slider-next" onClick={nextSlide}>
            <img src="/assets/arrow.svg" alt=""/>
          </button>
        </div>
      </div>

      <Review />
    </div>
  );
};

export default StepFive;

'use client';
import { useState } from 'react';
import '../styles/stepfive.css';
import '../styles/form.css';
import '../styles/image-slider.css'; // Make sure this file is created and styles are added.
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

const StepFive = ({ nextStep, prevStep, handleNotEligible, handleChange, values }) => {
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
        <h2><span>Congratulations! </span> You’re Pre-Qualified!</h2>
        <p> Please provide the upcoming information to complete your pre-qualification. </p>
      </div>

      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> Back
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={nextStep}>Continue Your Journey</button>
          <button className='arrow-btn arrow-btn-stepthree' onClick={handleNotEligible}><img src="/assets/arrow.svg" alt=""/></button>
        </div>
      </div>
      
      <div className='transformation-box'>
        <div className='navigation-header'>
          <h3>Inspiring Transformations</h3>
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
            <span className="slider-text before-text"><img src="/assets/arrow.svg" alt=""/> BEFORE</span>
            <span className="slider-text after-text"><img src="/assets/arrow.svg" alt=""/> AFTER</span>
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

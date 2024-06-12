'use client';
import { useState } from 'react';
import '../styles/stepfive.css';
import '../styles/form.css';
import '../styles/image-slider.css'; // Make sure this file is created and styles are added.
import Review from './Review';

const slides = [
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  }
];

const StepFive = ({ nextStep, prevStep, handleNotEligible, handleChange, values }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(50);

  const updateSlide = (index) => {
    setCurrentIndex(index);
  };

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
              src={currentSlide.img}
              alt="color photo"
            />
            <img
              className="image-after slider-image"
              src={currentSlide.img}
              alt="black and white"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            aria-label="Percentage of before photo shown"
            className="slider"
            onChange={handleSliderChange}
          />
          <div className="slider-line" aria-hidden="true"></div>
          <div className="slider-button" aria-hidden="true">
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

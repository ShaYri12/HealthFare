'use client';
import { useState } from 'react';
import '../styles/stepfive.css';
import '../styles/form.css'
import Review from './Review';

const slides = [
  {
    id: '1',
    img: '/assets/transformation.svg',
  },
  {
    id: '2',
    img: '/assets/transformation.svg',
  }
]

const StepFive = ({ nextStep, prevStep, handleNotEligible, handleChange, values }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex > 0) ? currentIndex - 1 : slides.length - 1);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex < slides.length - 1) ? currentIndex + 1 : 0);
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
        <img src={currentSlide.img} alt="Transformation" className="slider-image" />
        <div className="slider-navigation slider-navigation-sm">
          <button id="prev" className="navButton slider-prev" onClick={prevSlide}>
            <img src="/assets/arrow.svg" alt=""/>
          </button>
          <button id="next" className="navButton slider-next" onClick={nextSlide}>
            <img src="/assets/arrow.svg" alt=""/>
          </button>
        </div>
      </div>

      <Review/>
    </div>
  );
};

export default StepFive;


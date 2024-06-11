import React, { useState } from 'react';
import '../styles/testimonial.css';

const testimonials = [
  {
    rating: '★★★★★',
    source: 'Google',
    text: 'After struggling with my weight for years, I finally found a solution that works. The Tirzepatide program helped me lose 25 pounds in 9 weeks. The structured approach, combined with the caring and professional support, made it so manageable. I learned to make healthier choices and stay active. Now, I\'m living a healthier lifestyle and feeling fantastic. This program exceeded my expectations and gave me the tools I needed to succeed!',
    author: 'ALEX'
  },
  {
    rating: '★★★★★',
    source: 'Google',
    text: 'After struggling with my weight for years, I finally found a solution that works. The Tirzepatide program helped me lose 25 pounds in 9 weeks. The structured approach, combined with the caring and professional support, made it so manageable. I learned to make healthier choices and stay active. Now, I\'m living a healthier lifestyle and feeling fantastic. This program exceeded my expectations and gave me the tools I needed to succeed!',
    author: 'ALEX'
  },
  // Add more testimonials here
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1);
  };

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonialContainer">
      <div className="testimonialHeader">
        <h2>REAL STORIES, REAL RESULTS</h2>
        <div className="testimonialNavigation">
          <button id="prev" className="navButton" onClick={prevTestimonial}>
            <svg aria-hidden="true" className="navIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button id="next" className="navButton" onClick={nextTestimonial}>
            <svg aria-hidden="true" className="navIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="testimonial" className="testimonialContent">
        <div className="ratingSource">
          <div className="rating">
            <span className="ratingStars">{currentTestimonial.rating}</span>
          </div>
          <span>{currentTestimonial.source}</span>
        </div>
        <p className="testimonialText">
          {currentTestimonial.text}
        </p>
        <p className="testimonialAuthor">{currentTestimonial.author}</p>
      </div>
    </div>
  );
};

export default Testimonial;

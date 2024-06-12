import React, { useState } from 'react';
import '../styles/testimonial.css';

const testimonials = [
  {
    rating: '5',
    source: 'Google',
    text: 'After struggling with my weight for years, I finally found a solution that works. The Tirzepatide program helped me lose 25 pounds in 9 weeks. The structured approach, combined with the caring and professional support, made it so manageable. I learned to make healthier choices and stay active. Now, I\'m living a healthier lifestyle and feeling fantastic. This program exceeded my expectations and gave me the tools I needed to succeed!',
    author: 'ALEX'
  },
  {
    rating: '5',
    source: 'Facebook',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione, sint reprehenderit beatae cum tempore tempora numquam quo fugiat quidem quisquam adipisci harum eos ad repellat qui, expedita totam? Error!',
    author: 'MARK'
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
          <button id="prev" className="navButton textimonial-prev" onClick={prevTestimonial}>
            <img src="/assets/arrow.svg" alt=""/>
          </button>
          <button id="next" className="navButton textimonial-next" onClick={nextTestimonial}>
            <img src="/assets/arrow.svg" alt=""/>
          </button>
        </div>
      </div>
      <div id="testimonial" className="testimonialContent">
        <div className="ratingSource">
            <div className="rating">
                {[...Array(parseInt(currentTestimonial.rating))].map((_, i) => (
                <img key={i} src="/assets/star-white.svg" alt="Star" className="ratingStars"/>
                ))}
            </div>
          <span>{currentTestimonial.source}</span>
        </div>
        <p className="testimonialText">
          {currentTestimonial.text}
        </p>
        <p className="testimonialAuthor">{currentTestimonial.author}</p>
      </div>
      
      <div className="testimonialNavigation testimonialNavigation-sm">
        <button id="prev" className="navButton textimonial-prev" onClick={prevTestimonial}>
          <img src="/assets/arrow.svg" alt=""/>
        </button>
        <button id="next" className="navButton textimonial-next" onClick={nextTestimonial}>
          <img src="/assets/arrow.svg" alt=""/>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;

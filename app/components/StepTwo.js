'use client';
import '../styles/steptwo.css';
import '../styles/form.css';
import StepTwoCard from './StepTwoCard';

const StepTwo = ({ prevStep, nextStep, handleChange, values }) => {

  const cardsData = [
    {
      imgSrc: "/assets/step2-product1.svg",
      title: "Semaglutide (3-Month treatment Plan)",
      price: "$889.99",
      monthlyPrice: "$296",
      description: "Lose up to 25lbs",
      features: [
        "5mg/2ml Injection (Same as Ozempic & Wegovy)",
        "Weekly application - total of 12 applications"
      ],
    },
    {
      imgSrc: "/assets/step2-product2.svg",
      title: "Semaglutide (6-Month treatment Plan)",
      price: "$1599.99",
      monthlyPrice: "$266",
      savings: "$360",
      description: "Lose up to 60lbs",
      features: [
        "5mg/2ml Injection (Same as Ozempic & Wegovy)",
        "Weekly application - total of 24 applications"
      ],
    },
    {
      imgSrc: "/assets/step2-product3.svg",
      title: "Tirzepatide - 6 Weeks Treatment Plan",
      price: "$887.78",
      monthlyPrice: "$266",
      description: "Lose up to 18lbs",
      features: [
        "2ml of Tirzepatide* (2ml vial) (Same as Mounjaro)",
        "Weekly application - total of 6 applications"
      ],
    },
    {
      imgSrc: "/assets/step2-product4.svg",
      title: "Semaglutide (6-Month treatment Plan)",
      price: "$1599.99",
      monthlyPrice: "$266",
      savings: "$1176",
      description: "Lose up to 60lbs",
      features: [
        "4ml of Tirzepatide* (2 x 2ml vial) (Same as Mounjaro)",
        "Weekly application - total of 9 applications"
      ],
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>Which medication are you interested in?</h2>
        <p>
          After completing your digital health visit with one of our licensed
          physicians, they will review your medical history and clinical
          information. Based on your selection, they will approve the
          appropriate treatment plan for you.
        </p>
      </div>
      <div className='review-inline'>
          <h3>Excellent</h3>
          <div className='stars'>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
          </div>
          <p className='reviews'>456 <span>reviews on</span></p>
          <div className='trustpilot'>
              <img src="/assets/star-trustpilot.svg" alt="trust"/> <span>Trustpilot</span>
          </div>
      </div>
      {cardsData.map((card, index) => (
        <StepTwoCard key={index} {...card} nextStep={nextStep} />
      ))}
      <button className='back-btn' onClick={prevStep}>
        <img src="/assets/arrow.svg" alt="arrow" /> Back
      </button>
    </div>
  );
};

export default StepTwo;

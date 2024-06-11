'use client';
import '../styles/stepthree.css';
import '../styles/form.css';
import StepThreeCard from './StepThreeCard';

const StepThree = ({ prevStep, nextStep, handleChange, values }) => {

  const cardsData = [
    {
      imgSrc: "/assets/step3-product1.svg",
      title: "Metabolic Booster",
      price: "$889.99",
      desc: "Enhance your metabolism and increase energy levels with this potent blend of natural ingredients.",
    },
    {
      imgSrc: "/assets/step3-product2.svg",
      title: "Appetite Suppressant",
      price: "$889.99",
      savings: "$360",
      desc: "Reduce cravings and control hunger with our effective, natural appetite suppressant formula.",
    },
    {
      imgSrc: "/assets/step3-product3.svg",
      title: "Detox Cleanse",
      price: "$889.99",
      desc: "Support digestive health and eliminate toxins with our gentle and effective detox cleanse supplement.",
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>Would you like to add any additional supplements? <p>(optional)</p></h2>
      </div>
      {cardsData.map((card, index) => (
        <StepThreeCard key={index} {...card} nextStep={nextStep} />
      ))}
      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> Back
        </button>
        <button className='long-btn long-btn-stepthree' onClick={nextStep}>Start Your Journey</button>
        <button className='arrow-btn arrow-btn-stepthree' onClick={nextStep}><img src="/assets/arrow.svg" alt=""/></button>
      </div>

      

      <div className='review-inline review-stepthree'>
          <h3>Excellent</h3>
          <div className='stars'>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
              <img src="/assets/star.png" alt="star"/>
          </div>
          <p>456 <span>reviews on</span></p>
          <div className='trustpilot'>
              <img src="/assets/star-trustpilot.svg" alt="trust"/> <span>Trustpilot</span>
          </div>
      </div>
    </div>
  );
};

export default StepThree;

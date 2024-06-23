import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/plan-selection.css";
import "../styles/form.css";
import Review from "./Review";

const PlanSelection = ({ nextStep, prevStep, handleChange, values }) => {
  const { t } = useTranslation();
  
  // Assuming you have formData and setFormData initialized with useState
  const [formData, setFormData] = useState({
    plan: values.plan // assuming values.plan comes from parent component
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here if needed
  };

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>Your Shipping Frequency</h2>
        <p>How often do you want your treatment to be shipped?</p>
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <div className="plan-select">
          <div className="plan-option" onClick={() => {
            setFormData({ ...formData, plan: 'one month plan' });
            nextStep();
          }}>
            <input 
              type="radio" 
              id="one-month" 
              name="plan" 
              value="one month plan" 
              checked={formData.plan === 'one month plan'} 
              onChange={handleChange} // If you need onChange handler
            />
            <label className="plan-selection-text" htmlFor="one-month">
                <span>One Month Plan</span>
                <span className="price">$296/Month*</span>
            </label>
          </div>
          <div className="plan-option" onClick={() => {
            setFormData({ ...formData, plan: 'three month plan' });
            nextStep();
          }}>
            <input 
              type="radio" 
              id="three-month" 
              name="plan" 
              value="three month plan" 
              checked={formData.plan === 'three month plan'} 
              onChange={handleChange} // If you need onChange handler
            />
            <label className="plan-selection-text" htmlFor="three-month">
                <span>Three Month Plan</span>
                <span className="price">$279/Month*</span>
            </label>
          </div>
        </div>
        {/* {errors.plan && <span className="error">{errors.plan}</span>} */}

        <div className="plan">
        <div className='btn-group btn-group-stepthree'>
          <button type="button" className='back-btn back-btn-stepthree' onClick={prevStep}>
            <img src="/assets/arrow.svg" alt="arrow" /> {t('stepFour.back')}
          </button>
          <div className='forward-btns'>
            <button type='submit' className='long-btn long-btn-stepthree'>{t('stepFour.continueJourney')}</button>
          </div>
        </div>
        </div>
      </form>

      <Review />
    </div>
  );
};

export default PlanSelection;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/plan-selection.css";
import "../styles/form.css";
import Review from "./Review";

const PlanSelection = ({ nextStep, prevStep, handleChange, values }) => {
  const { t } = useTranslation();

  // Initialize formData with values.plan from props
  const [formData, setFormData] = useState({
    plan: values.plan || "" // Initialize with values.plan if it exists
  });

  const handlePlanSelection = (selectedPlan) => {
    setFormData({ plan: selectedPlan });
    handleChange({ plan: selectedPlan }); // Update parent state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission logic here if needed
    nextStep();
  };

  // Determine the price based on the product title
  const getProductPrice = () => {
    // Assuming values.stepTwo is passed from parent and contains product details
    const productTitle = values.stepTwo.title;

    if (productTitle === "Compounded Semaglutide") {
      return {
        oneMonthPrice: "$296/Month*",
        threeMonthPrice: "$279/Month*"
      };
    } else if (productTitle === "Compounded Tirzepatide") {
      return {
        oneMonthPrice: "$425/Month*", 
        threeMonthPrice: "$399/Month*"
      };
    } else {
      // Default prices if no specific product title match
      return {
        oneMonthPrice: "$296/Month*",
        threeMonthPrice: "$279/Month*"
      };
    }
  };

  // Fetch the prices based on the product title
  const { oneMonthPrice, threeMonthPrice } = getProductPrice();

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>Your Shipping Frequency</h2>
        <p>How often do you want your treatment to be shipped?</p>
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <div className="plan-select">
          <div className="plan-option" onClick={() => handlePlanSelection('one month plan')}>
            <input
              type="radio"
              id="one-month"
              name="plan"
              value="one month plan"
              checked={formData.plan === 'one month plan'}
              onChange={() => {}}
            />
            <label className="plan-selection-text" htmlFor="one-month">
              <span>One Month Plan</span>
              <span className="price">{oneMonthPrice}</span>
            </label>
          </div>
          <div className="plan-option" onClick={() => handlePlanSelection('three month plan')}>
            <input
              type="radio"
              id="three-month"
              name="plan"
              value="three month plan"
              checked={formData.plan === 'three month plan'}
              onChange={() => {}}
            />
            <label className="plan-selection-text" htmlFor="three-month">
              <span>Three Month Plan</span>
              <span className="price">{threeMonthPrice}</span>
            </label>
          </div>
        </div>

        <div className="plan">
          <div className="btn-group btn-group-stepthree">
            <button type="button" className="back-btn back-btn-stepthree" onClick={prevStep}>
              <img src="/assets/arrow.svg" alt="arrow" /> Back
            </button>
            <div className="forward-btns">
              <button type="submit" className="long-btn long-btn-stepthree">Continue</button>
            </div>
          </div>
        </div>
      </form>

      <Review />
    </div>
  );
};

export default PlanSelection;

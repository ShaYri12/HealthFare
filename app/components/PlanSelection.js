import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/plan-selection.css";
import "../styles/form.css";
import Review from "./Review";

const PlanSelection = ({ nextStep, prevStep, handleChange, values, cartitem2 }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    plan: values.plan || "",
    price: values.price || "",
    pounds: values.pounds || "",
    stepTwo: values.stepTwo || {},
  });

  const [error, setError] = useState("");

  const handlePlanSelection = (selectedPlan, price, pounds, description) => {
    const cleanedPrice = price.replace(/[^$0-9]/g, '');
    const newFormData = {
      plan: selectedPlan,
      price: cleanedPrice,
      pounds,
      stepTwo: {
        ...formData.stepTwo,
        price: cleanedPrice,
        description,
        monthPlan: selectedPlan === 'one month plan' ? 'One Month Plan' : 'Three Month Plan',
      },
    };
    setFormData(newFormData);
    setError(""); // Clear any existing error message
    handleChange('stepTwo')(newFormData.stepTwo);
    handleChange('planSelection')(newFormData);
    cartitem2({ ...newFormData.stepTwo }); // Update cart2
    // Submit the form
    handleSubmit();
  };

  const handleSubmit = () => {
    if (!formData.plan) {
      setError(t('error.selectError'));
      return;
    }
    nextStep();
  };

  const getProductDetails = () => {
    const productTitle = values.stepTwo.title;

    if (productTitle === "Compounded Semaglutide") {
      return {
        oneMonthPrice: "$296/Month*",
        threeMonthPrice: "$279/Month*",
        oneMonthDescription: "Lose up to 10 pounds monthly",
        threeMonthDescription: "Lose up to 30 pounds",
      };
    } else if (productTitle === "Compounded Tirzepatide") {
      return {
        oneMonthPrice: "$425/Month*",
        threeMonthPrice: "$399/Month*",
        oneMonthDescription: "Lose up to 16 pounds monthly",
        threeMonthDescription: "Lose up to 48 pounds",
      };
    } else {
      return {
        oneMonthPrice: "$296/Month*",
        threeMonthPrice: "$279/Month*",
        oneMonthDescription: "Lose up to 10 pounds",
        threeMonthDescription: "Lose up to 30 pounds",
      };
    }
  };

  const { oneMonthPrice, threeMonthPrice, oneMonthPounds, threeMonthPounds, oneMonthDescription, threeMonthDescription } = getProductDetails();

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>Your Shipping Frequency</h2>
        <p>How often do you want your treatment to be shipped?</p>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="input-form">
        <div className="plan-select">
          <div className="plan-option" onClick={() => handlePlanSelection('one month plan', oneMonthPrice, oneMonthPounds, oneMonthDescription)}>
            <input
              type="radio"
              id="one-month"
              name="plan"
              value="one month plan"
              checked={formData.plan === 'one month plan'}
            />
            <label className="plan-selection-text" htmlFor="one-month">
              <span>One Month Plan</span>
              <span className="price">{oneMonthPrice}</span>
            </label>
          </div>
          <div className="plan-option" onClick={() => handlePlanSelection('three month plan', oneMonthPrice, oneMonthPounds, oneMonthDescription)}>
            <input
              type="radio"
              id="three-month"
              name="plan"
              value="three month plan"
              checked={formData.plan === 'three month plan'}
            />
            <label className="plan-selection-text" htmlFor="three-month">
              <span>Three Month Plan</span>
              <span className="price">{threeMonthPrice}</span>
            </label>
          </div>
        </div>
        {error && <span className="error">{error}</span>}
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

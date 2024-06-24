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
      ...formData,
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
    console.log("Selected Plan:", newFormData.plan); // Check selected plan
    setError(""); // Clear any existing error message
    handleChange('stepTwo')(newFormData.stepTwo);
    handleChange('planSelection')(newFormData);
    cartitem2({ ...newFormData.stepTwo }); // Update cart2
    nextStep(); // Proceed to the next step
  };

  const getProductDetails = () => {
    const productTitle = values.stepTwo.title;

    if (productTitle === "Compounded Semaglutide" || productTitle === "Semaglutida Compuesta" || productTitle === "Semaglutida Composta") {
      return {
        oneMonthPrice: `$296 / ${t("planSelection.month")}*`,
        threeMonthPrice: `$279 / ${t("planSelection.month")}*`,
        oneMonthDescription: t("stepTwo.cards.0.description"),
        threeMonthDescription: t("stepTwo.cards.1.description"),
      };
    } else if (productTitle === "Compounded Tirzepatide" || productTitle === "Tirzepatida Compuesta" || productTitle === "Tirzepatida Composta") {
      return {
        oneMonthPrice: `$425 / ${t("planSelection.month")}*`,
        threeMonthPrice: `$399 / ${t("planSelection.month")}*`,
        oneMonthDescription: t("stepTwo.cards.2.description"),
        threeMonthDescription: t("stepTwo.cards.3.description"),
      };
    } else {
      return {
        oneMonthPrice: `$296 / ${t("stepSix.question3.month")}*`,
        threeMonthPrice: `$279 / ${t("stepSix.question3.month")}*`,
        oneMonthDescription: t("stepTwo.cards.0.description"),
        threeMonthDescription: t("stepTwo.cards.1.description"),
      };
    }
  };

  const { oneMonthPrice, threeMonthPrice, oneMonthPounds, threeMonthPounds, oneMonthDescription, threeMonthDescription } = getProductDetails();

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>{t('planSelection.title')}</h2>
        <p>{t('planSelection.description')}</p>
      </div>
      <form className="input-form"> {/* Remove onSubmit attribute */}
        <div className="plan-select">
          <div className="plan-option" onClick={() => handlePlanSelection('one month plan', oneMonthPrice, oneMonthPounds, oneMonthDescription)}>
            <input
              type="radio"
              id="one-month"
              name="plan"
              value="one month plan"
              checked={formData.plan === 'one month plan'}
              onChange={() => {}} // To prevent React warning about changing an uncontrolled input to controlled
            />
            <label className="plan-selection-text" htmlFor="one-month">
              <span>{t('planSelection.oneMonthPlan')}</span>
              <span className="price">{oneMonthPrice}</span>
            </label>
          </div>
          <div className="plan-option" onClick={() => handlePlanSelection('three month plan', threeMonthPrice, threeMonthPounds, threeMonthDescription)}>
            <input
              type="radio"
              id="three-month"
              name="plan"
              value="three month plan"
              checked={formData.plan === 'three month plan'}
              onChange={() => {}} // To prevent React warning about changing an uncontrolled input to controlled
            />
            <label className="plan-selection-text" htmlFor="three-month">
              <span>{t('planSelection.threeMonthPlan')}</span>
              <span className="price">{threeMonthPrice}</span>
            </label>
          </div>
        </div>
        {error && <span className="error">{error}</span>}
        <div className="plan">
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevStep}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('planSelection.back')}
            </button>
            {/* No need for a separate submit button, handle next step directly */}
            <button type='button' className='long-btn long-btn-stepthree' onClick={nextStep}>{t('planSelection.continueJourney')}</button>
          </div>
        </div>
      </form>

      <Review />
    </div>
  );
};

export default PlanSelection;

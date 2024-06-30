import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/plan-selection.css";
import "../styles/form.css";
import Review from "./Review";
import { currencyToNumber } from "../utils/currencyUtils";

const PlanSelection = ({ nextStep, prevStep, handleChange, values, cartitem2 }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    plan: values.plan || "",
    price: values.price || "",
    pounds: values.pounds || "",
    stepTwo: values.stepTwo || {},
  });

  const [error, setError] = useState("");
  const [planSelected, setPlanSelected] = useState(false);

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
        monthPlan: selectedPlan === 'monthly supply' ? 'monthly supply' : '3-month supply',
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

  const handleContinue = () => {
    if (!planSelected) {
      setError(t('error.selectError')); // Set error message if no plan is selected
    } else {
      nextStep(); // Proceed to the next step if a plan is selected
    }
  };

  const getProductDetails = () => {
    const productTitle = values.stepTwo.title;

    if (productTitle === t("stepTwo.cards.0.title")) {
      return {
        oneMonthPrice: `$296 ${t("planSelection.month")}`,
        threeMonthPrice: `$279 ${t("planSelection.month")}`,
        oneMonthDescription: t("stepTwo.cards.0.description"),
        threeMonthDescription: t("stepTwo.cards.0.description2"),
      };
    } else if (productTitle === t("stepTwo.cards.1.title")) {
      return {
        oneMonthPrice: `$425 ${t("planSelection.month")}`,
        threeMonthPrice: `$399 ${t("planSelection.month")}`,
        oneMonthDescription: t("stepTwo.cards.1.description"),
        threeMonthDescription: t("stepTwo.cards.1.description2"),
      };
    } else {
      return {
        oneMonthPrice: `$296 ${t("planSelection.month")}`,
        threeMonthPrice: `$279 ${t("planSelection.month")}`,
        oneMonthDescription: t("stepTwo.cards.0.description"),
        threeMonthDescription: t("stepTwo.cards.0.description2"),
      };
    }
  };

  const { oneMonthPrice, threeMonthPrice, oneMonthPounds, threeMonthPounds, oneMonthDescription, threeMonthDescription } = getProductDetails();


  const threeMonthPriceNumber = currencyToNumber(threeMonthPrice);
  const totalThreeMonthPrice = threeMonthPriceNumber * 3;

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>{t('planSelection.title')}</h2>
        <p>{t('planSelection.description')}</p>
      </div>
      <form className="input-form">
        <div className="plan-select">
          <div className="plan-option" onClick={() => handlePlanSelection('monthly supply', oneMonthPrice, oneMonthPounds, oneMonthDescription)}>
            <input
              type="radio"
              id="one-month"
              name="plan"
              value="monthly supply"
              checked={formData.plan === 'monthly supply'}
              onChange={() => {}}
            />
            <label className="plan-selection-text" htmlFor="one-month">
              <span className="month">{t('planSelection.oneMonthPlan')}</span>
              <span className="price">{oneMonthPrice}</span>
            </label>
          </div>
          <div className="plan-option" onClick={() => handlePlanSelection('3-month supply', threeMonthPrice, threeMonthPounds, threeMonthDescription)}>
            <input
              type="radio"
              id="three-month"
              name="plan"
              value="3-month supply"
              checked={formData.plan === '3-month supply'}
              onChange={() => {}}
            />
            <label className="plan-selection-text" htmlFor="three-month">
              <span className="month">{t('planSelection.threeMonthPlan')}</span>
              <div className="price">
                <span className="original-price">{oneMonthPrice}</span> <span>{threeMonthPrice}</span>
              </div>
              <div className="price-total">
                <span>{t('planSelection.total')} ${totalThreeMonthPrice} {t('planSelection.equivalentTo')} {threeMonthPrice} {t('planSelection.month')})</span>
              </div>
            </label>
          </div>
        </div>
        {error && <span className="error">{error}</span>}
        <div className="plan">
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevStep}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('planSelection.back')}
            </button>
            <button type='button' className='long-btn long-btn-stepthree' onClick={handleContinue}>
              {t('planSelection.continueJourney')}
            </button>
          </div>
        </div>
      </form>
      <Review />
    </div>
  );
};

export default PlanSelection;

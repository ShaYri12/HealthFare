import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/stepsix.css"; // Ensure this file exists
import "../styles/stepseven.css"; // Ensure this file exists
import "../styles/form.css";
import Review from "./Review";

const StepSeven = ({ nextStep, prevStep, handleChange, values,}) => {
  const { t } = useTranslation();

  const handleSubmit = () =>{
    
  }

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>Your Shipping Frequency</h2>
        <p>How often do you want your treatment to be shipped?</p>
      </div>
      <form onSubmit={handleSubmit} className="input-form">
      <div className="input-label-full input-label">
        <label className="label">{t("stepSeven.question6.label")}</label>
        <input
          className="input-border"
          type="text"
          value={formData.question6}
          onChange={handleInputChange("question6")}
          placeholder={t("stepSeven.question6.placeholder")}
        />
        {errors.question6 && (
          <span className="error">{errors.question6}</span>
        )}
      </div>
      <div className="btn-group btn-group-stepthree">
        <button
          type="button"
          className="back-btn back-btn-stepthree"
          onClick={prevInfo}
        >
          <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
        </button>
        <div className="forward-btns">
          <button
            type="submit"
            className="long-btn long-btn-stepthree"
          >
            {t("stepSeven.continueJourney")}
          </button>
          {currentQuestion < 5 && (
            <button
              type="button"
              className="arrow-btn arrow-btn-stepthree"
              onClick={nextInfo}
            >
              <img src="/assets/arrow.svg" alt="" />
            </button>  
          )}
        </div>
      </div>
    </form>

      <Review />
    </div>
  );
};

export default StepSeven;
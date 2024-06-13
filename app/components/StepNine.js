'use client';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/stepeight.css";
import "../styles/stepnine.css";
import "../styles/form.css";
import Review from "./Review";

const StepNine = ({ nextStep, prevStep }) => {
  const { t } = useTranslation();

  const [selectedCondition, setSelectedCondition] = useState(null);

  const handleCheckboxChange = (conditionId) => {
    setSelectedCondition((prevSelectedCondition) =>
      prevSelectedCondition === conditionId ? null : conditionId
    );
  };

  const conditions = [
    { id: "notify", label: t('stepNine.notify') },
    { id: "do-not-notify", label: t('stepNine.doNotNotify') },
  ];

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>{t('stepNine.title')}</h2>
        <p>{t('stepNine.description')}</p>
      </div>
      <form className="input-form">
        <div className="condition-select">
          {conditions.map((condition) => (
            <div
              className="condition-option"
              key={condition.id}
              onClick={() => {
                document.getElementById(condition.id).click();
                nextStep();
              }}
              style={{
                border: selectedCondition === condition.id ? "1px solid black" : "",
              }}
            >
              <input
                type="radio"
                id={condition.id}
                name="condition"
                checked={selectedCondition === condition.id}
                onChange={() => handleCheckboxChange(condition.id)}
              />
              <label htmlFor={condition.id}> {condition.label} </label>
            </div>
          ))}
        </div>
      </form>
      
      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> Back
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={nextStep}>{t('stepNine.continueJourney')}</button>
          <button className='arrow-btn arrow-btn-stepthree' onClick={nextStep}><img src="/assets/arrow.svg" alt=""/></button>
        </div>
      </div>

      <Review />
    </div>
  );
};

export default StepNine;

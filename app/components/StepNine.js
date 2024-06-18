'use client';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/stepeight.css";
import "../styles/stepnine.css";
import "../styles/form.css";
import Review from "./Review";

const StepNine = ({ nextStep, prevStep, handleChange }) => {
  const { t } = useTranslation();

  const [selectedCondition, setSelectedCondition] = useState(null);
  const [formData, setFormData] = useState({ selectedCondition: null });
  const [error, setError] = useState('');

  const handleCheckboxChange = (conditionId) => {
    const newSelectedCondition = selectedCondition === conditionId ? null : conditionId;
    setSelectedCondition(newSelectedCondition);
    setFormData({ selectedCondition: newSelectedCondition });
    setError(''); // Clear error message when a condition is selected
    handleChange(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedCondition === null) {
      setError(t('error.selectError'));
    } else {
      console.log("Form data:", formData);
      nextStep();
    }
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
      <form onSubmit={handleSubmit}>
        <div className="input-form">
          <div className="condition-select">
            {conditions.map((condition) => (
              <div
                className="condition-option"
                key={condition.id}
                onClick={() => {
                  document.getElementById(condition.id).click();
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
          {error && <p className="error">{error}</p>}
        </div>
        
        <div className='btn-group btn-group-stepthree'>
          <button type="button" className='back-btn back-btn-stepthree' onClick={prevStep}>
            <img src="/assets/arrow.svg" alt="arrow" /> {t('stepNine.back')}
          </button>
          <div className='forward-btns'>
            <button type="submit" className='long-btn long-btn-stepthree'>{t('stepNine.continueJourney')}</button>
            <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={handleSubmit}><img src="/assets/arrow.svg" alt=""/></button>
          </div>
        </div>
      </form>

      <Review />
    </div>
  );
};

export default StepNine;

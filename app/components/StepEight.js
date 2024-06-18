'use client';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/stepeight.css";
import "../styles/form.css";
import Review from "./Review";

const StepEight = ({ nextStep, prevStep, handleChange, values }) => {
  const { t } = useTranslation();

  const [selectedConditions, setSelectedConditions] = useState([]);
  const [formData, setFormData] = useState({ selectedConditions: [] });
  const [error, setError] = useState('');

  const handleCheckboxChange = (condition) => {
    if (condition === "none") {
      setSelectedConditions(["none"]); // Select "none" only
      handleChange({ selectedConditions: ["none"] }); // Emit updated formData to parent
      nextStep();
    } else {
      let updatedConditions;
      if (selectedConditions.includes("none")) {
        updatedConditions = [condition]; // Replace "none" with the selected condition
      } else {
        updatedConditions = selectedConditions.includes(condition)
          ? selectedConditions.filter((c) => c !== condition)
          : [...selectedConditions, condition];
      }
      setSelectedConditions(updatedConditions);
      handleChange( { selectedConditions: updatedConditions }); // Emit updated formData to parent
    }
    setError(''); // Clear error message when a condition is selected
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedConditions.length === 0) {
      setError(t('error.selectError'));
    } else {
      // Save form values or perform any necessary actions
      console.log("Form data:", formData);
      nextStep();
    }
  };

  const handleNextStep = (event) => {
    event.preventDefault();
    handleSubmit(event);
  };

  const conditions = [
    { id: "none", labelKey: "none" },
    { id: "highbp", labelKey: "highBloodPressure" },
    { id: "pre-diabetes", labelKey: "preDiabetes" },
    { id: "type-2-diabetes", labelKey: "type2Diabetes" },
    { id: "hypothyroidism", labelKey: "hypothyroidism" },
    { id: "crohn-disease", labelKey: "crohnsDisease" },
    { id: "elevated-triglycerides", labelKey: "elevatedTriglycerides" },
    { id: "lupus", labelKey: "lupus" },
    { id: "antibiotics", labelKey: "antibiotics" },
    { id: "bariatric-surgery", labelKey: "bariatricSurgery" },
    { id: "hypoglycemia", labelKey: "hypoglycemia" },
    { id: "type-1-diabetes", labelKey: "type1Diabetes" },
    { id: "cancer-treatment", labelKey: "cancerTreatment" },
    { id: "thyroid-cancer", labelKey: "thyroidCancer" },
    { id: "breastfeeding", labelKey: "breastfeeding" },
    { id: "pregnant", labelKey: "pregnant" },
    { id: "pancreatitis", labelKey: "pancreatitis" }
  ];

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>{t('stepEight.title')}</h2>
        <p>{t('stepEight.description')}</p>
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
                  border: selectedConditions.includes(condition.id)
                    ? "1px solid black"
                    : "",
                }}
              >
                <input
                  type="checkbox"
                  id={condition.id}
                  name="condition"
                  checked={selectedConditions.includes(condition.id)}
                  onChange={() => handleCheckboxChange(condition.id)}
                />
                <label
                  onClick={() => {
                    document.getElementById(condition.id).click();
                  }} 
                >
                  {t(`stepEight.${condition.labelKey}`)}
                </label>
              </div>
            ))}
          </div>
          {error && <p className="error">{error}</p>}
        </div>

        <div className="btn-group btn-group-stepthree">
          <button type="button" className="back-btn back-btn-stepthree" onClick={prevStep}>
            <img src="/assets/arrow.svg" alt="arrow" /> {t('stepEight.back')}
          </button>
          <div className="forward-btns">
            <button type="submit" className="long-btn long-btn-stepthree">
              {t('stepEight.continueJourney')}
            </button>
            <button type="button" className="arrow-btn arrow-btn-stepthree" onClick={handleNextStep}>
              <img src="/assets/arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </form>

      <Review />
    </div>
  );
};

export default StepEight;

'use client';
import { useState } from "react";
import "../styles/stepeight.css";
import "../styles/form.css";
import Review from "./Review";

const StepEight = ({ nextStep, prevStep, handleChange, values }) => {
  const [selectedConditions, setSelectedConditions] = useState([]);

  const handleCheckboxChange = (condition) => {
    setSelectedConditions((prevSelectedConditions) =>
      prevSelectedConditions.includes(condition)
        ? prevSelectedConditions.filter((c) => c !== condition)
        : [...prevSelectedConditions, condition]
    );
  };

  const conditions = [
    { id: "none", label: "None" },
    { id: "highbp", label: "High Blood Pressure" },
    { id: "pre-diabetes", label: "Pre-Diabetes" },
    { id: "type-2-diabetes", label: "Type 2 Diabetes" },
    { id: "hypothyroidism", label: "Hypothyroidism" },
    { id: "crohn-disease", label: "Crohn's Disease" },
    { id: "elevated-triglycerides", label: "Elevated Triglycerides" },
    { id: "lupus", label: "Lupus" },
    { id: "antibiotics", label: "Antibiotics" },
    { id: "bariatric-surgery", label: "Bariatric Surgery" },
    { id: "hypoglycemia", label: "Hypoglycemia" },
    { id: "type-1-diabetes", label: "Type 1 Diabetes" },
    { id: "cancer-treatment", label: "Cancer Treatment" },
    { id: "thyroid-cancer", label: "Thyroid Cancer" },
    { id: "breastfeeding", label: "Breastfeeding" },
    { id: "pregnant", label: "Pregnant" },
    { id: "pancreatitis", label: "Pancreatitis within the past 6 months, or a history of pancreatitis caused by taking a GLP-1" }
  ];

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>Health Conditions</h2>
        <p>Please indicate if you are currently diagnosed with any of the following conditions. (select multiple)</p>
      </div>
      <form className="input-form">
        <div className="condition-select">
          {conditions.map((condition) => (
            <div
              className="condition-option"
              key={condition.id}
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
          <button className='long-btn long-btn-stepthree' onClick={nextStep}>Continue Your Journey</button>
          <button className='arrow-btn arrow-btn-stepthree' onClick={nextStep}><img src="/assets/arrow.svg" alt=""/></button>
        </div>
      </div>

      <Review />
    </div>
  );
};

export default StepEight;

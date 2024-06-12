'use client';
import { useState } from "react";
import "../styles/stepeight.css";
import "../styles/form.css";
import Review from "./Review";

const StepNine = ({ nextStep, prevStep, handleChange, values }) => {
  const [selectedConditions, setSelectedConditions] = useState([]);

  const handleCheckboxChange = (condition) => {
    setSelectedConditions((prevSelectedConditions) =>
      prevSelectedConditions.includes(condition)
        ? prevSelectedConditions.filter((c) => c !== condition)
        : [...prevSelectedConditions, condition]
    );
  };

  const conditions = [
    { id: "notify", label: "Yes, I agree to receive SMS notifications." },
    { id: "do-not-notify", label: "No, I prefer not to receive SMS notifications." },
  ];

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>Stay Informed with SMS Notifications</h2>
        <p>Would you like to receive SMS notifications about your program?</p>
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
      
      <div className="btn-group btn-group-stepthree">
        <button className="back-btn back-btn-stepthree" onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> Back
        </button>
        <button className="long-btn long-btn-stepthree" onClick={nextStep}> Continue Your Journey </button>
        <button className="arrow-btn arrow-btn-stepthree" onClick={nextStep}>
          <img src="/assets/arrow.svg" alt="" />
        </button>
      </div>

      <Review />
    </div>
  );
};

export default StepNine;

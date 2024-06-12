'use client';
import { useState } from "react";
import "../styles/stepsix.css";
import "../styles/stepseven.css";
import "../styles/form.css";
import Review from "./Review";

const StepSeven = ({ nextStep, prevStep, handleChange, values }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">List any medications you are currently taking.</label>
            <input className="input-border" type="text" placeholder="e.g., Metformin" />
          </div>
        </form>
      ),
    },
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">List any allergies to medications.</label>
            <input className="input-border" type="text" placeholder="e.g., Penicillin" />
          </div>
        </form>
      ),
    },
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">Do you have any chronic medical conditions? If so, please specify.</label>
            <input className="input-border" type="text" placeholder="e.g., Hypertension, Diabetes" />
          </div>
        </form>
      ),
    },
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">Are you currently taking any prescription or over-the-counter diet aids? If so, please specify</label>
            <input className="input-border" type="text" placeholder=" e.g., Garcinia Cambogia, Orlistat" />
          </div>
        </form>
      ),
    },
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">Please list any antibiotics you are currently taking.</label>
            <input className="input-border" type="text" placeholder="e.g., Amoxicillin" />
          </div>
        </form>
      ),
    },
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">Have you taken Semaglutide, Tirzepatide, or any other weight loss medications before? If so, please list them.</label>
            <input className="input-border" type="text" placeholder="e.g., Semaglutide, Tirzepatide" />
          </div>
        </form>
      ),
    },
  ];

  const nextInfo = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      nextStep();
    }
  };

  const prevInfo = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      prevStep();
    }
  };

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>Medical Information</h2>
        <p>Please provide the following details about your medical history and current health status.</p>
      </div>
      {questions[currentQuestion].form}

      <div className="btn-group btn-group-stepthree">
        <button className="back-btn back-btn-stepthree" onClick={prevInfo}>
          <img src="/assets/arrow.svg" alt="arrow" /> Back
        </button>
        <button className="long-btn long-btn-stepthree" onClick={nextInfo}> Continue Your Journey </button>
        <button className="arrow-btn arrow-btn-stepthree" onClick={nextInfo}>
          <img src="/assets/arrow.svg" alt="" />
        </button>
      </div>

      <Review />
    </div>
  );
};

export default StepSeven;

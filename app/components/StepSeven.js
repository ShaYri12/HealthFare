'use client';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/stepsix.css";
import "../styles/stepseven.css"; // Ensure this file exists
import "../styles/form.css";
import Review from "./Review";

const StepSeven = ({ nextStep, prevStep, handleChange, values }) => {
  const { t } = useTranslation(); // 'stepSeven' matches the namespace in i18n.js
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question1.label')}</label>
            <input className="input-border" type="text" placeholder={t('stepSeven.question1.placeholder')} />
          </div>
        </form>
      ),
    },
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question2.label')}</label>
            <input className="input-border" type="text" placeholder={t('stepSeven.question2.placeholder')} />
          </div>
        </form>
      ),
    },
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question3.label')}</label>
            <input className="input-border" type="text" placeholder={t('stepSeven.question3.placeholder')} />
          </div>
        </form>
      ),
    },
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question4.label')}</label>
            <input className="input-border" type="text" placeholder={t('stepSeven.question4.placeholder')} />
          </div>
        </form>
      ),
    },
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question5.label')}</label>
            <input className="input-border" type="text" placeholder={t('stepSeven.question5.placeholder')} />
          </div>
        </form>
      ),
    },
    {
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question6.label')}</label>
            <input className="input-border" type="text" placeholder={t('stepSeven.question6.placeholder')} />
          </div>
        </form>
      ),
    },
  ];

  const nextInfo = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      window.scrollTo(0, 0);
    } else {
      nextStep();
    }
  };

  const prevInfo = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      window.scrollTo(0, 0);
    } else {
      prevStep();
    }
  };

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>{t('stepSeven.medicalInfo.title')}</h2>
        <p>{t('stepSeven.medicalInfo.subTitle')}</p>
      </div>
      {questions[currentQuestion].form}

      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={prevInfo}>
          <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSeven.back')}
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={nextInfo}>{t('stepSeven.continueJourney')}</button>
          <button className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
          </div>
        </div>
  
        <Review />
      </div>
    );
  };
  
  export default StepSeven;
  

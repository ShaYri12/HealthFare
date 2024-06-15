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
  const [formData, setFormData] = useState({
    question1: values.question1 || '',
    question2: values.question2 || '',
    question3: values.question3 || '',
    question4: values.question4 || '',
    question5: values.question5 || '',
    question6: values.question6 || '',
  });

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
    handleChange(field)(e);
  };

  const validateForm = () => {
    const currentForm = questions[currentQuestion].form.props.children;
    const inputs = Array.from(currentForm).filter(child => child.props && child.props.placeholder !== undefined);

    for (let input of inputs) {
      if (!input.props.placeholder) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        window.scrollTo(0, 0);
      } else {
        nextStep();
      }
    } else {
      alert(t('error.fillError'));
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

  const nextInfo = () => {
    if (validateForm()) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        window.scrollTo(0, 0);
      } else {
        nextStep();
      }
    } else {
      alert(t('error.fillError'));
    }
  };

  const questions = [
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question1.label')}</label>
            <input className="input-border"  type="text" pattern="[A-Za-z]+" title={t('error.textError')} value={formData.question1} onChange={handleInputChange('question1')} placeholder={t('stepSeven.question1.placeholder')} required />
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSeven.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSeven.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question2.label')}</label>
            <input className="input-border" type="text" pattern="[A-Za-z]+" title={t('error.textError')} value={formData.question2} onChange={handleInputChange('question2')} placeholder={t('stepSeven.question2.placeholder')} required/>
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSeven.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSeven.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question3.label')}</label>
            <input className="input-border" type="text" pattern="[A-Za-z]+" title={t('error.textError')} value={formData.question3} onChange={handleInputChange('question3')} placeholder={t('stepSeven.question3.placeholder')} required/>
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSeven.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSeven.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question4.label')}</label>
            <input className="input-border" type="text" pattern="[A-Za-z]+" title={t('error.textError')} value={formData.question4} onChange={handleInputChange('question4')} placeholder={t('stepSeven.question4.placeholder')} required/>
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSeven.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSeven.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question5.label')}</label>
            <input className="input-border" type="text" pattern="[A-Za-z]+" title={t('error.textError')} value={formData.question5} onChange={handleInputChange('question5')} placeholder={t('stepSeven.question5.placeholder')} required/>
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSeven.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSeven.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t('stepSeven.question6.label')}</label>
            <input className="input-border" type="text" pattern="[A-Za-z]+" title={t('error.textError')} value={formData.question6} onChange={handleInputChange('question6')} placeholder={t('stepSeven.question6.placeholder')} required/>
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSeven.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSeven.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>{t('stepSeven.medicalInfo.title')}</h2>
        <p>{t('stepSeven.medicalInfo.subTitle')}</p>
      </div>
      {questions[currentQuestion].form}

      <Review />
    </div>
  );
};

export default StepSeven;

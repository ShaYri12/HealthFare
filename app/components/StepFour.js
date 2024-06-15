'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/stepfour.css';
import '../styles/form.css';
import Testimonial from './Testimonial';

const StepFour = ({ nextStep, prevStep, handleChange, values, handleNotEligible }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    pounds: values.pounds || '',
    feet: values.feet || '',
    inches: values.inches || '',
  });

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { pounds, feet, inches } = formData;

    if (pounds && feet && inches) {
      const heightInInches = parseInt(feet) * 12 + parseInt(inches);
      const bmi = (parseInt(pounds) / (heightInInches * heightInInches)) * 703;

      // Store the calculated BMI directly in Home component's state
      handleChange('stepFour')({ bmi: bmi.toFixed(2) });

      console.log('Form data:', formData);
      console.log('Calculated BMI:', bmi.toFixed(2));

      if (bmi >= 27) {
        nextStep();
      } else {
        handleNotEligible();
      }
    } else {
      alert(t('error.fillError'));
    }
  };

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>{t('stepFour.calculateBMI')}</h2>
        <p>{t('stepFour.calculateBMIDescription')}</p>
      </div>
      <form onSubmit={handleSubmit} className='input-form'>
        <div className="pounds">
          <p>{t('stepFour.pounds')}</p>
          <input
            type="number"
            placeholder={t('stepFour.poundsPlaceholder')}
            value={formData.pounds}
            onChange={handleInputChange('pounds')}
            required
          />
        </div>
        <div className='feet-inches'>
          <div className="feet-option">
            <p>{t('stepFour.feet')}</p>
            <select onChange={handleInputChange("feet")} value={formData.feet}>
              <option value="">{t('stepFour.feetPlaceholder')}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
          <div className="inches-option">
            <p>{t('stepFour.inches')}</p>
            <select onChange={handleInputChange("inches")} value={formData.inches}>
              <option value="">{t('stepFour.inchesPlaceholder')}</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
          </div>
        </div>
        <div className='btn-group btn-group-stepthree'>
          <button type="button" className='back-btn back-btn-stepthree' onClick={prevStep}>
            <img src="/assets/arrow.svg" alt="arrow" /> {t('stepFour.back')}
          </button>
          <div className='forward-btns'>
            <button type='submit' className='long-btn long-btn-stepthree'>{t('stepFour.continueJourney')}</button>
            <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={handleSubmit}><img src="/assets/arrow.svg" alt=""/></button>
          </div>
        </div>
      </form>
      <Testimonial/>
    </div>
  );
};

export default StepFour;

'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/stepone.css';
import '../styles/form.css';
import Review from './Review';

const StepOne = ({ nextStep, handleChange, values }) => {
  const { t, i18n } = useTranslation();
  const [activebtn, setActivebtn] = useState('en');
  const [formData, setFormData] = useState({
    location: values.location || '',
    agreement: values.agreement || false,
  });

  const handleLanguage = (language) => {
    setActivebtn(language);
    i18n.changeLanguage(language);
  };

  const handleInputChange = (field) => (e) => {
    const value = field === 'agreement' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
    handleChange(field)(e); // Call the provided handleChange function to update values
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { location, agreement } = formData;

    if (location && agreement) {
      console.log('Form data:', formData);
      nextStep();
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div className="formContainer step-form">
      <div className='title-info'>
        <h2>{t('stepOne.title')}</h2>
        <p>{t('stepOne.description')}</p>
      </div>
      <div className='language'>
        <p>{t('stepOne.languagePrompt')}</p>
        <div className='language-btns'>
          <button className={`${activebtn === 'en' ? 'active' : ''}`} onClick={() => handleLanguage('en')}>
            <img src="/assets/eng.png" alt="eng" />English
          </button>
          <button className={`${activebtn === 'es' ? 'active' : ''}`} onClick={() => handleLanguage('es')}>
            <img src="/assets/esp.png" alt="esp" />Español
          </button>
          <button className={`${activebtn === 'pt' ? 'active' : ''}`} onClick={() => handleLanguage('pt')}>
            <img src="/assets/por.png" alt="por" />Português
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='input-form'>
        <div className='location'>
          <p>{t('stepOne.chooseLocation')}</p>
          <select onChange={handleInputChange('location')} value={formData.location}>
            <option value="">Select...</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Idaho">Idaho</option>
          </select>
        </div>
        <div className="agreement">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            checked={formData.agreement}
            onChange={handleInputChange('agreement')}
            required
          />
          <label htmlFor="agreement">{t('stepOne.acknowledgement')}</label>
        </div>
        <div className='btn-group'>
          <button type='submit' className='long-btn long-btn-stepthree'>{t('stepOne.startJourney')}</button>
          <button type='submit' className='arrow-btn arrow-btn-stepthree' onClick={handleSubmit}><img src="/assets/arrow.svg" alt="arrow" /></button>
        </div>
      </form>
      <Review />
    </div>
  );
};

export default StepOne;

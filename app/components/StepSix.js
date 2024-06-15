'use client';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/stepsix.css";
import "../styles/form.css";
import Review from "./Review";

const StepSix = ({ nextStep, prevStep, handleChange, values }) => {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({
    firstName: values.firstName || '',
    lastName: values.lastName || '',
    streetAddress: values.streetAddress || '',
    city: values.city || '',
    zipCode: values.zipCode || '',
    state: values.state || '',
    month: values.month || '',
    day: values.day || '',
    year: values.year || '',
    gender: values.gender || '',
    phone: values.phone || '',
    email: values.email || ''
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
    const inputs = Array.from(currentForm).filter(child => child.props && child.props.value !== undefined);

    for (let input of inputs) {
      if (!input.props.value) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextInfo();
    } else {
      alert(t('error.fillError'));
    }
  };

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


  const questions = [
    {
      title: t('stepSix.question1.title'),
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-group">
            <div className="input-label">
              <label>{t('stepSix.question1.firstName')}</label>
              <input type="text" pattern="[A-Za-z]+" title={t('error.textError')}   value={formData.firstName} onChange={handleInputChange('firstName')} placeholder={t('stepSix.question1.firstNamePlaceholder')} required/>
            </div>
            <div className="input-label">
              <label>{t('stepSix.question1.lastName')}</label>
              <input type="text" pattern="[A-Za-z]+" title={t('error.textError')}  value={formData.lastName} onChange={handleInputChange('lastName')} placeholder={t('stepSix.question1.lastNamePlaceholder')} required/>
            </div>
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: t('stepSix.question2.title'),
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label>{t('stepSix.question2.streetAddress')}</label>
            <input type="text" value={formData.streetAddress} onChange={handleInputChange('streetAddress')} placeholder={t('stepSix.question2.streetAddressPlaceholder')} required/>
          </div>
          <div className="input-group">
            <div className="input-label">
              <label>{t('stepSix.question2.city')}</label>
              <input type="text" pattern="[A-Za-z]+" title={t('error.textError')} value={formData.city} onChange={handleInputChange('city')} placeholder={t('stepSix.question2.cityPlaceholder')} required/>
            </div>
            <div className="input-label">
              <label>{t('stepSix.question2.zipCode')}</label>
              <input type="number" value={formData.zipCode} onChange={handleInputChange('zipCode')} placeholder={t('stepSix.question2.zipCodePlaceholder')} required/>
            </div>
          </div>
          <div className="input-label location">
            <label>{t('stepSix.question2.state')}</label>
            <select onChange={handleInputChange('state')} value={formData.state} required>
              <option value="">{t('stepSix.question2.select')}</option>
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
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: t('stepSix.question3.title'),
      description:
        "To participate in this program, you must be at least 18 years old. If you are under 18, we regret that you are not eligible to proceed with this program. Thank you for your understanding.",
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-group">
            <div className="input-label">
              <label>{t('stepSix.question3.month')}</label>
              <input type="number" value={formData.month} onChange={handleInputChange('month')} placeholder="MM" max="12" required/>
            </div>
            <div className="input-label">
              <label>{t('stepSix.question3.day')}</label>
              <input type="number" value={formData.day} onChange={handleInputChange('day')} placeholder="DD" max="31" required/>
            </div>
            <div className="input-label">
              <label>{t('stepSix.question3.year')}</label>
              <input type="number" value={formData.year} onChange={handleInputChange('year')} placeholder="YYYY" max="2024" required/>
            </div>
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: t('stepSix.question4.title'),
      form: (
        <form className="input-form">
          <div className="gender-select">
            <div className="gender-option" onClick={() => {
              document.getElementById('male').click();
              setFormData({ ...formData, gender: 'male' });
              nextInfo();
            }}>
              <input type="radio" id="male" name="gender" required/>
              <label htmlFor="male"> {t('stepSix.question4.male')} </label>
            </div>
            <div className="gender-option" onClick={() => {
              document.getElementById('female').click();
              setFormData({ ...formData, gender: 'female' });
              nextInfo();
            }}>
              <input type="radio" id="female" name="gender" required/>
              <label htmlFor="female"> {t('stepSix.question4.female')} </label>
            </div>
            <div className="gender-option" onClick={() => {
              document.getElementById('prefer-not-to-say').click();
              setFormData({ ...formData, gender: 'prefer-not-to-say' });
              nextInfo();
            }}>
              <input type="radio" id="prefer-not-to-say" name="gender" required/>
              <label htmlFor="prefer-not-to-say"> {t('stepSix.question4.preferNotToSay')} </label>
            </div>
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: t('stepSix.question5.title'),
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
          <input 
            type="text" 
            value={formData.phone} 
            onChange={handleInputChange('phone')} 
            placeholder={t('stepSix.question5.phonePlaceholder')} 
            maxLength={10} 
            required 
          />
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: t('stepSix.question6.title'),
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <input type="email" value={formData.email} onChange={handleInputChange('email')} placeholder={t('stepSix.question6.emailPlaceholder')} required/>
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
              <button type="button" className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
            </div>
          </div>
        </form>
      ),
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>{questions[currentQuestion].title}</h2>
        {questions[currentQuestion].description && (
          <p>{questions[currentQuestion].description}</p>
        )}
      </div>
      {questions[currentQuestion].form}

      <Review />
    </div>
  );
};

export default StepSix;


'use client';
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/stepsix.css";
import "../styles/form.css";
import Review from "./Review";

const StepSix = ({ nextStep, prevStep, handleChange, formValues, updateNotEligibleData, handleNotEligible }) => {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({
    firstName: formValues.stepSix.firstName || '',
    lastName: formValues.stepSix.lastName || '',
    streetAddress: formValues.stepSix.streetAddress || '',
    city: formValues.stepSix.city || '',
    zipCode: formValues.stepSix.zipCode || '',
    state: formValues.stepOne.location || '',
    month: formValues.stepSix.month || '',
    day: formValues.stepSix.day || '',
    year: formValues.stepSix.year || '',
    gender: formValues.stepSix.gender || '',
    phone: formValues.stepSix.phone || '',
    email: formValues.stepSix.email || ''
  });
  const [errors, setErrors] = useState({});
  const [age, setAge] = useState(null);

  const handleInputChange = (field) => (e) => {
    let value = e.target.value;

    // Format phone number as (000) 000-0000
    if (field === 'phone') {
      // Remove non-digit characters from input
      value = value.replace(/\D/g, '');

      // Apply phone number formatting
      let formattedValue = '';
      if (value.length >= 1) {
        formattedValue = `(${value.slice(0, 3)}`;
      }
      if (value.length >= 4) {
        formattedValue += `) ${value.slice(3, 6)}`;
      }
      if (value.length >= 7) {
        formattedValue += `-${value.slice(6, 10)}`;
      }
      

      // Update state with formatted value
      setFormData({
        ...formData,
        [field]: formattedValue,
      });
      handleChange({
        [field]: formattedValue,
      });
    } else {
      // For other fields, update state normally
      setFormData({
        ...formData,
        [field]: value,
      });
      handleChange({
        [field]: value,
      });
    }
    setErrors({ ...errors, [field]: '' }); // Clear error when input changes
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Regex patterns
    const alphabeticPattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const alphanumericPattern = /^[A-Za-z0-9\s.,'"`#-]+$/u;

    const currentYear = new Date().getFullYear();

    // Validate fields for the current question
    if (currentQuestion === 0) {
      if (!formData.firstName) {
        newErrors.firstName = t('error.firstNameError');
        isValid = false;
      } else if (!alphabeticPattern.test(formData.firstName)) {
        newErrors.firstName = t('error.textError');
        isValid = false;
      }

      if (!formData.lastName) {
        newErrors.lastName = t('error.lastNameError');
        isValid = false;
      } else if (!alphabeticPattern.test(formData.lastName)) {
        newErrors.lastName = t('error.lastNameError');
        isValid = false;
      }
    } else if (currentQuestion === 1) {
      if (!formData.streetAddress) {
        newErrors.streetAddress = t('error.streetAddressError');
        isValid = false;
      } else if (!alphanumericPattern.test(formData.streetAddress)) {
        newErrors.streetAddress = t('error.textError'); // Custom error message for address format
        isValid = false;
      }
      if (!formData.city) {
        newErrors.city = t('error.cityError');
        isValid = false;
      } else if (!alphabeticPattern.test(formData.city)) {
        newErrors.city = t('error.textError');
        isValid = false;
      }
      if (!formData.zipCode) {
        newErrors.zipCode = t('error.zipCodeError');
        isValid = false;
      }
      if (!formData.state) {
        newErrors.state = t('error.stateError');
        isValid = false;
      } else if (formData.state !== formValues.stepOne.location){
        newErrors.state = t('error.stateMismatchError');
        isValid = false;
      }
    } else if (currentQuestion === 2) {
      if (!formData.month) {
        newErrors.month = t('error.fillError');
        isValid = false;
      } else if (formData.month < 1 || formData.month > 12) {
        newErrors.month = t('error.monthError');
        isValid = false;
      }
      if (!formData.day) {
        newErrors.day = t('error.fillError');
        isValid = false;
      } else if (formData.day < 1 || formData.day > 31) {
        newErrors.day = t('error.dateError');
        isValid = false;
      }
      if (!formData.year) {
        newErrors.year = t('error.fillError');
        isValid = false;
      } else if (formData.year < 1900 || formData.year >= currentYear) {
        newErrors.year = t('error.yearError');
        isValid = false;
      }
    } else if (currentQuestion === 3) {
      if (!formData.gender) {
        newErrors.gender = t('error.selectError');
        isValid = false;
      }
    } else if (currentQuestion === 4) {
      if (!formData.phone) {
        newErrors.phone = t('error.fillError');
        isValid = false;
      } else if (formData.phone.replace(/\D/g, '').length !== 10) {
        newErrors.phone = t('error.phoneDigitsError');
        isValid = false;
      }
    } else if (currentQuestion === 5) {
      if (!formData.email) {
        newErrors.email = t('error.emailRequiredError');
        isValid = false;
      } else if (!emailPattern.test(formData.email)) {
        newErrors.email = t('error.emailInvalidError');
        isValid = false;
      }
    }

    if (age !== null && age < 18) {
      const newData = {
        title: t('error.disqualifyTitle'),
        desc: t('error.ageError')
      };
      setAge(null);
      setFormData({
        ...formData,
        month: '',
        day: '',
        year: '',
      });
      handleChange({
        month: '',
        day: '',
        year: '',
      });
      updateNotEligibleData(newData);
      handleNotEligible();
    }

    setErrors(newErrors);
    return isValid;
  };


  useEffect(() => {
    const calculateAge = () => {
      if (formData.month && formData.day && formData.year) {
        const birthDate = new Date(formData.year, formData.month - 1, formData.day);
        const today = new Date();
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          calculatedAge--;
        }
        setAge(calculatedAge);
      }
    };

    calculateAge();
  }, [formData.month, formData.day, formData.year]);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      nextInfo();
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

  const stateOptions = [
    "Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", 
    "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
    "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", 
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
    "Wisconsin", "Wyoming"
  ];

  const questions = [
    {
      title: t('stepSix.question1.title'),
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-group">
            <div className="input-label">
              <label>{t('stepSix.question1.firstName')}</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange('firstName')} placeholder={t('stepSix.question1.firstNamePlaceholder')} />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="input-label">
              <label>{t('stepSix.question1.lastName')}</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange('lastName')} placeholder={t('stepSix.question1.lastNamePlaceholder')} />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
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
            <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleInputChange('streetAddress')} placeholder={t('stepSix.question2.streetAddressPlaceholder')} />
            {errors.streetAddress && <span className="error">{errors.streetAddress}</span>}
          </div>
          <div className="input-group">
            <div className="input-label">
              <label>{t('stepSix.question2.city')}</label>
              <input type="text" name="city" value={formData.city} onChange={handleInputChange('city')} placeholder={t('stepSix.question2.cityPlaceholder')} />
              {errors.city && <span className="error">{errors.city}</span>}
            </div>
            <div className="input-label">
              <label>{t('stepSix.question2.zipCode')}</label>
              <input type="number" name="zipCode" value={formData.zipCode} onChange={handleInputChange('zipCode')} placeholder={t('stepSix.question2.zipCodePlaceholder')} />
              {errors.zipCode && <span className="error">{errors.zipCode}</span>}
            </div>
          </div>
          <div className="input-label location">
            <label>{t('stepSix.question2.state')}</label>
            <select name="state" onChange={handleInputChange('state')} value={formData.state}>
            <option value="">{t('stepSix.question2.select')}</option>
            {stateOptions.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
            {errors.state && <span className="error">{errors.state}</span>}
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: t('stepSix.question3.title'),
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-group">
            <div className="input-label">
              <input type="number" name="month" value={formData.month} onChange={handleInputChange('month')} placeholder="MM" />
              {errors.month && <span className="error">{errors.month}</span>}
            </div>
            <div className="input-label">
              <input type="number" name="day" value={formData.day} onChange={handleInputChange('day')} placeholder="DD" />
              {errors.day && <span className="error">{errors.day}</span>}
            </div>
            <div className="input-label">
              <input type="number" name="year" value={formData.year} onChange={handleInputChange('year')} placeholder="YYYY"/>
              {errors.year && <span className="error">{errors.year}</span>}
            </div>
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
            </div>
          </div>
        </form>
      ),
    },  
    {
      title: t('stepSix.question4.title'),
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="gender-select">
            <div className="gender-option" onClick={() => {
              document.getElementById('male').click();
              setFormData({ ...formData, gender: 'male' });
              nextInfo();
            }}>
              <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} />
              <label htmlFor="male"> {t('stepSix.question4.male')} </label>
            </div>
            <div className="gender-option" onClick={() => {
              document.getElementById('female').click();
              setFormData({ ...formData, gender: 'female' });
              nextInfo();
            }}>
              <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} />
              <label htmlFor="female"> {t('stepSix.question4.female')} </label>
            </div>
            <div className="gender-option" onClick={() => {
              document.getElementById('prefer-not-to-say').click();
              setFormData({ ...formData, gender: 'prefer-not-to-say' });
              nextInfo();
            }}>
              <input type="radio" id="prefer-not-to-say" name="gender" value="prefer-not-to-say" checked={formData.gender === 'prefer-not-to-say'} />
              <label htmlFor="prefer-not-to-say"> {t('stepSix.question4.preferNotToSay')} </label>
            </div>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
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
              name="phone"
              value={formData.phone} 
              onChange={handleInputChange('phone')} 
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
                handleInputChange('phone')(e);
              }} 
              placeholder={t('stepSix.question5.phonePlaceholder')} 
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
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
            <input 
              type="text" 
              name="email"
              value={formData.email} 
              onChange={handleInputChange('email')} 
              placeholder={t('stepSix.question6.emailPlaceholder')} 
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className='btn-group btn-group-stepthree'>
            <button type="button" className='back-btn back-btn-stepthree' onClick={prevInfo}>
              <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
            </button>
            <div className='forward-btns'>
              <button type="submit" className='long-btn long-btn-stepthree'>{t('stepSix.continueJourney')}</button>
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

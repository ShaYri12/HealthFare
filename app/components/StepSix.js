import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/stepsix.css";
import "../styles/form.css";
import Review from "./Review";
import Switch from 'react-switch';

const StepSix = ({
  nextStep,
  prevStep,
  handleChange,
  formValues,
  updateNotEligibleData,
  handleNotEligible,
  currentQuestion,
  setCurrentQuestion,
}) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: formValues.stepSix?.firstName || '',
    lastName: formValues.stepSix?.lastName || '',
    streetAddress1: formValues.stepSix?.streetAddress1 || '',
    streetAddress2: formValues.stepSix?.streetAddress2 || '',
    city: formValues.stepSix?.city || '',
    zipCode: formValues.stepSix?.zipCode || '',
    state: formValues.stepOne?.location || '',
    month: formValues.stepSix?.month || '',
    day: formValues.stepSix?.day || '',
    year: formValues.stepSix?.year || '',
    gender: formValues.stepSix?.gender || '',
    phone: formValues.stepSix?.phone || '',
    email: formValues.stepSix?.email || '',
    billingStreetAddress1: formValues.stepSix?.billingStreetAddress1 || '',
    billingStreetAddress2: formValues.stepSix?.billingStreetAddress2 || '',
    billingCity: formValues.stepSix?.billingCity || '',
    billingZipCode: formValues.stepSix?.billingZipCode || '',
    billingState: formValues.stepSix?.billingState || '',
  });

  const [isSameAddress, setIsSameAddress] = useState(true);

  const handleToggleChange = (checked) => {
    setIsSameAddress(checked);
    if (!checked) {
      setFormData({
        ...formData,
        billingStreetAddress1: "",
        billingStreetAddress2: "",
        billingCity: "",
        billingZipCode: "",
        billingState: "",
      });
    }
  };
  const [errors, setErrors] = useState({});
  const [age, setAge] = useState(null);

  const handleInputChange = (field) => (e) => {
    let value = e.target.value;

    if (field === 'phone') {
      value = value.replace(/\D/g, '');
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

      setFormData({
        ...formData,
        [field]: formattedValue,
      });
      handleChange({
        ...formData,
        [field]: formattedValue,
      });
    } else if (field === 'month' || field === 'day' || field === 'year' || field === 'zipCode' || field === 'billingZipCode') {
      const numericValue = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [field]: numericValue,
      });
      handleChange({
          ...formData,
          [field]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
      handleChange({
          ...formData,
          [field]: value,
      });
    }
    setErrors({ ...errors, [field]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    const alphabeticPattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const alphanumericPattern = /^[A-Za-z0-9\s.,'"`#-]+$/u;
    const currentYear = new Date().getFullYear();

    if (currentQuestion === 0) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = t('error.firstNameError');
        isValid = false;
      } else if (!alphabeticPattern.test(formData.firstName)) {
        newErrors.firstName = t('error.textError');
        isValid = false;
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName = t('error.lastNameError');
        isValid = false;
      } else if (!alphabeticPattern.test(formData.lastName)) {
        newErrors.lastName = t('error.lastNameError');
        isValid = false;
      }

      if (!formData.phone.trim()) {
        newErrors.phone = t('error.phoneFillError');
        isValid = false;
      } else if (formData.phone.replace(/\D/g, '').length !== 10) {
        newErrors.phone = t('error.phoneDigitsError');
        isValid = false;
      }

      if (!formData.email.trim()) {
        newErrors.email = t('error.emailRequiredError');
        isValid = false;
      } else if (!emailPattern.test(formData.email)) {
        newErrors.email = t('error.emailInvalidError');
        isValid = false;
      }

      if (!formData.month.trim()) {
        newErrors.month = t('error.monthFillError');
        isValid = false;
      } else if (formData.month < 1 || formData.month > 12) {
        newErrors.month = t('error.monthError');
        isValid = false;
      }
      if (!formData.day.trim()) {
        newErrors.day = t('error.dayFillError');
        isValid = false;
      } else if (formData.day < 1 || formData.day > 31) {
        newErrors.day = t('error.dateError');
        isValid = false;
      }
      if (!formData.year.trim()) {
        newErrors.year = t('error.yearFillError');
        isValid = false;
      } else if (formData.year < 1900 || formData.year >= currentYear) {
        newErrors.year = t('error.yearError');
        isValid = false;
      }

      if (
        formData.year <= currentYear &&
        formData.year > 1900 &&
        formData.month <= 12 &&
        formData.month >= 1 &&
        formData.day <= 31 &&
        formData.day >= 1
      ) {
        if (age !== null && age < 18) {
          const newData = {
            title: t('error.disqualifyTitle'),
            desc: t('error.ageError'),
          };
          updateNotEligibleData(newData);
          handleNotEligible();
          isValid = false;
        }
      }
    } else if (currentQuestion === 1) {
      if (!formData.streetAddress1.trim()) {
        newErrors.streetAddress1 = t('error.streetAddressError');
        isValid = false;
      } else if (!alphanumericPattern.test(formData.streetAddress1)) {
        newErrors.streetAddress1 = t('error.textError');
        isValid = false;
      }
      if (formData.streetAddress2.trim() && !alphanumericPattern.test(formData.streetAddress2)) {
        newErrors.streetAddress2 = t('error.textError');
        isValid = false;
      }
      if (!formData.city.trim()) {
        newErrors.city = t('error.cityError');
        isValid = false;
      } else if (!alphabeticPattern.test(formData.city)) {
        newErrors.city = t('error.textError');
        isValid = false;
      }
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = t('error.zipCodeError');
        isValid = false;
      }
      if (!formData.state.trim()) {
        newErrors.state = t('error.stateError');
        isValid = false;
      } else if (formData.state !== formValues.stepOne.location) {
        newErrors.state = t('error.stateMismatchError');
        isValid = false;
      }
    } else if (currentQuestion === 3) {
      if (!formData.gender.trim()) {
        newErrors.gender = t('error.selectError');
        isValid = false;
      }
    } else if (currentQuestion === 2) {
      // Validation for billing address fields
      if (!formData.billingStreetAddress1.trim()) {
        newErrors.billingStreetAddress1 = t('error.streetAddressError');
        isValid = false;
      } else if (!alphanumericPattern.test(formData.billingStreetAddress1)) {
        isValid = true;
      }
      if (formData.billingStreetAddress2.trim() && !alphanumericPattern.test(formData.billingStreetAddress2)) {
        newErrors.billingStreetAddress2 = t('error.textError');
        isValid = false;
      }
      if (!formData.billingCity.trim()) {
        newErrors.billingCity = t('error.cityError');
        isValid = false;
      } else if (!alphabeticPattern.test(formData.billingCity)) {
        newErrors.billingCity = t('error.textError');
        isValid = false;
      }
      if (!formData.billingZipCode.trim()) {
        newErrors.billingZipCode = t('error.zipCodeError');
        isValid = false;
      }
      if (!formData.billingState.trim()) {
        newErrors.billingState = t('error.stateError');
        isValid = false;
      }

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
      nextInfo(); // Call nextInfo outside of the isSameAddress check
    }
  };
  

  const nextInfo = () => {
    if (currentQuestion < questions.length - 1) {
        if(currentQuestion === 1 && isSameAddress){
          setFormData({
            ...formData,
            billingStreetAddress1: formData.streetAddress1,
            billingStreetAddress2: formData.streetAddress2,
            billingCity: formData.city,
            billingZipCode: formData.zipCode,
            billingState: formData.state,
          });
          handleChange({
            ...formValues.stepSix,
            billingStreetAddress1: formData.streetAddress1,
            billingStreetAddress2: formData.streetAddress2,
            billingCity: formData.city,
            billingZipCode: formData.zipCode,
            billingState: formData.state,
          })
          setCurrentQuestion(currentQuestion + 2);    
        }else{
      setCurrentQuestion(currentQuestion + 1);
      }
      window.scrollTo(0, 0);
    } else {
      nextStep();
    }
  };

  const prevInfo = () => {
    if (currentQuestion > 0) {
      if(currentQuestion === 3 && isSameAddress){
        setCurrentQuestion(currentQuestion - 2);    
      }else{
        setCurrentQuestion(currentQuestion - 1);
    }
      
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
      title: t("stepSix.question1.title"),
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-group">
            <div className="input-label">
              <label>{t("stepSix.question1.firstName")}</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange("firstName")}
                placeholder={t("stepSix.question1.firstNamePlaceholder")}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="input-label">
              <label>{t("stepSix.question1.lastName")}</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange("lastName")}
                placeholder={t("stepSix.question1.lastNamePlaceholder")}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="input-label">
            <label>{t("stepSix.question1.phone")}</label>
            <input
              type="text"
              name="phone"
              inputMode="numeric"
              value={formData.phone}
              onChange={handleInputChange("phone")}
              placeholder={t("stepSix.question1.phonePlaceholder")}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="input-label">
            <label>{t("stepSix.question1.email")}</label>
            <input
              type="text"
              name="email"
              inputMode="email"
              value={formData.email}
              onChange={handleInputChange("email")}
              placeholder={t("stepSix.question1.emailPlaceholder")}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label>{t("stepSix.question1.dob")}</label>
            <div className="input-group input-dob">
              <div className="input-label">
                <input
                  type="text"
                  name="month"
                  inputMode="numeric"
                  value={formData.month}
                  onChange={handleInputChange("month")}
                  placeholder="MM"
                  maxLength="2"
                />
                {errors.month && <span className="error">{errors.month}</span>}
              </div>
              <div className="input-label">
                <input
                  type="text"
                  name="day"
                  inputMode="numeric"
                  value={formData.day}
                  onChange={handleInputChange("day")}
                  placeholder="DD"
                  maxLength="2"
                />
                {errors.day && <span className="error">{errors.day}</span>}
              </div>
              <div className="input-label">
                <input
                  type="text"
                  name="year"
                  inputMode="numeric"
                  value={formData.year}
                  onChange={handleInputChange("year")}
                  placeholder="YYYY"
                  maxLength="4"
                />
                {errors.year && <span className="error">{errors.year}</span>}
              </div>
            </div>
          </div>
          <div className="btn-group btn-group-stepthree">
            <button
              type="button"
              className="back-btn back-btn-stepthree"
              onClick={prevInfo}
            >
              <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSix.back")}
            </button>
            <div className="forward-btns">
              <button type="submit" className="long-btn long-btn-stepthree">
                {t("stepSix.continueJourney")}
              </button>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: t("stepSix.question2.title"),
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label>{t("stepSix.question2.streetAddress1")}</label>
            <input
              type="text"
              name="streetAddress1"
              value={formData.streetAddress1}
              onChange={handleInputChange("streetAddress1")}
              placeholder={t("stepSix.question2.streetAddressPlaceholder")}
            />
            {errors.streetAddress1 && (
              <span className="error">{errors.streetAddress1}</span>
            )}
          </div>
          <div className="input-label-full input-label">
            <label>{t("stepSix.question2.streetAddress2")}</label>
            <input
              type="text"
              name="streetAddress2"
              value={formData.streetAddress2}
              onChange={handleInputChange("streetAddress2")}
              placeholder={t("stepSix.question2.streetAddressPlaceholder")}
            />
            {errors.streetAddress2 && (
              <span className="error">{errors.streetAddress2}</span>
            )}
          </div>
          <div className="input-group">
            <div className="input-label">
              <label>{t("stepSix.question2.city")}</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange("city")}
                placeholder={t("stepSix.question2.cityPlaceholder")}
              />
              {errors.city && <span className="error">{errors.city}</span>}
            </div>
            <div className="input-label">
              <label>{t("stepSix.question2.zipCode")}</label>
              <input
                type="text"
                name="zipCode"
                inputMode="numeric"
                value={formData.zipCode}
                onChange={handleInputChange("zipCode")}
                placeholder={t("stepSix.question2.zipCodePlaceholder")}
              />
              {errors.zipCode && (
                <span className="error">{errors.zipCode}</span>
              )}
            </div>
          </div>
          <div className="input-label location">
            <label>{t("stepSix.question2.state")}</label>
            <select
              name="state"
              onChange={handleInputChange("state")}
              value={formData.state}
            >
              <option value="">{t("stepSix.question2.select")}</option>
              {stateOptions.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && <span className="error">{errors.state}</span>}
          </div>

          <div className="toggle-container">
          <Switch
            className="switch"
            id="switch"
            checked={isSameAddress}
            onChange={handleToggleChange}
          />
          <label className="switch-label" htmlFor="switch">
          {t("stepSix.question2.isYour")}
          </label>
          
        </div>

          <div className="btn-group btn-group-stepthree">
            <button
              type="button"
              className="back-btn back-btn-stepthree"
              onClick={prevInfo}
            >
              <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSix.back")}
            </button>
            <div className="forward-btns">
              <button type="submit" className="long-btn long-btn-stepthree">
                {t("stepSix.continueJourney")}
              </button>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: t("stepSix.question2point5.title"),
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label>{t("stepSix.question2.streetAddress1")}</label>
            <input
              type="text"
              name="billingStreetAddress1"
              value={formData.billingStreetAddress1}
              onChange={handleInputChange("billingStreetAddress1")}
              placeholder={t("stepSix.question2.streetAddressPlaceholder")}
            />
            {errors.billingStreetAddress1 && (
              <span className="error">{errors.billingStreetAddress1}</span>
            )}
          </div>
          <div className="input-label-full input-label">
            <label>{t("stepSix.question2.streetAddress2")}</label>
            <input
              type="text"
              name="billingStreetAddress2"
              value={formData.billingStreetAddress2}
              onChange={handleInputChange("billingStreetAddress2")}
              placeholder={t("stepSix.question2.streetAddressPlaceholder")}
            />
            {errors.billingStreetAddress2 && (
              <span className="error">{errors.billingStreetAddress2}</span>
            )}
          </div>
          <div className="input-group">
            <div className="input-label">
              <label>{t("stepSix.question2.city")}</label>
              <input
                type="text"
                name="billingCity"
                value={formData.billingCity}
                onChange={handleInputChange("billingCity")}
                placeholder={t("stepSix.question2.cityPlaceholder")}
              />
              {errors.billingCity && (
                <span className="error">{errors.billingCity}</span>
              )}
            </div>
            <div className="input-label">
              <label>{t("stepSix.question2.zipCode")}</label>
              <input
                type="text"
                name="billingZipCode"
                inputMode="numeric"
                value={formData.billingZipCode}
                onChange={handleInputChange("billingZipCode")}
                placeholder={t("stepSix.question2.zipCodePlaceholder")}
              />
              {errors.billingZipCode && (
                <span className="error">{errors.billingZipCode}</span>
              )}
            </div>
          </div>
          <div className="input-label location">
            <label>{t("stepSix.question2.state")}</label>
            <select
              name="billingState"
              onChange={handleInputChange("billingState")}
              value={formData.billingState}
            >
              <option value="">{t("stepSix.question2.select")}</option>
              {stateOptions.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.billingState && (
              <span className="error">{errors.billingState}</span>
            )}
          </div>

          <div className="btn-group btn-group-stepthree">
            <button
              type="button"
              className="back-btn back-btn-stepthree"
              onClick={prevInfo}
            >
              <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSix.back")}
            </button>
            <div className="forward-btns">
              <button type="submit" className="long-btn long-btn-stepthree">
                {t("stepSix.continueJourney")}
              </button>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: t("stepSix.question4.title"),
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="gender-select">
            <div
              className="gender-option"
              onClick={() => {
                setFormData({ ...formData, gender: "male" });
                handleChange({...formValues.stepSix, gender: "male"});
                nextStep();
              }}
            >
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
              />
              <label htmlFor="male"> {t("stepSix.question4.male")} </label>
            </div>
            <div
              className="gender-option"
              onClick={() => {
                setFormData({ ...formData, gender: "female" });
                handleChange({...formValues.stepSix, gender: "female"});
                nextStep();
              }}
            >
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
              />
              <label htmlFor="female"> {t("stepSix.question4.female")} </label>
            </div>
            <div
              className="gender-option"
              onClick={() => {
                setFormData({ ...formData, gender: "prefer-not-to-say" });
                handleChange({...formValues.stepSix, gender: "prefer-not-to-say"});
                nextStep();
              }}
            >
              <input
                type="radio"
                id="prefer-not-to-say"
                name="gender"
                value="prefer-not-to-say"
                checked={formData.gender === "prefer-not-to-say"}
              />
              <label htmlFor="prefer-not-to-say">
                {" "}
                {t("stepSix.question4.preferNotToSay")}{" "}
              </label>
            </div>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
          <div className="btn-group btn-group-stepthree">
            <button
              type="button"
              className="back-btn back-btn-stepthree"
              onClick={prevInfo}
            >
              <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSix.back")}
            </button>
            <div className="forward-btns">
              <button type="submit" className="long-btn long-btn-stepthree">
                {t("stepSix.continueJourney")}
              </button>
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

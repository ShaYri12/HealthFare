'use client';
import { useState } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import "../styles/stepsix.css";
import "../styles/form.css";
import Review from "./Review";

const StepSix = ({ nextStep, prevStep, handleChange, values }) => {
  const { t } = useTranslation(); // Destructure t function from useTranslation

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      title: t('stepSix.question1.title'),
      form: (
        <form className="input-form">
          <div className="input-group">
            <div className="input-label">
              <label>{t('stepSix.question1.firstName')}</label>
              <input type="text" placeholder={t('stepSix.question1.firstNamePlaceholder')} />
            </div>
            <div className="input-label">
              <label>{t('stepSix.question1.lastName')}</label>
              <input type="text" placeholder={t('stepSix.question1.lastNamePlaceholder')} />
            </div>
          </div>
        </form>
      ),
    },
    {
      title: t('stepSix.question2.title'),
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label>{t('stepSix.question2.streetAddress')}</label>
            <input type="text" placeholder={t('stepSix.question2.streetAddressPlaceholder')} />
          </div>
          <div className="input-group">
            <div className="input-label">
              <label>{t('stepSix.question2.city')}</label>
              <input type="text" placeholder={t('stepSix.question2.cityPlaceholder')} />
            </div>
            <div className="input-label">
              <label>{t('stepSix.question2.zipCode')}</label>
              <input type="number" placeholder={t('stepSix.question2.zipCodePlaceholder')} />
            </div>
          </div>
          <div className="input-label location">
            <label>{t('stepSix.question2.state')}</label>
            <select onChange={handleChange("location")} value={values.location}>
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
              <option value="Idaba">Idaba</option>
            </select>
          </div>
        </form>
      ),
    },
    {
      title: t('stepSix.question3.title'),
      description:
        "To participate in this program, you must be at least 18 years old. If you are under 18, we regret that you are not eligible to proceed with this program. Thank you for your understanding.",
      form: (
        <form className="input-form">
          <div className="input-group">
            <div className="input-label">
              <label>{t('stepSix.question3.month')}</label>
              <input type="number" placeholder="MM" />
            </div>
            <div className="input-label">
              <label>{t('stepSix.question3.day')}</label>
              <input type="number" placeholder="DD" max="31" />
            </div>
            <div className="input-label">
              <label>{t('stepSix.question3.year')}</label>
              <input type="number" placeholder="YYYY" max="2024" />
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
              nextInfo();
            }}>
              <input type="radio" id="male" name="gender" />
              <label htmlFor="male"> {t('stepSix.question4.male')} </label>
            </div>
            <div className="gender-option" onClick={() => {
              document.getElementById('female').click();
              nextInfo();
            }}>
              <input type="radio" id="female" name="gender" />
              <label htmlFor="female"> {t('stepSix.question4.female')} </label>
            </div>
            <div className="gender-option" onClick={() => {
              document.getElementById('prefer-not-to-say').click();
              nextInfo();
            }}>
              <input type="radio" id="prefer-not-to-say" name="gender" />
              <label htmlFor="prefer-not-to-say"> {t('stepSix.question4.preferNotToSay')} </label>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: t('stepSix.question5.title'),
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <input type="text" placeholder={t('stepSix.question5.phonePlaceholder')} />
          </div>
        </form>
      ),
    },
    {
      title: t('stepSix.question6.title'),
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <input type="text" placeholder={t('stepSix.question6.emailPlaceholder')} />
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
      <div className="title-info">
        <h2>{questions[currentQuestion].title}</h2>
        {questions[currentQuestion].description && (
          <p>{questions[currentQuestion].description}</p>
        )}
      </div>
      {questions[currentQuestion].form}

      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={prevInfo}>
          <img src="/assets/arrow.svg" alt="arrow" /> {t('stepSix.back')}
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={nextInfo}>{t('stepSix.continueJourney')}</button>
          <button className='arrow-btn arrow-btn-stepthree' onClick={nextInfo}><img src="/assets/arrow.svg" alt=""/></button>
        </div>
      </div>

      <Review />
    </div>
  );
};

export default StepSix;

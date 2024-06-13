'use client';
import '../styles/stepeleven.css';
import '../styles/form.css';
import Testimonial from './Testimonial';
import { useTranslation } from 'react-i18next';

const StepEleven = ({ prevStep, nextStep, handleChange, values }) => {
  const { t } = useTranslation();

  const cardsData = [
    {
      imgSrc: "/assets/step2-product1.svg",
      title: t('stepEleven.title'),
      price: t('stepEleven.price'),
      monthlyPrice: t('stepEleven.monthlyPrice'),
      description: t('stepEleven.description'),
      savings: t('stepEleven.savings')
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="thank-you">
        <h3>{t('stepEleven.thankYou.title')}</h3>
        <p>{t('stepEleven.thankYou.message')}</p>
      </div>

      <div className='btn-group btn-group-stepthree'>
        <button className='long-btn long-btn-stepthree' onClick={nextStep}>{t('stepEleven.scheduleAppointment')}</button>
      </div>

      <Testimonial />
    </div>
  );
};

export default StepEleven;

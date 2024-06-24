'use client';
import '../styles/stepeleven.css';
import '../styles/form.css';
import Testimonial from './Testimonial';
import { useTranslation } from 'react-i18next';

const StepEleven = ({ prevStep, nextStep, handleChange, values }) => {
  const { t } = useTranslation();

  return (
    <div className="formContainer step-form">
      <div className="thank-you">
        <h3>{t('stepEleven.title')}</h3>
        <p>{t('stepEleven.message')}</p>
      </div>

      <div className='btn-group btn-group-stepthree'>
        <button className='long-btn long-btn-stepthree' onClick={nextStep}>{t('stepEleven.scheduleAppointment')}</button>
      </div>

      <Testimonial />
    </div>
  );
};

export default StepEleven;

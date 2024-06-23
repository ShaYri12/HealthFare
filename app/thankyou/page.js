// thankyou.js
'use client'
import { useTranslation, I18nextProvider } from 'react-i18next';
import Testimonial from '../components/Testimonial';
import i18n from '../context/i18n'; // Adjust the path as per your project structure
import ProgressBar from '../components/ProgressBar';
import { useStep } from '../context/StepContext'; // Import useStep hook from StepContext
import Link from 'next/link';
import '../styles/form.css';
import '../styles/stepeleven.css'

const ThankYouPage = () => {
  const { t } = useTranslation();
  const { goToStep } = useStep(); // Use goToStep function from StepContext

  // Example function to handle appointment scheduling
  const handleScheduleAppointment = () => {
    goToStep(8);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div className="container">
        <img className="backgroundimg" src="/assets/backgroundimg.png" alt="Background" />
        <div className="formContainer">
          <ProgressBar step={11} totalSteps={13} />
          <div className="logo">
            <img src="/assets/logo.webp" alt="Logo" />
          </div>
          <div className="formContainer step-form">
            <div className="thank-you">
              <h3>{t('stepEleven.thankYou.title')}</h3>
              <p>{t('stepEleven.thankYou.message')}</p>
            </div>

            <div className='btn-group btn-group-stepthree'>
              <Link className='long-btn long-btn-stepthree' href="/" onClick={handleScheduleAppointment}>
                <button>
                  {t('stepEleven.scheduleAppointment')}
                </button>
              </Link>
            </div>

            <Testimonial />
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
};

export default ThankYouPage;

// thankyou.js
'use client'
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from '../context/i18n'; // Adjust the path as per your project structure
import ProgressBar from '../components/ProgressBar';
import '../styles/form.css';
import '../styles/thankyou.css'

const ThankYouPage = ({handleSubmit, formValues}) => {
  const { t } = useTranslation();

  // Function to render all formValues data
  const renderFormValues = () => {
    return (
        <div className="formValuesContainer">
            <h2>Form Values:</h2>
            <ul>
                {formValues && Object.keys(formValues).map((key, index) => (
                    <li key={index}>
                        <strong>{key}:</strong> {JSON.stringify(formValues[key])}
                    </li>
                ))}
            </ul>
        </div>
    );
};

  return (
    <I18nextProvider i18n={i18n}>
      <div className="container">
        <img className="backgroundimg" src="/assets/backgroundimg.png" alt="Background" />
        <div className="formContainer">
          <ProgressBar step={15} totalSteps={15} />
          <div className="logo">
            <img src="/assets/logo.webp" alt="Logo" />
          </div>
          <div className="formContainer step-form">
            <div className="thank-you">
              <h3>{t('stepEleven.thankYou.title')}</h3>
              <p>{t('stepEleven.thankYou.message')}</p>
            </div>

            {renderFormValues()}


            <div className='assistance'>
                <h3>{t('stepThirteen.assistanceTitle')}</h3>
                <p>{t('stepThirteen.assistanceMessage')}</p>
            </div>

            <div className='btn-group final-btn'>
                <button className='arrow-btn whatsapp-btn'><img src="/assets/whatsapp.svg" alt=""/></button>
                <button className='long-btn whatsapp-btn' >{t('stepThirteen.whatsappBtn')}</button>
            </div>

            <div className='doctor'>
                <img src="/assets/doctor.jpg" alt="doctorImg" />
                <span className='doctor-texts'>
                    <h3>{t('stepThirteen.doctorText.title')}</h3>
                    <p>{t('stepThirteen.doctorText.support')}</p>
                    <span>{t('stepThirteen.doctorText.online')}</span>
                </span>
                <span className='popup'>1</span>
            </div>
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
};

export default ThankYouPage;

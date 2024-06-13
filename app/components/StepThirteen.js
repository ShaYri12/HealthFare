import { useState } from 'react';
import '../styles/stepthirteen.css';
import '../styles/form.css';
import { useTranslation } from 'react-i18next';

const StepThirteen = ({ nextStep, handleChange, values }) => {
    const { t } = useTranslation();
    const [activebtn, setActivebtn] = useState('english');

    const handleLanguage = (language) => {
        setActivebtn(language);
    };

    return (
        <div className="formContainer step-form">
            <div className='title-info'>
                <h2>{t('stepThirteen.title')}</h2>
                <span>{t('stepThirteen.confirmationMessage')}</span>
            </div>

            <div className='assistance'>
                <h3>{t('stepThirteen.assistanceTitle')}</h3>
                <p>{t('stepThirteen.assistanceMessage')}</p>
            </div>

            <div className='btn-group final-btn'>
                <button className='arrow-btn whatsapp-btn' onClick={nextStep}><img src="/assets/whatsapp.svg" alt=""/></button>
                <button className='long-btn whatsapp-btn' onClick={nextStep}>{t('stepThirteen.whatsappBtn')}</button>
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
    );
};

export default StepThirteen;

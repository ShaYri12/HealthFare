import { useTranslation } from 'react-i18next';
import '../styles/stepthirteen.css';
import '../styles/form.css';

const StepThirteen = ({ nextStep, handleChange, handleSubmit, formValues }) => {
    const { t } = useTranslation();

    // Function to render all formValues data
    const renderFormValues = () => {
        return (
            <div className="formValuesContainer">
                <h2>Form Values:</h2>
                <ul>
                    {Object.keys(formValues).map((key, index) => (
                        <li key={index}>
                            <strong>{key}:</strong> {JSON.stringify(formValues[key])}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="formContainer step-form">
            <div className='title-info'>
                <h2>{t('stepThirteen.title')}</h2>
                <span>{t('stepThirteen.confirmationMessage')}</span>
            </div>

            {/* Displaying all form values */}
            {renderFormValues()}

            <div className='assistance'>
                <h3>{t('stepThirteen.assistanceTitle')}</h3>
                <p>{t('stepThirteen.assistanceMessage')}</p>
            </div>

            <div className='btn-group final-btn'>
                <button className='arrow-btn whatsapp-btn' onClick={handleSubmit}><img src="/assets/whatsapp.svg" alt=""/></button>
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

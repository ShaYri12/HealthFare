import { useTranslation } from 'react-i18next';
import '../styles/stepthirteen.css';
import '../styles/form.css';
import Testimonial from './Testimonial';

const AppointmentConfirm = ({ nextStep, prevStep }) => {
    const { t } = useTranslation();

    return (
        <div className="formContainer step-form">
            <div className='title-info'>
                <h2>{t('stepThirteen.title')}</h2>
                <span>{t('stepThirteen.confirmationMessage')}</span>
            </div>

            <div className='btn-group btn-group-stepthree'>
                <button type="button" className='back-btn back-btn-stepthree' onClick={prevStep}>
                    <img src="/assets/arrow.svg" alt="arrow" /> {t('stepFour.back')}
                </button>
                <div className='forward-btns'>
                    <button type='button' className='long-btn long-btn-stepthree' onClick={nextStep}>{t('stepFour.continueJourney')}</button>
                </div>
            </div>

            <Testimonial/>
        </div>
    );
};

export default AppointmentConfirm;

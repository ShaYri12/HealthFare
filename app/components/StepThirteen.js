'use client';
import { useState } from 'react';
import '../styles/stepthirteen.css'
import '../styles/form.css'

const StepOne = ({ nextStep, handleChange, values }) => {
    const [activebtn, setActivebtn] = useState('english');

    const handleLanguage = (language) => {
        setActivebtn(language);
    };

    return (
        <div className="formContainer step-form">
            <div className='title-info'>
                <h2>Appointment Confirmed!</h2>
                <span>Thank you for scheduling your appointment! You're taking an exciting step on your weight loss journey. Our team will be in touch soon to provide further details and answer any questions you may have.</span>
            </div>

            <div className='assistance'>
                <h3>Need Assistance?</h3>
                <p>If you have any questions or need further assistance, feel free to reach out to us via <span> WhatsApp </span> or call us at <span>561-631-5134</span>. We're here to help!</p>
            </div>

            <div className='btn-group final-btn'>
                <button className='arrow-btn whatsapp-btn' onClick={nextStep}><img src="/assets/whatsapp.svg" alt=""/></button>
                <button className='long-btn whatsapp-btn' onClick={nextStep}>Chat with Us on WhatsApp</button>
            </div>
        </div>
    );
};

export default StepOne;

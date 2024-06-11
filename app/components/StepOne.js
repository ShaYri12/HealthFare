'use client';
import { useState } from 'react';
import '../styles/stepone.css';
import '../styles/form.css'
import Review from './Review';

const StepOne = ({ nextStep, handleChange, values }) => {
    const [activebtn, setActivebtn] = useState('english');

    const handleLanguage = (language) => {
        setActivebtn(language);
    };

    return (
        <div className="formContainer step-form">
            <div className='title-info'>
                <h2>BEGIN YOUR <span>TRANSFORMATION</span> TODAY</h2>
                <p>Embark on a journey to a healthier, happier you. <br/>
                Get started now and take the first step towards transforming your life.</p>
            </div>
            <div className='language'>
                <p>What language would you like to start?</p>
                <div className='language-btns'>
                <button className={`${activebtn === 'english' ? 'active' : ''}`} onClick={() => handleLanguage('english')}>
                    <img src="/assets/eng.png" alt="eng"/>English
                </button>
                <button className={`${activebtn === 'español' ? 'active' : ''}`} onClick={() => handleLanguage('español')}>
                    <img src="/assets/esp.png" alt="esp"/>Español
                </button>
                <button className={`${activebtn === 'português' ? 'active' : ''}`} onClick={() => handleLanguage('português')}>
                <img src="/assets/por.png" alt="por"/>Português
                </button>
                </div>
            </div>
            <div className='location'>
                <p>Choose Your Location</p>
                <select onChange={handleChange('location')} value={values.location}>
                    <option value="">Select...</option>
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
            <div className='btn-group'>
                <button className='long-btn' onClick={nextStep}>Start Your Journey</button>
                <button className='arrow-btn' onClick={nextStep}><img src="/assets/arrow.svg" alt=""/></button>
            </div>

            <div className="agreement">
                <input type="radio" id="agreement" name="agreement" />
                <p htmlFor="agreement">I acknowledge the <a href="#">Refund Policy</a>, <a href="#">Terms & Conditions</a>, <a href="#">Notice of Privacy Practices</a>, and <a href="#">Consent to Telehealth</a>.</p>
            </div>

            <Review/>
        </div>
    );
};

export default StepOne;

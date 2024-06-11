'use client';
import { useState } from 'react';
import '../styles/stepone.css';
import '../styles/form.css'
import Review from './Review';

const StepOne = ({ nextStep, prevStep, handleChange, values }) => {
    const [activebtn, setActivebtn] = useState('english');

    const handleLanguage = (language) => {
        setActivebtn(language);
    };

    return (
      <div className="formContainer step-form">
        <div className="title-info">
          <h2>Unfortunately, You Are Not Eligible</h2>
          <p>
            Your BMI is below 27. This program requires a BMI of 27 or higher
            for participation. Message: Thank you for your interest. Based on
            your BMI, you do not qualify for this program at this time.
          </p>
        </div>
        <div className='btn-group btn-group-stepthree'>
            <button className='back-btn back-btn-stepthree back-noteligible' onClick={prevStep}>
                <img src="/assets/arrow.svg" alt="arrow" /> Back
            </button>
        </div>

        <Review />
      </div>
    );
};

export default StepOne;

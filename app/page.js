'use client';
import { useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import StepFive from './components/StepFive';
import ProgressBar from './components/ProgressBar';
import './styles/form.css';

const Home = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    stepOne: '',
    stepTwo: '',
    stepThree: '',
    stepFour: '',
    stepFive: '',
    stepSix: '',
    stepSeven: '',
    stepEight: '',
    stepNine: '',
    stepTen: '',
    stepEleven: '',
    stepTwelve: '',
    stepThirteen: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleChange = input => e => setFormValues({ ...formValues, [input]: e.target.value });
  const handleSubmit = () => alert(JSON.stringify(formValues));

  const steps = [
    <StepOne nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formValues} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepFour prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepFive prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepThree prevStep={prevStep} handleSubmit={handleSubmit} handleChange={handleChange} values={formValues} />,
  ];

  return (
    <div className="container">
      <img className="backgroundimg" src="/assets/backgroundimg.png" alt="Background" />
      <div className="formContainer">
        <ProgressBar step={step} totalSteps={13} />
        <div className="logo">
          <img src="/assets/logo.webp" alt="Logo" />
        </div>
        {steps[step - 1]}
      </div>
    </div>
  );
};

export default Home;

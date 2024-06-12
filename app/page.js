'use client';
import { useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import StepFive from './components/StepFive';
import StepSix from './components/StepSix';
import StepSeven from './components/StepSeven';
import StepEight from './components/StepEight';
import StepNine from './components/StepNine';
import StepTen from './components/StepTen';
import StepEleven from './components/StepEleven';
import StepTwelve from './components/StepTwelve';
import StepThirteen from './components/StepThirteen';
import NotEligible from './components/NotEligible'
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

  const [showNotEligible, setShowNotEligible] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    setShowNotEligible(false);
    window.scrollTo(0, 0);
  };
  const handleChange = input => e => setFormValues({ ...formValues, [input]: e.target.value });
  const handleSubmit = () => alert(JSON.stringify(formValues));

  const handleNotEligible = () => {
    setShowNotEligible(true); 
  };

  const steps = [
    <StepOne nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formValues} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepFour prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepFive prevStep={prevStep} handleNotEligible={handleNotEligible} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepSix prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepSeven prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepEight prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepNine prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepTen prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepEleven prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepTwelve prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepThirteen prevStep={prevStep} handleSubmit={handleSubmit} handleChange={handleChange} values={formValues} />,
  ];

  return (
    <div className="container">
      <img className="backgroundimg" src="/assets/backgroundimg.png" alt="Background" />
      <div className="formContainer">
        <ProgressBar step={step} totalSteps={13} />
        <div className="logo">
          <img src="/assets/logo.webp" alt="Logo" />
        </div>
        {showNotEligible ? <NotEligible prevStep={prevStep} /> : steps[step - 1]}
      </div>
    </div>
  );
};

export default Home;

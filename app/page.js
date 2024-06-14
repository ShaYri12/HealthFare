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
import AddSuppliment from './components/AddSuppliment'
import { I18nextProvider } from 'react-i18next';
import i18n from './context/i18n';
import './styles/form.css';

const Home = () => {
  const [step, setStep] = useState(10);
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
  const [showAddSuppliment, setShowAddSuppliment] = useState(false);
  const [cart, setCart] = useState([]);
  const [cart2, setCart2] = useState([]);

  const cartitem = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };
  const cartitem2 = (item) => {
    setCart2(prevCart2 => [...prevCart2, item]);
  };


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

  const handleAddSuppliment = () => {
    setShowAddSuppliment(true); 
  };

  const handleOrignalStep = () => {
    setStep(10); 
    setShowAddSuppliment(false); 
  };

  const steps = [
    <StepOne nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formValues} cartitem2={cartitem2} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} cartitem={cartitem} />,
    <StepFour prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepFive prevStep={prevStep} handleNotEligible={handleNotEligible} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepSix prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepSeven prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepEight prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepNine prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepTen prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} cart={cart} cart2={cart2} addSuppliment={handleAddSuppliment}/>,
    <StepEleven prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepTwelve prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <StepThirteen prevStep={prevStep} handleSubmit={handleSubmit} handleChange={handleChange} values={formValues} />,
  ];

  return (
    <I18nextProvider i18n={i18n}>
    <div className="container">
      <img className="backgroundimg" src="/assets/backgroundimg.png" alt="Background" />
      <div className="formContainer">
        <ProgressBar step={step} totalSteps={13} />
        <div className="logo">
          <img src="/assets/logo.webp" alt="Logo" />
        </div>
        {showAddSuppliment ? <AddSuppliment handleOrignalStep={handleOrignalStep} cartitem={cartitem} cart2={cart} setCart2={setCart}/> : showNotEligible ? <NotEligible prevStep={prevStep} /> : steps[step - 1]}
      </div>
    </div>
    </I18nextProvider>
  );
};

export default Home;

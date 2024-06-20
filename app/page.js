'use client'
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
import NotEligible from './components/NotEligible';
import ProgressBar from './components/ProgressBar';
import AddSuppliment from './components/AddSuppliment';
import { I18nextProvider } from 'react-i18next';
import i18n from './context/i18n';
import './styles/form.css';

const Home = () => {
  const [step, setStep] = useState(1);
  
  // Initialize formValues with arrays where necessary
  const [formValues, setFormValues] = useState({
    stepOne: {},
    stepTwo: {},
    stepThree: {},
    stepFour: {},
    stepFive: {},
    stepSix: {},
    stepSeven: {},
    stepEight: {},
    stepNine: {},
    stepTen: {},
    stepEleven: {},
    stepTwelve: {},
    stepThirteen: {},
  });

  const handleChange = (component) => (data) => {
    setFormValues((prevState) => ({
      ...prevState,
      [component]: {
        ...prevState[component],
        ...data,
      },
    }));
  };

  const [showNotEligible, setShowNotEligible] = useState(false);
  const [showAddSuppliment, setShowAddSuppliment] = useState(false);
  const [cart, setCart] = useState([]);
  const [cart2, setCart2] = useState([]);

  const cartitem = (item) => {
    // Add item to cart
    const updatedCart = [...cart, item];
    setCart(updatedCart);
  
    // Update formValues.stepThree with current cart items
    handleChange('stepThree')({ cart: updatedCart });
  
    // Log formValues and cart to verify updates
    console.log("formValues after handleChange: ", formValues.stepThree);
    console.log("Cart after handleChange: ", cart);
  };
  
  

  const cartitem2 = (item) => {
    setCart2((prevCart2) => [...prevCart2, item]);
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
    setShowNotEligible(false);
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formValues));
  };

  const handleNotEligible = () => {
    setShowNotEligible(true);
  };

  const handleEligible = () => {
    setShowNotEligible(false);
  };

  const handleAddSuppliment = () => {
    setShowAddSuppliment(true);
  };

  const handleOrignalStep = () => {
    setStep(10);
    setShowAddSuppliment(false);
  };

  const steps = [
    <StepOne nextStep={nextStep} handleChange={handleChange('stepOne')} values={formValues} />,
    <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange('stepTwo')} values={formValues} cartitem2={cartitem2} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepThree')} values={formValues} cartitem={cartitem} />,
    <StepFour prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepFour')} values={formValues} handleNotEligible={handleNotEligible} />,
    <StepFive prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepFive')} values={formValues} />,
    <StepSix prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepSix')} formValues={formValues} />,
    <StepSeven prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepSeven')} values={formValues} />,
    <StepEight prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepEight')} values={formValues} />,
    <StepNine prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepNine')} values={formValues} />,
    <StepTen prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepTen')} formValues={formValues} cart={cart} cart2={cart2} setCart={setCart} addSuppliment={handleAddSuppliment} />,
    <StepEleven prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepEleven')} values={formValues} />,
    <StepTwelve prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepTwelve')} values={formValues} />,
    <StepThirteen prevStep={prevStep} handleSubmit={handleSubmit} handleChange={handleChange('stepThirteen')} formValues={formValues} />,
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
          {showAddSuppliment ? (
            <AddSuppliment handleOrignalStep={handleOrignalStep} handleChange={handleChange('stepThree')} cartitem={cartitem} />
          ) : showNotEligible ? (
            <NotEligible handleEligible={handleEligible} />
          ) : (
            steps[step - 1]
          )}
        </div>
      </div>
    </I18nextProvider>
  );
};

export default Home;

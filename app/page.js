'use client'
import { useEffect, useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import PlanSelection from './components/PlanSelection';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import StepFive from './components/StepFive';
import StepSix from './components/StepSix';
import StepSeven from './components/StepSeven';
import StepEight from './components/StepEight';
import StepNine from './components/StepNine';
import StepTen from './components/StepTen';
import StepEleven from './components/StepEleven';
import Appointment from './components/Appointment';
import AppointmentConfirmed from './components/AppointmentConfirm';
import NotEligible from './components/NotEligible';
import ProgressBar from './components/ProgressBar';
import AddSuppliment from './components/AddSuppliment';
import ThankYou from './components/ThankYou';
import { I18nextProvider } from 'react-i18next';
import i18n from './context/i18n';
import './styles/form.css';
import { useStep } from './context/StepContext';
import Timer from './components/Timer';
import LoadingScreen from './components/LoadingScreen'; // Import the new LoadingScreen component

const Home = () => {
  const { step, nextStep, prevStep, goToStep } = useStep();

  const [currentStepSixQuestion, setCurrentStepSixQuestion] = useState(0);
  const [currentStepSevenQuestion, setCurrentStepSevenQuestion] = useState(0);

  const [formValues, setFormValues] = useState({
    stepOne: { "location" : "Maine" },
    stepTwo: {},
    planSelection: {},
    stepThree: {},
    stepFour: {},
    stepFive: {},
    stepSix: {},
    stepEleven: {},
    appointment: {},
    appointmentConfirmed: {},
    stepSeven: {},
    stepEight: {},
    stepNine: {},
    stepTen: {},
    ThankYou: {},
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
  const [NotEligibleData, setNotEligibleData] = useState([]);

  const cartitem = (item) => {
    const existingIndex = cart.findIndex((cartItem) => cartItem.title === item.title);
    let updatedCart;

    if (existingIndex !== -1) {
      updatedCart = [...cart];
      updatedCart[existingIndex].quantity += item.quantity;
    } else {
      updatedCart = [...cart, item];
    }

    setCart(updatedCart);
    handleChange('stepThree')({ cart: updatedCart });
  };

  const cartitem2 = (item) => {
    setCart2([item]);
  };

  const updateNotEligibleData = (data) => {
    setNotEligibleData(data);
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
    goToStep(15);
    setShowAddSuppliment(false);
  };

  const steps = [
    <StepOne nextStep={nextStep} handleChange={handleChange('stepOne')} values={formValues} />,
    <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange('stepTwo')} values={formValues} cartitem2={cartitem2} />,
    <PlanSelection nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formValues} cartitem2={cartitem2} />,
    <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepThree')} values={formValues} cartitem={cartitem} />,
    <StepFour prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepFour')} values={formValues} updateNotEligibleData={updateNotEligibleData} handleNotEligible={handleNotEligible} />,
    <LoadingScreen nextStep={nextStep} />, // Add the LoadingScreen component here
    <StepFive prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepFive')} values={formValues} updateNotEligibleData={updateNotEligibleData} handleNotEligible={handleNotEligible} />,
    <StepSix prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepSix')} formValues={formValues} updateNotEligibleData={updateNotEligibleData} handleNotEligible={handleNotEligible} currentQuestion={currentStepSixQuestion} setCurrentQuestion={setCurrentStepSixQuestion} />,
    <StepEleven prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepEleven')} values={formValues} />,
    <Appointment prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('appointment')} values={formValues} />,
    <AppointmentConfirmed prevStep={prevStep} nextStep={nextStep} values={formValues} />,
    <StepSeven prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepSeven')} values={formValues} currentQuestion={currentStepSevenQuestion} setCurrentQuestion={setCurrentStepSevenQuestion} />,
    <StepEight prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepEight')} values={formValues} updateNotEligibleData={updateNotEligibleData} handleNotEligible={handleNotEligible} />,
    <StepNine prevStep={prevStep} nextStep={nextStep} handleChange={handleChange('stepNine')} values={formValues} />,
    <StepTen prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} formValues={formValues} cart={cart} cart2={cart2} setCart={setCart} setCart2={setCart2} addSuppliment={handleAddSuppliment} />,
    <ThankYou handleSubmit={handleSubmit} handleChange={handleChange('ThankYou')} formValues={formValues} />
  ];

  return (
    <I18nextProvider i18n={i18n}>
      <div className="container">
        <img className="backgroundimg" src="/assets/backgroundimg.png" alt="Background" />
        <div className="formContainer">
          <div className='form-header'>
            <ProgressBar step={step} totalSteps={15} />
            {step >= 10 && step !== 16 && (
              <Timer />
            )}
          </div>
          <div className="logo">
            <img src="/assets/logo.webp" alt="Logo" />
          </div>
          {showAddSuppliment ? (
            <AddSuppliment handleOrignalStep={handleOrignalStep} handleChange={handleChange('stepThree')} cartitem={cartitem} />
          ) : showNotEligible ? (
            <NotEligible NotEligibleData={NotEligibleData} handleEligible={handleEligible} />
          ) : (
            steps[step - 1]
          )}
        </div>
      </div>
    </I18nextProvider>
  );
};

export default Home;

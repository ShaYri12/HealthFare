'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';

const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState(12);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const goToStep = (stepNumber) => setStep(stepNumber);

  // Scroll to top whenever step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, goToStep]);

  return (
    <StepContext.Provider value={{ step, nextStep, prevStep, goToStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => useContext(StepContext);

'use client'
import React, { createContext, useState, useContext } from 'react';

const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const goToStep = (stepNumber) => setStep(stepNumber);

  return (
    <StepContext.Provider value={{ step, nextStep, prevStep, goToStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => useContext(StepContext);

'use client'
import React, { useEffect, useState } from 'react'
import { useStep } from '../context/StepContext';
import { useTranslation } from 'react-i18next';

const Timer = () => {
    const { t } = useTranslation();
    const { step } = useStep();

    // Timer state
    const [timerActive, setTimerActive] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds

    // Start timer when component mounts
    useEffect(() => {
    if (step >= 10) {
        setTimerActive(true);
    }
    }, [step]);

    // Timer logic
    useEffect(() => {
    let intervalId;

    if (timerActive) {
        intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
            if (prevTime === 0) {
            setTimerActive(false);
            // Handle timer expiration action here
            }
            return prevTime - 1;
        });
        }, 1000);
    }

    return () => clearInterval(intervalId);
    }, [timerActive]);

  return (
    <div className="timer-container">
        <p className="timer-text">{t('appointmentReserved')} {Math.floor(timeRemaining / 60)}:{('0' + (timeRemaining % 60)).slice(-2)}</p>
    </div>
  )
}

export default Timer
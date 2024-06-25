import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners'; // Importing PulseLoader from react-spinners
import '../styles/loading-screen.css';
import { useTranslation } from 'react-i18next';

const LoadingScreen = ({ nextStep }) => {
  const { t } = useTranslation();
  const images = [
    '/assets/before1.png',
    '/assets/after1.png',
    '/assets/before2.png',
    '/assets/after2.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadingFinished, setLoadingFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1500);

    const timer = setTimeout(() => {
      setLoadingFinished(true);
      setTimeout(() => {
        nextStep(); // Move to the next step after showing the checkmark for a short period
      }, 1500); // Adjust this timeout value as needed (e.g., 1000ms = 1 second)
    }, images.length * 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [images.length, nextStep]);

  const getHeading = () => {
    return currentImageIndex % 2 === 0 ? t('stepFive.beforeText') : t('stepFive.afterText');
  };

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2 className='transformation-text'>{t('stepFive.inspiringTransformations')}</h2>
      </div>
      <div className='loading-container'>
        {!loadingFinished ? (
            <HashLoader size={75} color={"#28a745"}/>
        ) : (
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
        )}
      </div>
      <div className="loader transformation-box">
        <div className='transformation-img'>
          <h4>{getHeading()}</h4>
          <img 
            key={currentImageIndex} // Key to trigger CSS transition
            src={images[currentImageIndex]} 
            alt="Loading" 
            className="fade-in"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

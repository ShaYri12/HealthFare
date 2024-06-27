import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
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

  const [loadingFinished, setLoadingFinished] = useState(false);
  const [displayText, setDisplayText] = useState(t('stepFive.beforeText')); // Initial text
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initial index

  useEffect(() => {
    const interval = setInterval(() => {
      // Update index and display text if loading is not finished
      if (!loadingFinished) {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }
    }, 1500);

    const timer = setTimeout(() => {
      setLoadingFinished(true);
      setTimeout(() => {
        nextStep(); // Move to the next step after showing the checkmark for a short period
      }, 1500); // Adjust this timeout value as needed (e.g., 1000ms = 1 second)

      // Clear interval once loading is finished
      clearInterval(interval);
    }, images.length * 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [images.length, loadingFinished, nextStep]);

  useEffect(() => {
    // Determine the correct display text based on currentImageIndex
    if (currentImageIndex === 0 || currentImageIndex === 2) {
      setDisplayText(t('stepFive.beforeText'));
    } else if (currentImageIndex === 1 || currentImageIndex === 3) {
      setDisplayText(t('stepFive.afterText'));
    }

    // Reset display text when loading finishes
    if (loadingFinished) {
      setDisplayText(t('stepFive.afterText'));
    }
  }, [currentImageIndex, loadingFinished, t]);

  return (
    <div className="formContainer step-form loading">
      
      <div className="loader transformation-box">
      <div className="title-info">
        <h2 className='transformation-text'>{t('stepFive.inspiringTransformations')}</h2>
      </div>
      <div className='loading-container'>
        {!loadingFinished ? (
          <HashLoader size={65} color={"#28a745"} />
        ) : (
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        )}
      </div>
        <div className='transformation-img'>
          <h4>{displayText}</h4>
          <img
            key={0} // Constant key to prevent image change after loading
            src={images[loadingFinished ? images.length - 1 : currentImageIndex]} // Show last image if loading is finished
            alt="Loading"
            className="fade-in"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

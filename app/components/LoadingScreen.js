import React, { useEffect, useState } from 'react';
import '../styles/loading-screen.css';
import '../styles/form.css'
import { useTranslation } from 'react-i18next';

const LoadingScreen = ({ nextStep, setLoading }) => {
  const { t } = useTranslation();
  const images = [
    '/assets/before1.png',
    '/assets/after1.png',
    '/assets/before2.png',
    '/assets/after2.png'
  ];

  const [loadingFinished, setLoadingFinished] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initial index
  const [messageIndex, setMessageIndex] = useState(0); // Initial message index
  const [showCheckmark, setShowCheckmark] = useState(false); // State for showing the checkmark

  const messages = [
    t('loading.msg1'),
    t('loading.msg2'),
    t('loading.msg3'),
    t('loading.msg4')
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update index if loading is not finished
      if (!loadingFinished) {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }
    }, 1500);

    const timer = setTimeout(() => {
      setLoadingFinished(true);
      setShowCheckmark(true);
    }, (images.length - 1) * 1500); // Adjust the duration so it stops at the last image

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [images.length, loadingFinished]);

  useEffect(() => {
    // Change the message every 2 seconds
    const messageTimer = setInterval(() => {
      setMessageIndex(prevIndex => prevIndex + 1);
    }, 2000);

    if (messageIndex >= messages.length - 1) {
      clearInterval(messageTimer);
      // Call nextStep after 1.5 seconds of showing the checkmark and "Done" message
      setTimeout(() => {
        setLoading(false);
        nextStep();
      }, 1500);
    }

    return () => {
      clearInterval(messageTimer);
    };
  }, [messageIndex, messages.length, nextStep]);

  return (
    <div className="formContainer step-form loading-screen">
      <div className="logo-container">
        <img className={`blinking-logo ${loadingFinished ? 'stop-blinking' : ''}`} src="/assets/logoH.png" alt="Logo" />
      </div>
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
      <div className="loading-messages">
        <p>{messages[messageIndex]}</p>
        {loadingFinished && messageIndex === messages.length - 1 && (
          <div className="done-message">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
        )}
      </div>
      <div className="transformation-box">
        <div className="title-info">
          <h2 className='transformation-text'>{t('stepFive.inspiringTransformations')}</h2>
        </div>
        <div className='loading-container'>
          <div className='transformation-img'>
            <h4>
              {currentImageIndex < 2
                ? t('loading.caption1')
                : t('loading.caption2')}
            </h4>
            <div className="before-after">
              <h4>{currentImageIndex % 2 === 0 ? t('loading.before') : t('loading.after')}</h4>
            </div>
            <img
              key={loadingFinished ? images.length - 1 : currentImageIndex}
              src={loadingFinished ? images[images.length - 1] : images[currentImageIndex]}
              alt="Loading"
              className="fade-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

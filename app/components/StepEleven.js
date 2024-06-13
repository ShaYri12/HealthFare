'use client';
import '../styles/stepeleven.css';
import '../styles/form.css';
import Testimonial from './Testimonial';
import { useTranslation } from 'react-i18next';

const StepEleven = ({ prevStep, nextStep, handleChange, values }) => {
  const { t } = useTranslation();

  const cardsData = [
    {
      imgSrc: "/assets/step2-product1.svg",
      title: t('stepEleven.title'),
      price: t('stepEleven.price'),
      monthlyPrice: t('stepEleven.monthlyPrice'),
      description: t('stepEleven.description'),
      savings: t('stepEleven.savings')
    },
  ];

  return (
    <div className="formContainer step-form">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-top">
            <div className="card-img">
              <img src={card.imgSrc} alt={card.title} />
            </div>
            <div className="card-title-price">
              {card.savings && (
                <div className="savings">
                  <p>{t('stepEleven.savingsTitle')}</p>
                  <span>
                    {card.savings}
                    <p>{t('stepEleven.savingsPerYear')}</p>
                  </span>
                </div>
              )}
              <h3>{card.title}</h3>
              <span>
                <h2>{card.price}</h2>
                <p>
                  {card.monthlyPrice}
                  <span>{t('stepEleven.monthlyLabel')}</span>
                </p>
              </span>
              <p className="lose">{card.description}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="thank-you">
        <h3>{t('stepEleven.thankYou.title')}</h3>
        <p>{t('stepEleven.thankYou.message')}</p>
      </div>

      <div className='btn-group btn-group-stepthree'>
        <button className='long-btn long-btn-stepthree' onClick={nextStep}>{t('stepEleven.scheduleAppointment')}</button>
      </div>

      <Testimonial />
    </div>
  );
};

export default StepEleven;

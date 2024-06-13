'use client';
import { useTranslation } from 'react-i18next';
import '../styles/stepten.css';
import '../styles/form.css';
import Review from "./Review";

const StepTen = ({ prevStep, nextStep }) => {
  const { t } = useTranslation();

  const cardsData = [
    {
      imgSrc: "/assets/step2-product1.svg",
      title: t('stepTen.productTitle'),
      price: t('stepTen.productPrice'),
      monthlyPrice: t('stepTen.productMonthlyPrice'),
      description: t('stepTen.productDescription'),
      savings: t('stepTen.productSavings')
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>{t('stepTen.orderSummary')}</h2>
        <p>{t('stepTen.reviewText')}</p>
      </div>
      {cardsData.map((card, index) => (
        <div className='card' key={index}>
          <div className='card-top'>
            <div className='card-img'>
              <img src={card.imgSrc} alt={card.title} />
            </div>
            <div className='card-title-price'>
              {card.savings && (
                <div className='savings'>
                  <p>{t('stepTen.totalSavings')}</p>
                  <span>{card.savings}<p>{t('stepTen.perYear')}</p></span>
                </div>
              )}
              <h3>{card.title}</h3>
              <span>
                <h2>{card.price}</h2>
                <p>{card.monthlyPrice}<span>{t('stepTen.perMonth')}</span></p>
              </span>
              <p className='lose'>{card.description}</p>
            </div>
          </div>
        </div>
      ))}

      <div className='additional-suppliments'>
        <span>
            <h3>{t('stepTen.additionalSupplements')}</h3>
            <p>({t('stepTen.noSupplementsSelected')})</p>
        </span>
        <span>
          <button>{t('stepTen.addSupplements')} <img src="/assets/arrowblue.svg" alt=""/></button>
        </span>
      </div>

      <div className='included-card'>
        <h3>{t('stepTen.whatsIncluded')}</h3>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>{t('stepTen.providerEvaluation')}</p>
        </span>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>{t('stepTen.medicationAdjustments')}</p>
        </span>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>{t('stepTen.onGoingCheckIns')}</p>
        </span>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>{t('stepTen.nutritionPlan')}</p>
        </span>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>{t('stepTen.syringes')}</p>
        </span>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>{t('stepTen.shipping')}</p>
        </span>
      </div>

      <div className='total-cost'>
        <h3>{t('stepTen.totalCost')}</h3>
        <h2>{t('stepTen.totalCostAmount')}</h2>
      </div>

      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> {t('stepTen.back')}
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={nextStep}><img src="/assets/secure.svg" alt=""/> {t('stepTen.proceedToPayment')} </button>
          <button className='arrow-btn arrow-btn-stepthree' onClick={nextStep}><img src="/assets/arrow.svg" alt=""/></button>
        </div>
      </div>

      <div className='pay-img'>
        <img src="/assets/pay1.svg" alt=""/>
        <img src="/assets/pay2.svg" alt=""/>
        <img src="/assets/pay3.svg" alt=""/>
        <img src="/assets/pay4.svg" alt=""/>
        <img src="/assets/pay5.svg" alt=""/>
        <img src="/assets/pay6.svg" alt=""/>
      </div>

      <Review/>
    </div>
  );
};

export default StepTen;

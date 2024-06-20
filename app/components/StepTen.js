'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/stepten.css';
import '../styles/form.css';
import Review from "./Review";

const StepTen = ({ prevStep, nextStep, handleChange, formValues, addSuppliment, cart, setCart, cart2 }) => {
  const { t } = useTranslation();

  // Initialize quantities state for items in the cart
  const [quantities, setQuantities] = useState(cart.map(item => item.quantity || 1));

  // Handlers for increasing and decreasing quantity
  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    const newCart = [...cart];
    newCart[index].quantity = newQuantities[index];
    setCart(newCart);
  };

  const decreaseQuantity = (index) => {
    if (quantities[index] > 1) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
      const newCart = [...cart];
      newCart[index].quantity = newQuantities[index];
      setCart(newCart);
    }
  };

  // Function to remove a supplement from the cart
  const removeSupplement = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    const newQuantities = [...quantities];
    newQuantities.splice(index, 1);
    setQuantities(newQuantities);
  };

  // Function to calculate total cost from cart and cart2
  const calculateTotalCost = () => {
    let total = 0;

    // Calculate total from cart2 (medication items)
    cart2.forEach(item => {
      const itemPrice = parseFloat(item.price.replace(/[$,]/g, ''));
      const itemQuantity = item.quantity || 1; // Default to 1 if quantity is not provided or falsy
      total += itemPrice * itemQuantity;
    });

    // Calculate total from cart (additional supplements)
    cart.forEach(item => {
      const itemPrice = parseFloat(item.price.replace(/[$,]/g, ''));
      const itemQuantity = item.quantity || 1; // Default to 1 if quantity is not provided or falsy
      total += itemPrice * itemQuantity;
    });

    // Check if total is NaN (Not a Number)
    if (isNaN(total)) {
      console.error("Total calculation resulted in NaN. Check item prices and quantities.");
      return "Error"; // Return an error message or handle accordingly
    }

    return total.toFixed(2); // Return total as a string with 2 decimal places
  };

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>Checkout</h2>
      </div>
      {cart2.map((item, index) => (
        <div className='card' key={index}>
          <h3 className='plan-title'>{formValues.stepSix.lastName} Treatment Plan</h3>
          <div className='card-top'>
            <div className='card-img'>
              <img src={item.imgSrc} alt={item.title} />
            </div>
            <div className='card-title-price'>
              {item.savings && (
                <div className='savings'>
                  <p>{t('stepTen.totalSavings')}</p>
                  <span>{item.savings}<p>{t('stepTen.perYear')}</p></span>
                </div>
              )}
              <h3>{item.title}</h3>
              <span>
                <h2>{item.price}</h2>
                <p>{item.monthlyPrice}<span>{t('stepTen.perMonth')}</span></p>
              </span>
              <p className='lose'>{item.description}</p>
            </div>
          </div>
          <div className='card-info'>
            {/* Checking if item.features exists and is an array */}
            {Array.isArray(item.features) && item.features.length > 0 ? (
              item.features.map((feature, idx) => (
                <span key={idx}>
                  <img src="/assets/checkmark.svg" alt="checkmark" />
                  <span>{feature}</span>
                </span>
              ))
            ) : (
              // Render a placeholder or handle case where features are not available
              <span>No features available</span>
            )}
          </div>
        </div>
      ))}
      
      {cart.length === 0 ? (
        <div className='additional-suppliments'>
          <span>
              <h3>{t('stepTen.additionalSupplements')}</h3>
              <p>{t('stepTen.noSupplementsSelected')}</p>
          </span>
          <span>
            <button className='add-suppliment' onClick={addSuppliment}>{t('stepTen.addSupplements')} <img src="/assets/arrowblue.svg" alt=""/></button>
          </span>
        </div>
      ) : (
        <div className='additional-suppliments cart-added'>
          <span>
              <h3>{t('stepTen.additionalSupplements')}</h3>
          </span>
          <div className='supplements-card all-added-supplements'>
            {cart.map((item, index) => (
              <div className='card' key={index}>
                <span className='remove-suppliment' onClick={() => removeSupplement(index)}>
                  <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
                </span>

                <div className='card-top'>
                  <div className='card-img'>
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  <div className='card-title-price title-price-stepthree'>
                    <h3>{item.title}</h3>
                    <div className='price-desc'>
                      <h3>{item.price}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <div className="btn-group btn-group-stepthree quantity">
                      <div className='quantity-control'>
                          <button className='quantity-btn quantity-increase' onClick={() => decreaseQuantity(index)}>-</button>
                          <span>{quantities[index]}</span>
                          <button className='quantity-btn quantity-dicrease' onClick={() => increaseQuantity(index)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <span>
            <button className='add-suppliment' onClick={addSuppliment}>{t('stepTen.addSupplements')} <img src="/assets/arrowblue.svg" alt=""/></button>
          </span>
        </div>
      )}

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
        <h2>{calculateTotalCost()}</h2>
      </div>

      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> {t('stepTen.back')}
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={nextStep}><img src="/assets/secure.svg" alt=""/> {t('stepTen.proceedToPayment')} </button>
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


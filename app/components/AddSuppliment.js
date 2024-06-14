'use client';
import '../styles/stepthree.css';
import '../styles/form.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import React, { useEffect, useState } from 'react';

const StepThree = ({ handleOrignalStep, handleChange, values, cartitem }) => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
    cartitem(item);
    console.log('Cart:', [...cart, item]); // Log the updated cart for debugging
  };

  const StepThreeCard = ({ imgSrc, title, price, desc }) => {
    const [quantity, setQuantity] = useState(0);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
      const foundItem = cart.find(item => item.title === title);
      if (foundItem) {
        setIsInCart(true);
        setQuantity(foundItem.quantity);
      } else {
        setIsInCart(false);
        setQuantity(0);
      }
    }, [cart, title]);

    const handleAddToCart = () => {
      if (quantity > 0) {
        const item = {
          imgSrc: imgSrc,
          title: title,
          price: price,
          desc: desc,
          quantity: quantity,
        };

        console.log(cart)

        if (isInCart) {
          addToCart(item, true); // Update existing item in cart
        } else {
          addToCart(item, false); // Add new item to cart
          setIsInCart(true);
        }
      } else {
        console.log('Quantity should be greater than zero to add to cart.');
        // Optionally, you could display an error message or alert the user.
      }
    };

    const removeFromCart = () => {
      setIsInCart(false); // Remove item from cart UI
      setQuantity(0); // Reset quantity
      // Optionally, you can inform the parent component (StepThree) to remove this item from the cart as well
    };

    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    return (
      <div className='card card-supplement'>
        <div className='card-top'>
          <div className='card-img'>
            <img src={imgSrc} alt={title} />
          </div>
          <div className='card-title-price title-price-stepthree'>
            <h3>{title}</h3>
            <div className='price-desc'>
              <h3>{price}</h3>
              <p>{desc}</p>
            </div>
          </div>
        </div>
        <div className="btn-group btn-group-stepthree">
          <div className='quantity-control'>
            <button className='quantity-btn quantity-decrease' onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button className='quantity-btn quantity-increase' onClick={increaseQuantity}>+</button>
          </div>
          {isInCart ? (
            <div className='forward-btns'>
              <button className="long-btn add-cart-btn" onClick={handleAddToCart}>
                Update Cart
              </button>
              <button className="arrow-btn cart-btn in-cart" onClick={removeFromCart}>
                <img src="/assets/delete.svg" alt="cart" />
              </button>
            </div>
          ) : (
            <div className='forward-btns'>
              <button className="long-btn add-cart-btn" onClick={handleAddToCart}>
                Add to cart
              </button>
              <button className="arrow-btn cart-btn">
                <img src="/assets/cart.svg" alt="cart" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const cardsData = [
    {
      imgSrc: "/assets/step3-product1.svg",
      title: t('stepThree.product1.title'), // Translate title using t function
      price: "$889.99",
      desc: t('stepThree.product1.description'), // Translate description using t function
    },
    {
      imgSrc: "/assets/step3-product2.svg",
      title: t('stepThree.product2.title'), // Translate title using t function
      price: "$889.99",
      savings: "$360",
      desc: t('stepThree.product2.description'), // Translate description using t function
    },
    {
      imgSrc: "/assets/step3-product3.svg",
      title: t('stepThree.product3.title'), // Translate title using t function
      price: "$889.99",
      desc: t('stepThree.product3.description'), // Translate description using t function
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>{t('stepThree.title')}</h2> {/* Translate title using t function */}
      </div>
      {cardsData.map((card, index) => (
        <StepThreeCard
          key={index}
          {...card}
        />
      ))}

      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={handleOrignalStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> {t('stepThree.back')}
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={handleOrignalStep}>
            {t('stepFour.continueJourney')}
          </button>
        </div>
      </div>

      <div className='review-inline review-md review-stepthree'>
        <h3>{t('review.excellent')}</h3> {/* Translate Excellent using t function */}
        <div className='stars'>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
        </div>
        <p className='reviews'>456 <span>{t('review.reviewsOn')}</span></p> {/* Translate reviewsOn using t function */}
        <div className='trustpilot'>
          <img src="/assets/star-trustpilot.svg" alt="trust"/> <span>Trustpilot</span>
        </div>
      </div>

      <div className='review review-sm'>
        <h3>{t('review.excellent')}</h3> {/* Translate Excellent using t function */}
        <div className='stars'>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
        </div>
        <p>{t('review.basedOn')} <b>456 {t('review.reviews')}</b></p>
        <div className='trustpilot'>
          <img src="/assets/star-trustpilot.svg" alt="trust"/> Trustpilot
        </div>
      </div>
    </div>
  );
};

export default StepThree;

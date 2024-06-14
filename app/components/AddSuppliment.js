'use client'

import '../styles/stepthree.css';
import '../styles/form.css';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';

const StepThree = ({ handleOrignalStep, handleChange, values, cart2, setCart2 }) => {
  const { t } = useTranslation();

  // Function to add items to the cart
  const addToCart = (item) => {
    // Check if the item already exists in the cart based on title
    const existingItem = cart2.find(cartItem => cartItem.title === item.title);

    if (existingItem) {
      // Item already exists, update the quantity
      const updatedCart = cart2.map(cartItem => {
        if (cartItem.title === item.title) {
          return {
            ...cartItem,
            quantity: item.quantity // Update the quantity to the new selected quantity
          };
        }
        return cartItem;
      });
      setCart2(updatedCart); // Update the cart state with the updated item
      console.log(cart2)
      handleOrignalStep
    } else {
      // Item does not exist, add it to the cart
      setCart2(prevCart2 => [...prevCart2, item]);
      console.log(cart2)
      handleOrignalStep
    }
  };

  // Component for each card representing a product
  const StepThreeCard = ({ imgSrc, title, price, desc }) => {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
      // Check if the item exists in the cart and update quantity accordingly
      const foundItem = cart2.find(item => item.title === title);
      if (foundItem) {
        setQuantity(foundItem.quantity);
      } else {
        setQuantity(0);
      }
    }, [cart2, title]); // Re-run effect when cart or title changes

    // Handler for adding item to cart
    const handleAddToCart = () => {
      if (quantity > 0) {
        const item = {
          imgSrc: imgSrc,
          title: title,
          price: price,
          desc: desc,
          quantity: quantity,
        };

        addToCart(item); // Add item to cart
      } else {
        console.log('Quantity should be greater than zero to add to cart.');
        // Optionally, you could display an error message or alert the user.
      }
    };

    // Handlers for increasing and decreasing quantity
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    const removeFromCart = () => {
      const updatedCart = cart2.filter(cartItem => cartItem.title !== title);
      setCart2(updatedCart);
      setQuantity(0)
      console.log("AS:",cart2)
    };

    // Check if the item is already in cart
    const isInCart = cart2.some(item => item.title === title);
    const quantityInCart = isInCart ? cart2.find(item => item.title === title).quantity : 0;


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
            <button className='quantity-btn quantity-increase' onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button className='quantity-btn quantity-dicrease' onClick={increaseQuantity}>+</button>
        </div>
        {isInCart ? (
          <div className='forward-btns'>
          <button className="long-btn add-cart-btn" onClick={handleAddToCart}>
           {quantityInCart} - In Cart
          </button>
          <button className="arrow-btn cart-btn in-cart" onClick={removeFromCart}>
            <img src="/assets/delete.svg" alt="cart" />
          </button>
        </div>
        ):(
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

  // Data for cards displaying products
  const cardsData = [
    {
      imgSrc: "/assets/step3-product1.svg",
      title: t('stepThree.product1.title'),
      price: "$889.99",
      desc: t('stepThree.product1.description'),
    },
    {
      imgSrc: "/assets/step3-product2.svg",
      title: t('stepThree.product2.title'),
      price: "$889.99",
      savings: "$360",
      desc: t('stepThree.product2.description'),
    },
    {
      imgSrc: "/assets/step3-product3.svg",
      title: t('stepThree.product3.title'),
      price: "$889.99",
      desc: t('stepThree.product3.description'),
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>{t('stepThree.title')}</h2>
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
        <h3>{t('review.excellent')}</h3>
        <div className='stars'>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
        </div>
        <p className='reviews'>456 <span>{t('review.reviewsOn')}</span></p>
        <div className='trustpilot'>
          <img src="/assets/star-trustpilot.svg" alt="trust"/> <span>Trustpilot</span>
        </div>
      </div>

      <div className='review review-sm'>
        <h3>{t('review.excellent')}</h3>
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

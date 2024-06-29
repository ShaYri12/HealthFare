'use client';
import '../styles/suppliments.css';
import '../styles/form.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import React, { useEffect, useState } from 'react';
import { currencyToNumber } from '../utils/currencyUtils'; // Assume you have this utility function

const SupplimentsCard = ({ imgSrc, title, price, desc, addToCart, handleOrignalStep }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (quantity > 0) {
            const item = {
                imgSrc: imgSrc,
                title: title,
                price: price,
                desc: desc,
                quantity: quantity,
            };
            addToCart(item); // Notify parent component (StepThree) about the added item
            handleOrignalStep(); // Proceed to the next step
        } else {
            console.log('Quantity should be greater than zero to add to cart.');
            // Optionally, you could display an error message or alert the user.
        }
    };

    return (
        <div className='card card-suppliment' onClick={handleAddToCart}>
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
        </div>
    );
};

const Suppliments = ({ handleOrignalStep, handleChange, values, cartitem }) => {
    const [cart, setCart] = useState([]);
    const { t } = useTranslation();

    const addToCart = (newItem) => {
        console.log('Adding item to cart:', newItem); // Log the item being added

        setCart((prevCart) => {
            // Normalize both titles for comparison
            const normalizedNewTitle = newItem.title.trim().toLowerCase();
            const newItemPrice = currencyToNumber(newItem.price);

            // Find index of existing item in cart
            const existingItemIndex = prevCart.findIndex(item =>
                item.title.trim().toLowerCase() === normalizedNewTitle
            );

            if (existingItemIndex !== -1) {
                const existingItem = prevCart[existingItemIndex];
                const existingItemPrice = currencyToNumber(existingItem.price);

                if (existingItemPrice === 0 || newItemPrice === 0) {
                    // If existing item price or new item price is $0, add new item as duplicate
                    return [...prevCart, newItem];
                } else {
                    // Update quantity of existing item
                    const updatedCart = prevCart.map((item, index) => {
                        if (index === existingItemIndex) {
                            return {
                                ...item,
                                quantity: item.quantity + newItem.quantity
                            };
                        }
                        return item;
                    });

                    console.log('Updated Cart:', updatedCart); // Log the updated cart
                    return updatedCart;
                }
            } else {
                // Item does not exist in cart, add it
                const updatedCart = [...prevCart, newItem];
                console.log('Updated Cart:', updatedCart); // Log the updated cart
                return updatedCart;
            }
        });

        cartitem(newItem); // Notify parent component (StepThree) about the added item
    };

    const cardsData = [
        {
            imgSrc: "/assets/med2.svg",
            title: t('stepThree.product3.title'), // Translate title using t function
            price: "$90",
            desc: t('stepThree.product3.description'), // Translate description using t function
        },
    ];

    return (
        <div className="formContainer step-form">
            <div className="title-info">
                <h2>{t('stepThree.title')}</h2>
            </div>
            {cardsData.map((card, index) => (
                <SupplimentsCard
                    key={index}
                    {...card}
                    addToCart={addToCart}
                    handleOrignalStep={handleOrignalStep}
                />
            ))}

            <div className='btn-group btn-group-stepthree'>
                <button className='back-btn back-btn-stepthree' onClick={handleOrignalStep}>
                    <img src="/assets/arrow.svg" alt="arrow" /> {t('stepThree.back')}
                </button>
                <div className='forward-btns'>
                    <button className='long-btn long-btn-stepthree' onClick={handleOrignalStep}>{t('stepFour.continueJourney')}</button> {/* Translate Skip button using t function */}
                </div>
            </div>

            <div className='review-inline review-md review-stepthree'>
                <h3>{t('review.excellent')}</h3>
                <div className='stars'>
                    <img src="/assets/star.png" alt="star" />
                    <img src="/assets/star.png" alt="star" />
                    <img src="/assets/star.png" alt="star" />
                    <img src="/assets/star.png" alt="star" />
                    <img src="/assets/star.png" alt="star" />
                </div>
                <p className='reviews'>456 <span>{t('review.reviewsOn')}</span></p>
                <div className='trustpilot'>
                    <img src="/assets/star-trustpilot.svg" alt="trust" /> <span>Trustpilot</span>
                </div>
            </div>

            <div className='review review-sm'>
                <h3>{t('review.excellent')}</h3>
                <div className='stars'>
                    <img src="/assets/star.png" alt="star" />
                    <img src="/assets/star.png" alt="star" />
                    <img src="/assets/star.png" alt="star" />
                    <img src="/assets/star.png" alt="star" />
                    <img src="/assets/star.png" alt="star" />
                </div>
                <p>{t('review.basedOn')} <b>456 {t('review.reviews')}</b></p>
                <div className='trustpilot'>
                    <img src="/assets/star-trustpilot.svg" alt="trust" /> Trustpilot
                </div>
            </div>
        </div>
    );
};

export default Suppliments;

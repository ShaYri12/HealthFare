import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import '../styles/stepten.css'

const AvailableAddons = ({ handleOrignalStep, handleChange, formValues }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const { t } = useTranslation();

  const [addoncart, setAddonCart] = useState(formValues.stepTen.addoncart || []);

  // Function to handle adding or removing an addon to/from the addoncart
  const handleToggleAddon = (addon) => {
    const index = addoncart.findIndex((a) => a.title === addon.title);

    if (index !== -1) {
      // Addon already in addoncart, remove it
      const newAddonCart = addoncart.filter((a) => a.title !== addon.title);
      setAddonCart(newAddonCart);
      handleChange({ addoncart: newAddonCart });
    } else {
      // Add addon to addoncart with quantity 1
      const newAddon = { ...addon, quantity: 1 };
      const newAddonCart = [...addoncart, newAddon];
      setAddonCart(newAddonCart);
      handleChange({ addoncart: newAddonCart });
    }
  };

  const availableAddons = [
    {
      id: "1",
      title: t("stepTen.addons.title1"),
      price: "$39.99",
      imgSrc: "/assets/med1.svg",
      description: t("stepTen.addons.addon1Desc"),
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="available-addons-container">
        <h2>{t("stepTen.availableAddon")}</h2>
        {availableAddons.map((addon, index) => {
          const isInCart = addoncart.some((item) => item.id === addon.id);

          return (
            <div className="available-addons-card" key={index}>
              <img width={"102px"} src={addon.imgSrc} alt={addon.title} />
              <div className="addon-card-top">
                <div className="title-price">
                  <h2 className="title">{addon.title}</h2>
                  <p className="price" style={{ color: "#38B64B" }}>
                    {addon.price}
                  </p>
                </div>
                <p>{addon.description}</p>
                <div className="btn-group addons-btn">
                  <div className="forward-btns">
                    <button
                      type="button"
                      className={`long-btn ${isInCart ? "delete-btn" : "add-btn"}`}
                      onClick={() => handleToggleAddon(addon)}
                    >
                      {isInCart ? t("stepTen.inCart") : t("stepTen.add")}
                    </button>
                    <button
                      className={`arrow-btn ${isInCart ? "delete-btn" : "cart-btn"}`}
                      onClick={() => handleToggleAddon(addon)}
                    >
                      <img src={`/assets/${isInCart ? "delete" : "cart"}.svg`} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn-group btn-group-stepthree">
        <button className="back-btn back-btn-stepthree" onClick={handleOrignalStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> {t("stepThree.back")}
        </button>
        <div className="forward-btns">
          <button className="long-btn long-btn-stepthree" onClick={handleOrignalStep}>
            {t("stepFour.continueJourney")}
          </button>
        </div>
      </div>

      <div className="review-inline review-md review-stepthree">
        <h3>{t("review.excellent")}</h3>
        <div className="stars">
          <img src="/assets/star.png" alt="star" />
          <img src="/assets/star.png" alt="star" />
          <img src="/assets/star.png" alt="star" />
          <img src="/assets/star.png" alt="star" />
          <img src="/assets/star.png" alt="star" />
        </div>
        <p className="reviews">
          456 <span>{t("review.reviewsOn")}</span>
        </p>
        <div className="trustpilot">
          <img src="/assets/star-trustpilot.svg" alt="trust" /> <span>Trustpilot</span>
        </div>
      </div>

      <div className="review review-sm">
        <h3>{t("review.excellent")}</h3>
        <div className="stars">
          <img src="/assets/star.png" alt="star" />
          <img src="/assets/star.png" alt="star" />
          <img src="/assets/star.png" alt="star" />
          <img src="/assets/star.png" alt="star" />
          <img src="/assets/star.png" alt="star" />
        </div>
        <p>
          {t("review.basedOn")} <b>456 {t("review.reviews")}</b>
        </p>
        <div className="trustpilot">
          <img src="/assets/star-trustpilot.svg" alt="trust" /> Trustpilot
        </div>
      </div>
    </div>
  );
};

export default AvailableAddons;

"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/stepten.css";
import "../styles/form.css";
import Review from "./Review";

const StepTen = ({
  prevStep,
  nextStep,
  handleChange,
  formValues,
  addSuppliment,
  cart,
  setCart,
  cart2,
}) => {
  const { t } = useTranslation();

  // Initialize quantities state for items in the cart
  const [quantities, setQuantities] = useState(
    cart.map((item) => item.quantity || 1)
  );

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
    cart2.forEach((item) => {
      const itemPrice = parseFloat(item.price.replace(/[$,]/g, ""));
      const itemQuantity = item.quantity || 1; // Default to 1 if quantity is not provided or falsy
      total += itemPrice * itemQuantity;
    });

    // Calculate total from cart (additional supplements)
    cart.forEach((item) => {
      const itemPrice = parseFloat(item.price.replace(/[$,]/g, ""));
      const itemQuantity = item.quantity || 1; // Default to 1 if quantity is not provided or falsy
      total += itemPrice * itemQuantity;
    });

    // Check if total is NaN (Not a Number)
    if (isNaN(total)) {
      console.error(
        "Total calculation resulted in NaN. Check item prices and quantities."
      );
      return "Error"; // Return an error message or handle accordingly
    }

    return total.toFixed(2); // Return total as a string with 2 decimal places
  };

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>Checkout</h2>
        <div className="plan">
          <h3 className="greeting">Hey {formValues.stepSix.lastName},</h3>
          <p className="review-plan">
            Review Your Treatment Plan and Included Services
          </p>
        </div>
      </div>
      {cart2.map((item, index) => (
        <div className="card">
          <div className="card-top">
            <div className="card-img">
              <img src={item.imgSrc} alt={item.title} />
            </div>
            <div className="card-title-price">
              <span>{item.monthPlan}</span>
              <h3>{item.title}</h3>
              <p className="title-desc">{item.titleDesc}</p>
            </div>
          </div>
          <div className="card-info">
            <span className="lose-upto">
              <img src="/assets/checkmark.svg" alt="checkmark" />
              <p className="lose">{item.description}</p>
            </span>

            {item.features.map((feature, index) => (
              <span key={index}>
                <img src="/assets/checkmark.svg" alt="checkmark" />
                <p>{feature}</p>
              </span>
            ))}
          </div>
          <span className="price-savings">
            <div className="price">
              <h2>{item.price}/</h2>
              <span>{item.month}*</span>
            </div>
            {item.savings && (
              <div className="saving">
                <p>{item.totalSavings}</p>
                <span>
                  {item.savings}
                  <p>/{item.year}</p>
                </span>
              </div>
            )}
          </span>
          <p className="note">
            *This Plan requires a minimum three-month commitment for effective
            results.
          </p>
        </div>
      ))}

      {cart.length === 0 ? (
        <div className="additional-suppliments">
          <span>
            <h3>{t("stepTen.additionalSupplements")}</h3>
            <p>{t("stepTen.noSupplementsSelected")}</p>
          </span>
          <span>
            <button className="add-suppliment" onClick={addSuppliment}>
              {t("stepTen.addSupplements")}{" "}
              <img src="/assets/arrowblue.svg" alt="" />
            </button>
          </span>
        </div>
      ) : (
        <div className="additional-suppliments cart-added">
          <span>
            <h3>{t("stepTen.additionalSupplements")}</h3>
          </span>
          <div className="supplements-card all-added-supplements">
            {cart.map((item, index) => (
              <div className="card card-2" key={index}>
                <div className="card-top card-2-top">
                  <div className="card-img">
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  <div className="card-title-price title-price-stepthree">
                    <div className="title-price">
                      <h3 className="title">{item.title}</h3>
                      <h3 className="price">{item.price}</h3>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
                <div className="btn-group  quantity cart-action">
                  <div className="quantity-control">
                    <button
                      className="quantity-btn quantity-increase"
                      onClick={() => decreaseQuantity(index)}
                    >
                      -
                    </button>
                    <span>{quantities[index]}</span>
                    <button
                      className="quantity-btn quantity-dicrease"
                      onClick={() => increaseQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-suppliment"
                    onClick={() => removeSupplement(index)}
                  >
                    <img src="/assets/delete.svg" alt="Remove" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <span>
            <button className="add-suppliment" onClick={addSuppliment}>
              {t("stepTen.addSupplements")}{" "}
              <img src="/assets/arrowblue.svg" alt="" />
            </button>
          </span>
        </div>
      )}

      {/*pehle ye set kr */}
      <div className="supplements-card all-added-supplements">
        <div className="card card-2">
          <div className="card-top card-2-top">
            <div className="card-img">
              <img src="/assets/med1.svg" alt="med1" />
            </div>
            <div className="card-title-price title-price-stepthree">
              <div className="title-price">
                <h3 className="title">ZOFRAN</h3>
                <h3 className="price">$39.99</h3>
              </div>
              <p>
                Enhance your weight loss journey with Zofran by preventing
                nausea often experienced with Semaglutide and Tirzepatide.
                Zofran helps you stay on track and potentially lose up to 10
                pounds more effectively.
              </p>
            </div>
          </div>
          <div className="btn-group btn-group-stepthree">
            <div className="forward-btns">
              <button
                type="submit"
                className="long-btn long-btn-stepthree add-cart-btn"
              >
                {t("stepThree.addToCart")}
              </button>
              <button
                className="arrow-btn arrow-btn-stepthree cart-btn"
                onClick={nextStep}
              >
                <img src="/assets/cart.svg" alt="" />
              </button>
            </div>
          </div>
          <button
            className="remove-suppliment"
            onClick={() => removeSupplement()}
          >
            <img src="/assets/delete.svg" alt="Remove" />
          </button>
        </div>
      </div>

      <div className="included-card">
        <h3>{t("stepTen.whatsIncluded")}</h3>
        <span>
          <img src="/assets/checkmark.svg" alt="checkmark" />
          <p>{t("stepTen.providerEvaluation")}</p>
        </span>
        <span>
          <img src="/assets/checkmark.svg" alt="checkmark" />
          <p>{t("stepTen.medicationAdjustments")}</p>
        </span>
        <span>
          <img src="/assets/checkmark.svg" alt="checkmark" />
          <p>{t("stepTen.onGoingCheckIns")}</p>
        </span>
        <span>
          <img src="/assets/checkmark.svg" alt="checkmark" />
          <p>{t("stepTen.nutritionPlan")}</p>
        </span>
        <span>
          <img src="/assets/checkmark.svg" alt="checkmark" />
          <p>{t("stepTen.syringes")}</p>
        </span>
        <span>
          <img src="/assets/checkmark.svg" alt="checkmark" />
          <p>{t("stepTen.shipping")}</p>
        </span>
      </div>

      <div className="total-cost">
        <h3>{t("stepTen.totalCost")}</h3>
        <h2>{calculateTotalCost()}</h2>
      </div>

      <div className="btn-group btn-group-stepthree">
        <button className="back-btn back-btn-stepthree" onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> {t("stepTen.back")}
        </button>
        <div className="forward-btns">
          <button className="long-btn long-btn-stepthree" onClick={nextStep}>
            <img src="/assets/secure.svg" alt="" />{" "}
            {t("stepTen.proceedToPayment")}{" "}
          </button>
        </div>
      </div>

      <div className="pay-img">
        <img src="/assets/pay1.svg" alt="" />
        <img src="/assets/pay2.svg" alt="" />
        <img src="/assets/pay3.svg" alt="" />
        <img src="/assets/pay4.svg" alt="" />
        <img src="/assets/pay5.svg" alt="" />
        <img src="/assets/pay6.svg" alt="" />
      </div>

      <Review />
    </div>
  );
};

export default StepTen;

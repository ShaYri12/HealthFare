"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/stepten.css";
import "../styles/form.css";
import '../styles/stepthree.css';
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
  setCart2,
}) => {
  const { t } = useTranslation();

  const [addoncart, setAddonCart] = useState(
    formValues.stepTen.addoncart || []
  );

  useEffect(() => {
    handleChange('stepTen')({ addoncart });
  }, [addoncart]);

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

      // Check monthPlan and adjust price calculation accordingly
      if (item.monthPlan.toLowerCase() === "one month plan") {
        total += itemPrice * itemQuantity; // Monthly price
      } else if (item.monthPlan.toLowerCase() === "three month plan") {
        total += itemPrice * itemQuantity * 3; // Three months price
      }
    });

    // Calculate total from cart (additional supplements)
    cart.forEach((item) => {
      const itemPrice = parseFloat(item.price.replace(/[$,]/g, ""));
      const itemQuantity = item.quantity || 1; // Default to 1 if quantity is not provided or falsy
      total += itemPrice * itemQuantity;
    });

    // Calculate total from addoncart (selected addons)
    addoncart.forEach((addon) => {
      const addonPrice = parseFloat(addon.price.replace(/[$,]/g, ""));
      total += addonPrice; // Add the price of each addon
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

  // Function to handle adding an addon to the addoncart
  const handleAddAddon = (addon) => {
    const index = addoncart.findIndex((a) => a.id === addon.id);

    if (index !== -1) {
      // Addon already in addoncart, remove it
      const newAddonCart = [...addoncart];
      newAddonCart.splice(index, 1);
      setAddonCart(newAddonCart);
      handleChange('stepTen')({ addoncart: newAddonCart });
    } else {
      // Add addon to addoncart
      setAddonCart((prevAddons) => [...prevAddons, addon]);
      handleChange('stepTen')({ addoncart: [...addoncart, addon] });
    }
  };

  
  const [selectedMonthPlan, setSelectedMonthPlan] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const handleMonthPlanChange = (event) => {
    const newMonthPlan = event.target.value.toLowerCase(); // Convert to lowercase
    setSelectedMonthPlan(newMonthPlan);

    const productTitle = formValues.stepTwo.title; // Assuming title is set in StepTwo

    // Set pricing and description based on productTitle and newMonthPlan
    let newPrice = "";
    let newDescription = "";

    if (productTitle === "Compounded Semaglutide") {
      if (newMonthPlan === "one month plan") {
        newPrice = "$296";
        newDescription = "Lose up to 10 pounds monthly";
      } else if (newMonthPlan === "three month plan") {
        newPrice = "$279";
        newDescription = "Lose up to 30 pounds";
      }
    } else if (productTitle === "Compounded Tirzepatide") {
      if (newMonthPlan === "one month plan") {
        newPrice = "$425";
        newDescription = "Lose up to 16 pounds monthly";
      } else if (newMonthPlan === "three month plan") {
        newPrice = "$399";
        newDescription = "Lose up to 48 pounds";
      }
    } else {
      // Default values when no specific product is selected
      if (newMonthPlan === "one month plan") {
        newPrice = "$296";
        newDescription = "Lose up to 10 pounds monthly";
      } else if (newMonthPlan === "three month plan") {
        newPrice = "$279";
        newDescription = "Lose up to 30 pounds";
      }
    }

    setSelectedDescription(newDescription);

    // Update formValues.stepTwo with new monthPlan, price, and description
  handleChange('stepTwo')({
    ...formValues.stepTwo,
    monthPlan: newMonthPlan,
    price: newPrice,
    description: newDescription
  });

  // Optionally update cart2 if it's required in the context of StepTwo
  const updatedCart2 = cart2.map(item => ({
    ...item,
    monthPlan: newMonthPlan,
    price: newPrice,
    description: newDescription
  }));

  setCart2(updatedCart2);
  };

  const availableAddons = [
    {
      id: "1",
      title: t("stepTen.addons.title1"),
      price: "$39.99",
      imgSrc: "/assets/med1.svg",
      description: t("stepTen.addons.addon1Desc"),
    },
    {
      id: "2",
      title: t("stepTen.addons.title1"),
      price: "$39.99",
      imgSrc: "/assets/med1.svg",
      description: t("stepTen.addons.addon2Desc"),
    },
  ];

  const itemTitle = cart2.length > 0 ? cart2[0].title : "";
  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>{t("stepTen.title")}</h2>
        <div className="plan">
          <h3 className="greeting">
            {t("stepTen.greeting")} {formValues.stepSix.lastName},
          </h3>
          <p className="review-plan">{t("stepTen.planDesc")}</p>
        </div>
      </div>
      {cart2.map((item, index) => (
        <div className="card cart2-card" key={index}>
          <div className="card-top">
            <div className="card-img">
              <img src={item.imgSrc} alt={item.title} />
            </div>
            <div className="card-title-price">
              <span className="month-plan">{item.monthPlan}</span>
              <span className="month-dropdown">
                <select
                  id="monthPlan"
                  className="month-plan"
                  value={item.monthPlan}
                  onChange={handleMonthPlanChange}
                >
                  <option value="one month plan">{t("stepTen.oneMonthPlan")}</option>
                  <option value="three month plan">{t("stepTen.threeMonthPlan")}</option>
                </select>
              </span>
              <h3>{item.title}</h3>
              <p className="title-desc">{item.titleDesc}</p>
            </div>
          </div>
          <div className="card-info">
            <span className="lose-upto">
              <img src="/assets/checkmark.svg" alt="checkmark" />
              <p className="lose">{item.description}</p>
            </span>
            {item.features.map((feature, idx) => (
              <span key={idx}>
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
        </div>
      ))}

      {cart.length === 0 ? (
        <div className="additional-suppliments">
          <span>
            <h3>{t("stepTen.additionalSupplements")}</h3>
            <p>{t("stepTen.noSupplementsSelected")}</p>
          </span>
          <button className="add-suppliment" onClick={addSuppliment}>
            {t("stepTen.addSupplements")}{" "}
            <img src="/assets/arrowblue.svg" alt="" />
          </button>
        </div>
      ) : (
        <div className="additional-suppliments cart-added">
          <div className="fsdfg">
            <h3 className="title-card-add">
              {t("stepTen.additionalSupplements")}
            </h3>
            <span>
              <button className="add-suppliment" onClick={addSuppliment}>
                {t("stepTen.addSupplements")}{" "}
                <img src="/assets/arrowblue.svg" alt="" />
              </button>
            </span>
          </div>
          <div className="supplements-card all-added-supplements">
            {cart.map((item, index) => (
              <div className="card card-2" key={index}>
                <div className="card-top card-2-top">
                  <div className="card-img">
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  <div className="card-title-price title-price-stepthree">
                    <div className="title-price">
                      <h3>{item.title}</h3>
                      <h3 className="price-items">{item.price}</h3>
                    </div>
                    <div className="price-desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="btn-group cart-actions quantity">
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
                  <span
                    className="remove-suppliment"
                    onClick={() => removeSupplement(index)}
                  >
                    <img src="/assets/delete.svg" alt="" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Available Addons */}
      <div className="addon-section">
      <div className="available-addons-container">
        <h2>{t("stepTen.availableAddon")}</h2>
        {availableAddons.map((addon, index) => {
          const isInCart = addoncart.some((item) => item.id === addon.id);

          return (
            <div className="available-addons-card" key={index}>
              <img width={"102px"} src={addon.imgSrc} alt={addon.title} />
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
                    className={`long-btn ${
                      isInCart ? "delete-btn" : "add-btn"
                    }`}
                    onClick={() => handleAddAddon(addon)}
                  >
                    {isInCart ? t("stepTen.inCart") : t("stepTen.add")}
                  </button>
                  <button
                    className={`arrow-btn ${
                      isInCart ? "delete-btn" : "cart-btn"
                    }`}
                    onClick={() => handleAddAddon(addon)}
                  >
                    <img
                      src={`/assets/${isInCart ? "delete" : "cart"}.svg`}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
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
        <h3 className="item-title">{itemTitle} </h3>

        {/* Display cart2 items */}
        {cart2.map((item, index) => {
          // Determine the multiplier based on monthPlan
          let multiplier = 1;
          if (item.monthPlan.toLowerCase() === "one month plan") {
            multiplier = 1;
          } else if (item.monthPlan.toLowerCase() === "three month plan") {
            multiplier = 3;
          }

          // Calculate the adjusted price
          const adjustedPrice = `$${(
            parseFloat(item.price.replace(/[$,]/g, "")) * multiplier
          ).toFixed(2)}`;

          return (
            <span key={index}>
              <h4 className="month-plan">{item.monthPlan}</h4>
              <h4>{adjustedPrice}</h4>
            </span>
          );
        })}

        {/* Display cart items */}
        {cart.map((item, index) => (
          <span key={index}>
            <h4>
              {item.title} x {item.quantity}
            </h4>
            <h4>
              $
              {(
                parseFloat(item.price.replace(/[$,]/g, "")) * item.quantity
              ).toFixed(2)}
            </h4>
          </span>
        ))}

        {/* Display addoncart items */}
        {addoncart.length > 0 && (
          <span>
            <h4>ZOFRAN x {addoncart.length}</h4>
            <h4>
              {addoncart.reduce(
                (acc, addon) =>
                  acc + parseFloat(addon.price.replace(/[$,]/g, "")),
                0
              )}
            </h4>
          </span>
        )}

        <hr />
        <span className="total">
          <h3>{t("stepTen.totalCost")}</h3>
          <h2>
            {calculateTotalCost()} <p>{t("stepTen.dueToday")}</p>
          </h2>
        </span>
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

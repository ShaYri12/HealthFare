"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/stepten.css";
import "../styles/form.css";
import '../styles/stepthree.css';
import Review from "./Review";
import PaySlider from "./PaySlider";
import MonthPlanModal from "./MonthPlanModal";

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

  const stateOptions = [
    "Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
    "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
    "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ];

  const alphanumericPattern = /^[a-zA-Z0-9\s,'-]*$/;
  const alphabeticPattern = /^[a-zA-Z\s]*$/;

  const initialShippingAddress = {
    streetAddress1: formValues.stepSix.streetAddress1 || "",
    streetAddress2: formValues.stepSix.streetAddress1 || "",
    city: formValues.stepSix.city || "",
    state: formValues.stepSix.state || "",
    zipCode: formValues.stepSix.zipCode || "",
    errors: {
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      zipCode: "",
    },
  };

  const [shippingAddress, setShippingAddress] = useState(initialShippingAddress);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [monthPlanModal, setMonthPlanModal] = useState(false);

  // Validate individual field
  const validateField = (name, value) => {
    switch (name) {
      case 'streetAddress1':
        if (!value.trim()) {
          return t('error.streetAddressError');
        } else if (!alphanumericPattern.test(value)) {
          return t('error.textError');
        }
        return '';
      case 'streetAddress2':
        if (!value.trim()) {
          return t('error.streetAddressError');
        } else if (!alphanumericPattern.test(value)) {
          return t('error.textError');
        }
        return '';
      case 'city':
        if (!value.trim()) {
          return t('error.cityError');
        } else if (!alphabeticPattern.test(value)) {
          return t('error.textError');
        }
        return '';
      case 'state':
        if (!value.trim()) {
          return t('error.stateError');
        }
        return '';
      case 'zipCode':
        if (!value.trim()) {
          return t('error.zipCodeError');
        }
        return '';
      default:
        return '';
    }
  };

  // Validate entire form
  const validateForm = () => {
    const errors = {
      streetAddress1: validateField('streetAddress1', shippingAddress.streetAddress1),
      streetAddress2: validateField('streetAddress2', shippingAddress.streetAddress2),
      city: validateField('city', shippingAddress.city),
      state: validateField('state', shippingAddress.state),
      zipCode: validateField('zipCode', shippingAddress.zipCode),
    };

    setShippingAddress({ ...shippingAddress, errors });
    return Object.values(errors).every(error => error === '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Save or update the address
      console.log("Shipping address saved:", shippingAddress);
      setIsModalOpen(false);
      // Optionally, you can update formValues with the new shippingAddress state
      handleChange('stepSix')({
        streetAddress1: shippingAddress.streetAddress1,
        streetAddress2: shippingAddress.streetAddress2,
        city: shippingAddress.city,
        state: shippingAddress.state,
        zipCode: shippingAddress.zipCode,
      });
    } else {
      console.log("Form contains errors. Cannot save address.");
    }
  };

  const handleInputChange = (name) => (event) => {
    let { value } = event.target;
  
    // Ensure zip code is numeric
    if (name === 'zipCode') {
      value = value.replace(/\D/g, ''); // Remove non-numeric characters
    }
  
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
      errors: {
        ...shippingAddress.errors,
      },
    });
  };

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
      if (item.monthPlan.toLowerCase() === "1-month supply") {
        total += itemPrice * itemQuantity; // Monthly price
      } else if (item.monthPlan.toLowerCase() === "3-month supply") {
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

  const handleMonthPlanChange = (item, newPlan) => {
    // Assuming formValues and cart2 are properly defined and accessible

    // Update formValues.stepTwo with new monthPlan, price, and description
    let newPrice = "";
    let newDescription = "";

    if (item.title === t("stepTwo.cards.0.title")) {
      if (newPlan === "1-month supply") {
        newPrice = "$296";
        newDescription = t("stepTwo.cards.0.description");
      } else if (newPlan === "3-month supply") {
        newPrice = "$279";
        newDescription = t("stepTwo.cards.0.description2");
      }
    } else if (item.title === t("stepTwo.cards.1.title")) {
      if (newPlan === "1-month supply") {
        newPrice = "$425";
        newDescription = t("stepTwo.cards.1.description");
      } else if (newPlan === "3-month supply") {
        newPrice = "$399";
        newDescription = t("stepTwo.cards.1.description2");
      }
    } else {
      // Default values when no specific product is selected
      if (newPlan === "1-month supply") {
        newPrice = "$296";
        newDescription = t("stepTwo.cards.0.description");
      } else if (newPlan === "3-month supply") {
        newPrice = "$279";
        newDescription = t("stepTwo.cards.0.description2");
      }
    }

    // Update formValues.stepTwo with new values
    handleChange('stepTwo')({
      ...formValues.stepTwo,
      monthPlan: newPlan,
      price: newPrice,
      description: newDescription
    });

    // Update cart2 with new values
    const updatedCart2 = cart2.map(cartItem => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          monthPlan: newPlan,
          price: newPrice,
          description: newDescription
        };
      }
      return cartItem;
    });

    setCart2(updatedCart2); // Assuming setCart2 is defined and updates cart2 state
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
              <button className="change-frequency" onClick={()=> setMonthPlanModal(true)}>{t("stepTen.changeFrequency")}</button>
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

      {monthPlanModal && (
        <MonthPlanModal
          isOpen={monthPlanModal}
          onClose={() => setMonthPlanModal(false)}
          item={cart2[0]} // Pass the appropriate item from cart2 that modal needs
          handleMonthPlanChange={handleMonthPlanChange} // Pass the handler function
        />
      )}

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

      <div className="shipping-address-section">
        <span className="shipping-add-top">
          <h3>{t("stepTen.shippingAddress")}</h3>
          <button className="btn-edit" onClick={() => setIsModalOpen(true)}>
            {t("stepTen.edit")}
          </button>
        </span>
        <div className="shipping-address">
          <p>{formValues.stepSix.streetAddress1}</p>
          <p>{formValues.stepSix.streetAddress2}</p>
          <p>
            {formValues.stepSix.city}, {formValues.stepSix.state}{" "}
            {formValues.stepSix.zipCode}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{t("stepTen.shippingAddress")}</h3>
            <form onSubmit={handleSubmit} className="input-form modal-form">
              <div className="input-label-full input-label">
                <label>{t("stepSix.question2.streetAddress1")}</label>
                <input
                  type="text"
                  name="streetAddress1"
                  value={shippingAddress.streetAddress1}
                  onChange={handleInputChange("streetAddress1")}
                  placeholder={t("stepSix.question2.streetAddressPlaceholder")}
                />
                {shippingAddress.errors.streetAddress1 && (
                  <span className="error">
                    {shippingAddress.errors.streetAddress1}
                  </span>
                )}
              </div>
              <div className="input-label-full input-label">
                <label>{t("stepSix.question2.streetAddress2")}</label>
                <input
                  type="text"
                  name="streetAddress2"
                  value={shippingAddress.streetAddress2}
                  onChange={handleInputChange("streetAddress2")}
                  placeholder={t("stepSix.question2.streetAddressPlaceholder")}
                />
                {shippingAddress.errors.streetAddress2 && (
                  <span className="error">
                    {shippingAddress.errors.streetAddress2}
                  </span>
                )}
              </div>
              <div className="input-group">
                <div className="input-label">
                  <label>{t("stepSix.question2.city")}</label>
                  <input
                    type="text"
                    name="city"
                    value={shippingAddress.city}
                    onChange={handleInputChange("city")}
                    placeholder={t("stepSix.question2.cityPlaceholder")}
                  />
                  {shippingAddress.errors.city && (
                    <span className="error">{shippingAddress.errors.city}</span>
                  )}
                </div>
                <div className="input-label">
                  <label>{t("stepSix.question2.zipCode")}</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={shippingAddress.zipCode}
                    onChange={handleInputChange("zipCode")}
                    placeholder={t("stepSix.question2.zipCodePlaceholder")}
                  />
                  {shippingAddress.errors.zipCode && (
                    <span className="error">
                      {shippingAddress.errors.zipCode}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-label location">
                <label>{t("stepSix.question2.state")}</label>
                <select
                  name="state"
                  value={shippingAddress.state}
                  onChange={handleInputChange("state")}
                >
                  <option value="">{t("stepSix.question2.select")}</option>
                  {stateOptions.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {shippingAddress.errors.state && (
                  <span className="error">{shippingAddress.errors.state}</span>
                )}
              </div>

              <div className="btn-group">
                <div className="forward-btns">
                  <button
                    className="btn-cancel"
                    onClick={() => {
                      setIsModalOpen(false);
                      setShippingAddress(initialShippingAddress);
                    }}
                  >
                    {t("stepTwelve.cancel")}
                  </button>
                  <button className="save-btn" type="submit"> {t("stepTen.save")}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="total-cost">
        <h3 className="item-title">{itemTitle} </h3>

        {/* Display cart2 items */}
        {cart2.map((item, index) => {
          // Determine the multiplier based on monthPlan
          let multiplier = 1;
          if (item.monthPlan.toLowerCase() === "1-month supply") {
            multiplier = 1;
          } else if (item.monthPlan.toLowerCase() === "3-month supply") {
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

      <PaySlider />

      <Review />
    </div>
  );
};

export default StepTen;

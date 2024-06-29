"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/stepten.css";
import "../styles/form.css";
import '../styles/suppliments.css';
import Review from "./Review";
import PaySlider from "./PaySlider";
import MonthPlanModal from "./MonthPlanModal";
import ShippingAddressModal from "./ShippingAddressModal";
import BillingAddressModal from "./BillingAddressModal";

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
  addAddon
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

  const useFormInput = (initialValues) => {
    const [values, setValues] = useState(initialValues);
  
    const handleChange = (name) => (event) => {
      let { value } = event.target;
      if (name === "zipCode" || name === "billingZipCode") {
        value = value.replace(/\D/g, ""); // Remove non-numeric characters
      }
      setValues({
        ...values,
        [name]: value,
        errors: {
          ...values.errors,
          [name]: ""
        }
      });
    };
  
    const validateField = (name) => {
      switch (name) {
        case "streetAddress1":
          if (!values[name].trim()) {
            return t("error.streetAddressError");
          } else if (!alphanumericPattern.test(values[name])) {
            return t("error.textError");
          }
          break;
        case "streetAddress2":
          if (values[name].trim() && !alphanumericPattern.test(values[name])) {
            return t("error.textError");
          }
          break;
        case "city":
          if (!values[name].trim()) {
            return t("error.cityError");
          } else if (!alphabeticPattern.test(values[name])) {
            return t("error.textError");
          }
          break;
        case "state":
          if (!values[name].trim()) {
            return t("error.stateError");
          }
          break;
        case "zipCode":
          if (!values[name].trim()) {
            return t("error.zipCodeError");
          }
          break;
        case "billingStreetAddress1":
          if (!values[name].trim()) {
            return t("error.streetAddressError");
          } else if (!alphanumericPattern.test(values[name])) {
            return t("error.textError");
          }
          break;
        case "billingStreetAddress2":
          if (values[name].trim() && !alphanumericPattern.test(values[name])) {
            return t("error.textError");
          }
          break;
        case "billingCity":
          if (!values[name].trim()) {
            return t("error.cityError");
          } else if (!alphabeticPattern.test(values[name])) {
            return t("error.textError");
          }
          break;
        case "billingState":
          if (!values[name].trim()) {
            return t("error.stateError");
          }
          break;
        case "billingZipCode":
          if (!values[name].trim()) {
            return t("error.zipCodeError");
          }
          break;
        default:
          break;
      }
      return "";
    };
  
    const validateForm = () => {
      const errors = {};
      Object.keys(values).forEach(name => {
        if (name !== "errors") {
          errors[name] = validateField(name);
        }
      });
      setValues({ ...values, errors });
      return Object.values(errors).every((error) => error === "");
    };

    const setToInitial = () => {
      setValues(initialValues);
    };
  
    return {
      values,
      handleChange,
      validateForm,
      setToInitial,
      validateField,
    };
  };

  const initialShippingAddress = useFormInput({
    streetAddress1: formValues.stepSix.streetAddress1 || "",
    streetAddress2: formValues.stepSix.streetAddress2 || "",
    city: formValues.stepSix.city || "",
    state: formValues.stepSix.state || "",
    zipCode: formValues.stepSix.zipCode || "",
    errors: {
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      zipCode: "",
    }
  });

  const initialBillingAddress = useFormInput({
    billingStreetAddress1: formValues.stepSix.billingStreetAddress1 || "",
    billingStreetAddress2: formValues.stepSix.billingStreetAddress2 || "",
    billingCity: formValues.stepSix.billingCity || "",
    billingState: formValues.stepSix.billingState || "",
    billingZipCode: formValues.stepSix.billingZipCode || "",
    errors: {
      billingStreetAddress1: "",
      billingStreetAddress2: "",
      billingCity: "",
      billingState: "",
      billingZipCode: "",
    }
  });

  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);
  const [isBillingModalOpen, setIsBillingModalOpen] = useState(false);
  const [monthPlanModal, setMonthPlanModal] = useState(false);

  const handleShippingSubmit = (event) => {
    event.preventDefault();
    const isValid = initialShippingAddress.validateForm();
    if (isValid) {
      console.log("Shipping address saved:", initialShippingAddress.values);
      setIsShippingModalOpen(false);
      handleChange("stepSix")({
        ...formValues.stepSix,
        ...initialShippingAddress.values
      });
    } else {
      console.log("Form contains errors. Cannot save address.");
    }
  };

  const handleBillingSubmit = (event) => {
    event.preventDefault();
    const isValid = initialBillingAddress.validateForm();
    if (isValid) {
      console.log("Billing address saved:", initialBillingAddress.values);
      setIsBillingModalOpen(false);
      handleChange("stepSix")({
        ...formValues.stepSix,
        ...initialBillingAddress.values
      });
    } else {
      console.log("Form contains errors. Cannot save address.");
    }
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

  // Initialize quantities state for items in the cart
  const [addonQuantities, setAddonQuantities] = useState(
    addoncart.map((item) => item.quantity || 1)
  );
  // Handlers for increasing and decreasing quantity
  const increaseAddonQuantity = (index) => {
    const newAddonQuantities = [...addonQuantities];
    newAddonQuantities[index] += 1;
    setAddonQuantities(newAddonQuantities);
    const newAddonCart = [...addoncart];
    newAddonCart[index].quantity = newAddonQuantities[index];
    setAddonCart(newAddonCart);
  };

  const decreaseAddonQuantity = (index) => {
    if (addonQuantities[index] > 1) {
      const newAddonQuantities = [...addonQuantities];
      newAddonQuantities[index] -= 1;
      setAddonQuantities(newAddonQuantities);
      const newAddonCart = [...addoncart];
      newAddonCart[index].quantity = newAddonQuantities[index];
      setAddonCart(newAddonCart);
    }
  };

  const removeAddon = (index) => {
    const newAddoncart = [...addoncart];
    newAddoncart.splice(index, 1);
    setAddonCart(newAddoncart);
    const newAddonQuantities = [...addonQuantities];
    newAddonQuantities.splice(index, 1);
    setAddonQuantities(newAddonQuantities);
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
      const addonQuantity = addon.quantity || 1; // Default to 1 if quantity is not provided or falsy
      total += addonPrice * addonQuantity; // Add the price of each addon multiplied by its quantity
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

      <div className="total-cost">
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
              <div className="card-mini" key={index}>
                <div className="card-top">
                  <div className="card-img">
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  <div className="card-title-price">
                    <span>
                      <button className="change-frequency" onClick={()=> setMonthPlanModal(true)}>{t("stepTen.changeFrequency")}</button>
                      <h3>{item.title}</h3>
                      <p className="title-desc">{item.titleDesc}</p>
                    </span>
                    <span className="bottom">
                      <h4 className="month-plan">{item.monthPlan === "1-month supply" ? t("stepTen.oneMonthPlan") : t("stepTen.threeMonthPlan")}</h4>
                      <h4>{adjustedPrice}</h4>
                    </span>
                  </div>
                </div>
              </div>
            </span>
          );
        })}

        {/* Display cart items */}
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
              <span className="suppliment">
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
                        <h3 className="card-2-title">{item.title}</h3>
                        <h3 className="price-items">{item.price}</h3>
                      </div>
                      <div className="price-desc">
                        <p>{item.desc}</p>
                      </div>
                      <span className="bottom" key={index}>
                        <h4>
                          Quantity: {item.quantity}
                        </h4>
                        <h4>
                          $
                          {(
                            parseFloat(item.price.replace(/[$,]/g, "")) * item.quantity
                          ).toFixed(2)}
                        </h4>
                      </span>
                    </div>
                  </div>
                  {item.price !== "$0" &&
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
                }
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Display addoncart items */}
        {addoncart.length === 0 ? (
          <div className="additional-suppliments">
            <span className="no-selected">
              <h3>{t("stepTen.availableAddon")}</h3>
              <p>(No Addon Selected)</p>
            </span>
            <button className="add-suppliment" onClick={addAddon}>
              Add Addons{" "}
              <img src="/assets/arrowblue.svg" alt="" />
            </button>
          </div>
        ) : (
          <div className="additional-suppliments cart-added">
            <div className="fsdfg">
              <h3 className="title-card-add">
                Available Addons
              </h3>
              <span className="suppliment">
                <button className="add-suppliment" onClick={addAddon}>
                  Add Addons{" "}
                  <img src="/assets/arrowblue.svg" alt="" />
                </button>
              </span>
            </div>
            <div className="supplements-card all-added-supplements">
              {addoncart.map((item, index) => (
                <div className="card card-2" key={index}>
                  <div className="card-top card-2-top">
                    <div className="card-img">
                      <img src={item.imgSrc} alt={item.title} />
                    </div>
                    <div className="card-title-price title-price-stepthree">
                      <div className="title-price">
                        <h3 className="card-2-title">{item.title}</h3>
                        <h3 className="price-items">{item.price}</h3>
                      </div>
                      <div className="price-desc">
                        <p>{item.description}</p>
                      </div>
                      <span className="bottom">
                        <h4>Quantity {item.quantity}</h4>
                        <h4>
                        ${(
                          parseFloat(item.price.replace(/[$,]/g, "")) * item.quantity
                        ).toFixed(2)}
                        </h4>
                      </span>
                    </div>
                  </div>
                  <div className="btn-group cart-actions quantity">
                    <div className="quantity-control">
                      <button
                        className="quantity-btn quantity-increase"
                        onClick={() => decreaseAddonQuantity(index)}
                      >
                        -
                      </button>
                      <span>{addonQuantities[index]}</span>
                      <button
                        className="quantity-btn quantity-dicrease"
                        onClick={() => increaseAddonQuantity(index)}
                      >
                        +
                      </button>
                    </div>
                    <span
                      className="remove-suppliment"
                      onClick={() => removeAddon(index)}
                    >
                      <img src="/assets/delete.svg" alt="" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <hr />
        <span className="total">
          <h3>{t("stepTen.totalCost")}</h3>
          <h2>
            {calculateTotalCost()} <p>{t("stepTen.dueToday")}</p>
          </h2>
        </span>
      </div>

      {monthPlanModal && (
        <MonthPlanModal
          isOpen={monthPlanModal}
          onClose={() => setMonthPlanModal(false)}
          item={cart2[0]} // Pass the appropriate item from cart2 that modal needs
          handleMonthPlanChange={handleMonthPlanChange} // Pass the handler function
        />
      )}

      <fieldset className="included-card">
        <legend>{t("stepTen.whatsIncluded")}</legend>
        <div className="included-card-content">
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
      </fieldset>

      <div className="outside-padding">
        <div className="shipping-address-section">
          <span className="shipping-add-top">
            <h3>{t("stepTen.shippingAddress")}</h3>
            <button className="btn-edit" onClick={() => setIsShippingModalOpen(true)}>
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
      </div>

      <ShippingAddressModal
        isOpen={isShippingModalOpen}
        onClose={() => setIsShippingModalOpen(false)}
        shippingAddress={initialShippingAddress.values}
        handleSubmit={handleShippingSubmit}
        handleInputChange={initialShippingAddress.handleChange}
        stateOptions={stateOptions}
        validateField={initialShippingAddress.validateField}
        setToInitial={initialShippingAddress.setToInitial}
      />

      <div className="outside-padding">
        <div className="billing-address-section">
          <span className="billing-add-top">
            <h3>{t("stepTen.billingAddress")}</h3>
            <button className="btn-edit" onClick={() => setIsBillingModalOpen(true)}>
              {t("stepTen.edit")}
            </button>
          </span>
          <div className="billing-address">
            <p>{formValues.stepSix.billingStreetAddress1}</p>
            <p>{formValues.stepSix.billingStreetAddress2}</p>
            <p>
              {formValues.stepSix.billingCity}, {formValues.stepSix.billingState}{" "}
              {formValues.stepSix.billingZipCode}
            </p>
          </div>
        </div>
      </div>

      <BillingAddressModal
        isOpen={isBillingModalOpen}
        onClose={() => setIsBillingModalOpen(false)}
        billingAddress={initialBillingAddress.values}
        handleSubmit={handleBillingSubmit}
        handleInputChange={initialBillingAddress.handleChange}
        stateOptions={stateOptions}
        validateField={initialBillingAddress.validateField}
        setToInitial={initialBillingAddress.setToInitial}
      />

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

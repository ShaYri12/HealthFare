'use client'
import React from "react";
import { useTranslation } from "react-i18next";

const ShippingAddressModal = ({
  isOpen,
  onClose,
  shippingAddress,
  handleSubmit,
  handleInputChange,
  stateOptions,
  validateField,
  setToInitial
}) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  return (
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
                <span className="error">{shippingAddress.errors.zipCode}</span>
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
                    onClose();
                    setToInitial();
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
  );
};

export default ShippingAddressModal;

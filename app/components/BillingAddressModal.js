'use client';
import React from "react";
import { useTranslation } from "react-i18next";

const BillingAddressModal = ({
  isOpen,
  onClose,
  billingAddress,
  handleSubmit,
  handleInputChange,
  stateOptions,
  validateField,
  setToInitial,
}) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{t("stepTen.billingAddress")}</h3>
        <form onSubmit={handleSubmit} className="input-form modal-form">
          <div className="input-label-full input-label">
            <label>{t("stepSix.question2.streetAddress1")}</label>
            <input
              type="text"
              name="billingStreetAddress1"
              value={billingAddress.billingStreetAddress1}
              onChange={handleInputChange("billingStreetAddress1")}
              placeholder={t("stepSix.question2.streetAddressPlaceholder")}
            />
            {billingAddress.errors.billingStreetAddress1 && (
              <span className="error">{billingAddress.errors.billingStreetAddress1}</span>
            )}
          </div>
          <div className="input-label-full input-label">
            <label>{t("stepSix.question2.streetAddress2")}</label>
            <input
              type="text"
              name="billingStreetAddress2"
              value={billingAddress.billingStreetAddress2}
              onChange={handleInputChange("billingStreetAddress2")}
              placeholder={t("stepSix.question2.streetAddressPlaceholder")}
            />
            {billingAddress.errors.billingStreetAddress2 && (
              <span className="error">{billingAddress.errors.billingStreetAddress2}</span>
            )}
          </div>
          <div className="input-group">
            <div className="input-label">
              <label>{t("stepSix.question2.city")}</label>
              <input
                type="text"
                name="billingCity"
                value={billingAddress.billingCity}
                onChange={handleInputChange("billingCity")}
                placeholder={t("stepSix.question2.cityPlaceholder")}
              />
              {billingAddress.errors.billingCity && (
                <span className="error">{billingAddress.errors.billingCity}</span>
              )}
            </div>
            <div className="input-label">
              <label>{t("stepSix.question2.zipCode")}</label>
              <input
                type="text"
                name="billingZipCode"
                value={billingAddress.billingZipCode}
                onChange={handleInputChange("billingZipCode")}
                placeholder={t("stepSix.question2.zipCodePlaceholder")}
              />
              {billingAddress.errors.billingZipCode && (
                <span className="error">{billingAddress.errors.billingZipCode}</span>
              )}
            </div>
          </div>
          <div className="input-label location">
            <label>{t("stepSix.question2.state")}</label>
            <select
              name="billingState"
              value={billingAddress.billingState}
              onChange={handleInputChange("billingState")}
            >
              {stateOptions.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {billingAddress.errors.billingState && (
              <span className="error">{billingAddress.errors.billingState}</span>
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
              <button className="save-btn" type="submit">
                {t("stepTen.save")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingAddressModal;

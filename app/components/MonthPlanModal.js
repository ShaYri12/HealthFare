import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const MonthPlanModal = ({ isOpen, onClose, item, handleMonthPlanChange }) => {
  const { t } = useTranslation();
  const [pendingPlan, setPendingPlan] = useState(item.monthPlan); // State to hold pending plan changes

  // Define the prices and descriptions based on item title
  let oneMonthPrice, threeMonthPrice, oneMonthDescription, threeMonthDescription;

  if (item.title === t("stepTwo.cards.0.title")) {
    oneMonthPrice = `$296 / ${t("planSelection.month")}*`;
    threeMonthPrice = `$279 / ${t("planSelection.month")}*`;
    oneMonthDescription = t("stepTwo.cards.0.description");
    threeMonthDescription = t("stepTwo.cards.0.description2");
  } else if (item.title === t("stepTwo.cards.1.title")) {
    oneMonthPrice = `$425 / ${t("planSelection.month")}*`;
    threeMonthPrice = `$399 / ${t("planSelection.month")}*`;
    oneMonthDescription = t("stepTwo.cards.1.description");
    threeMonthDescription = t("stepTwo.cards.1.description2");
  } else {
    oneMonthPrice = `$296 / ${t("planSelection.month")}*`;
    threeMonthPrice = `$279 / ${t("planSelection.month")}*`;
    oneMonthDescription = t("stepTwo.cards.0.description");
    threeMonthDescription = t("stepTwo.cards.0.description2");
  }

  // Function to handle visual change of selected plan
  const handleChange = (newPlan) => {
    setPendingPlan(newPlan); // Update pendingPlan visually
  };

  // Function to apply confirmed plan change
  const handleConfirm = () => {
    handleMonthPlanChange(item, pendingPlan); // Notify parent component with the new plan
    onClose(); // Close the modal
  };

  // Close the modal without applying changes
  const handleCancel = () => {
    setPendingPlan(item.monthPlan); // Reset pendingPlan to current selectedPlan
    onClose(); // Close the modal
  };

  // Render the modal content
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="label-info">
          <h2>{t('planSelection.title')}</h2>
          <p>{t('planSelection.description')}</p>
        </div>
        <form className="input-form">
          <div className="plan-select">
            <div className="plan-option" onClick={() => handleChange('1-month supply')}>
              <input
                type="radio"
                id="one-month"
                name="plan"
                checked={pendingPlan === '1-month supply'}
                onChange={() => {}}
              />
              <label className="plan-selection-text" htmlFor="one-month">
                <span className="month">{t('planSelection.oneMonthPlan')}</span>
                <span className="price">{oneMonthPrice}</span>
              </label>
            </div>
            <div className="plan-option" onClick={() => handleChange('3-month supply')}>
              <input
                type="radio"
                id="three-month"
                name="plan"
                checked={pendingPlan === '3-month supply'}
                onChange={() => {}}
              />
              <label className="plan-selection-text" htmlFor="three-month">
                <span className="month">{t('planSelection.threeMonthPlan')}</span>
                <div className="price">
                  <span className="original-price">{oneMonthPrice}</span> <span>{threeMonthPrice}</span>
                </div>
              </label>
            </div>
          </div>
          <div className="btn-group">
            <button className="btn-cancel" onClick={handleCancel}>
              {t("stepTwelve.cancel")}
            </button>
            <button className="save-btn" type="button" onClick={handleConfirm}>
              {t("stepTwelve.confirm")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MonthPlanModal;

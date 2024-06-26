// thankyou.js
"use client";
import { useTranslation, I18nextProvider } from "react-i18next";
import "../styles/form.css";
import "../styles/thankyou.css";

const ThankYouPage = ({ handleSubmit, formValues }) => {
  const { t } = useTranslation();

  // Function to render all formValues data
  const renderFormValues = () => {
    return (
      <div className="formValuesContainer">
        <h2>Form Values:</h2>
        <ul>
          {Object.keys(formValues).map((key, index) => (
            <li key={index}>
              <strong>{key}:</strong> {JSON.stringify(formValues[key])}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="formContainer step-form">
      <div className="thank-you">
        <h3>{t("thankYou.title")}</h3>
        <p>{t("thankYou.message")}</p>
      </div>

      <div className="about-appointment">
        <h3>{t("thankYou.appointmentDetails")}</h3>
        <span>{t("thankYou.date")}: {formValues.appointment.selectedDay}</span>
        <span>{t("thankYou.time")}: {formValues.appointment.selectedTime} EST</span>
      </div>

      {renderFormValues()}

      <div className="assistance">
        <h3>{t("thankYou.assistanceTitle")}</h3>
        <p>{t("thankYou.assistanceMessage")}</p>
      </div>

      <div className="btn-group final-btn">
        <button className="arrow-btn whatsapp-btn">
          <img src="/assets/whatsapp.svg" alt="" />
        </button>
        <button className="long-btn whatsapp-btn">
          {t("thankYou.whatsappBtn")}
        </button>
      </div>

      <div className="doctor">
        <img src="/assets/doctor.jpg" alt="doctorImg" />
        <span className="doctor-texts">
          <h3>{t("thankYou.doctorText.title")}</h3>
          <p>{t("thankYou.doctorText.support")}</p>
          <span>{t("thankYou.doctorText.online")}</span>
        </span>
        <span className="popup">1</span>
      </div>
    </div>
  );
};

export default ThankYouPage;

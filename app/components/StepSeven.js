import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/stepsix.css"; // Ensure this file exists
import "../styles/stepseven.css"; // Ensure this file exists
import "../styles/form.css";
import Review from "./Review";

const StepSeven = ({ nextStep, prevStep, handleChange, values }) => {
  const { t } = useTranslation(); // 'stepSeven' matches the namespace in i18n.js
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({
    question1: values.question1 || "",
    question2: values.question2 || "",
    question3: values.question3 || "",
    question4: values.question4 || "",
    question5: values.question5 || "",
    question6: values.question6 || "",
  });
  const [errors, setErrors] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
  });

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
    handleChange({
      [field]: value,
    });
    setErrors({ ...errors, [field]: "" }); // Clear error when input changes
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Regex pattern for alphabetic only
    const alphanumericPattern = /^[A-Za-z0-9\s.,'"`#-]+$/u;

    // Validate fields for the current question
    switch (currentQuestion) {
      case 0:
        if (!formData.question1) {
          isValid = true;
        } else if (!alphanumericPattern.test(formData.question1)) {
          newErrors.question1 = t("error.textError");
          isValid = false;
        }
        break;
      case 1:
        if (!formData.question2) {
          isValid = true;
        } else if (!alphanumericPattern.test(formData.question2)) {
          newErrors.question2 = t("error.textError");
          isValid = false;
        }
        break;
      case 2:
        if (!formData.question3) {
          isValid = true;
        } else if (!alphanumericPattern.test(formData.question3)) {
          newErrors.question3 = t("error.textError");
          isValid = false;
        }
        break;
      case 3:
        if (!formData.question4) {
          isValid = true;
        } else if (!alphanumericPattern.test(formData.question4)) {
          newErrors.question4 = t("error.textError");
          isValid = false;
        }
        break;
      case 4:
        if (!formData.question5) {
          isValid = true;
        } else if (!alphanumericPattern.test(formData.question5)) {
          newErrors.question5 = t("error.textError");
          isValid = false;
        }
        break;
      case 5:
        if (!formData.question6) {
          isValid = true;
        } else if (!alphanumericPattern.test(formData.question6)) {
          newErrors.question6 = t("error.textError");
          isValid = false;
        }
        break;
      default:
        break;
    }

    // Set errors state to trigger re-render
    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        window.scrollTo(0, 0);
      } else {
        nextStep();
      }
    } else {
      
    }
  };

  const prevInfo = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      window.scrollTo(0, 0);
    } else {
      prevStep();
    }
  };

  const nextInfo = () => {
    if (validateForm()) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        window.scrollTo(0, 0);
      } else {
        nextStep();
      }
    } else {
      alert(t("error.fillError"));
    }
  };

  const questions = [
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t("stepSeven.question1.label")}</label>
            <input
              className="input-border"
              type="text"
              value={formData.question1}
              onChange={handleInputChange("question1")}
              placeholder={t("stepSeven.question1.placeholder")}
            />
            {errors.question1 && (
              <span className="error">{errors.question1}</span>
            )}
          </div>
          <div className="btn-group btn-group-stepthree">
            <button
              type="button"
              className="back-btn back-btn-stepthree"
              onClick={prevInfo}
            >
              <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
            </button>
            <div className="forward-btns">
              <button
                type="submit"
                className="long-btn long-btn-stepthree"
              >
                {t("stepSeven.continueJourney")}
              </button>
            </div>
          </div>
        </form>
      ),
    },
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t("stepSeven.question2.label")}</label>
            <input
              className="input-border"
              type="text"
              title={t("error.textError")}
              value={formData.question2}
              onChange={handleInputChange("question2")}
              placeholder={t("stepSeven.question2.placeholder")}
            />
            {errors.question2 && (
              <span className="error">{errors.question2}</span>
            )}
          </div>
          <div className="btn-group btn-group-stepthree">
            <button
              type="button"
              className="back-btn back-btn-stepthree"
              onClick={prevInfo}
            >
              <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
            </button>
            <div className="forward-btns">
              <button
                type="submit"
                className="long-btn long-btn-stepthree"
              >
                {t("stepSeven.continueJourney")}
              </button>
            </div>
          </div>
        </form>
      ),
    },
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t("stepSeven.question3.label")}</label>
            <input
              className="input-border"
              type="text"
              value={formData.question3}
              onChange={handleInputChange("question3")}
              placeholder={t("stepSeven.question3.placeholder")}
            />
            {errors.question3 && (
              <span className="error">{errors.question3}</span>
            )}
          </div>
          <div className="btn-group btn-group-stepthree">
            <button
              type="button"
              className="back-btn back-btn-stepthree"
              onClick={prevInfo}
            >
              <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
            </button>
            <div className="forward-btns">
              <button
                type="submit"
                className="long-btn long-btn-stepthree"
              >
                {t("stepSeven.continueJourney")}
              </button>
            </div>
          </div>
        </form>
      ),
    },
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t("stepSeven.question4.label")}</label>
            <input
              className="input-border"
              type="text"
              value={formData.question4}
              onChange={handleInputChange("question4")}
              placeholder={t("stepSeven.question4.placeholder")}
            />
            {errors.question4 && (
              <span className="error">{errors.question4}</span>
            )}
          </div>
          <div className="btn-group btn-group-stepthree">
            <button
              type="button"
              className="back-btn back-btn-stepthree"
              onClick={prevInfo}
            >
              <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
            </button>
            <div className="forward-btns">
              <button
                type="submit"
                className="long-btn long-btn-stepthree"
              >
                {t("stepSeven.continueJourney")}
              </button>
            </div>
          </div>
        </form>
      ),
    },
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t("stepSeven.question5.label")}</label>
            <input
              className="input-border"
              type="text"
              value={formData.question5}
              onChange={handleInputChange("question5")}
              placeholder={t("stepSeven.question5.placeholder")}
            />
            {errors.question5 && (
              <span className="error">{errors.question5}</span>
            )}
          </div>
          <div className="btn-group btn-group-stepthree">
            <button
              type="button"
              className="back-btn back-btn-stepthree"
              onClick={prevInfo}
            >
              <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
            </button>
            <div className="forward-btns">
              <button
                type="submit"
                className="long-btn long-btn-stepthree"
              >
                {t("stepSeven.continueJourney")}
              </button>
            </div>
          </div>
        </form>
      ),
    },
    {
      form: (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-label-full input-label">
            <label className="label">{t("stepSeven.question6.label")}</label>
            <input
              className="input-border"
              type="text"
              value={formData.question6}
              onChange={handleInputChange("question6")}
              placeholder={t("stepSeven.question6.placeholder")}
            />
            {errors.question6 && (
              <span className="error">{errors.question6}</span>
            )}
          </div>
          <div className="btn-group btn-group-stepthree">
            <button
              type="button"
              className="back-btn back-btn-stepthree"
              onClick={prevInfo}
            >
              <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
            </button>
            <div className="forward-btns">
              <button
                type="submit"
                className="long-btn long-btn-stepthree"
              >
                {t("stepSeven.continueJourney")}
              </button>
              {currentQuestion < 5 && (
                <button
                  type="button"
                  className="arrow-btn arrow-btn-stepthree"
                  onClick={nextInfo}
                >
                  <img src="/assets/arrow.svg" alt="" />
                </button>  
              )}
            </div>
          </div>
        </form>
      ),
    },
    // Repeat similar form structures for other questions
  ];

  return (
    <div className="formContainer step-form">
      <div className="label-info">
        <h2>{t("stepSeven.medicalInfo.title")}</h2>
        <p>{t("stepSeven.medicalInfo.subTitle")}</p>
      </div>
      {questions[currentQuestion].form}

      <Review />
    </div>
  );
};

export default StepSeven;
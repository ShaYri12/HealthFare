import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/stepsix.css"; // Ensure this file exists
import "../styles/stepseven.css"; // Ensure this file exists
import "../styles/form.css";
import Review from "./Review";

const StepSeven = ({
  nextStep,
  prevStep,
  handleChange,
  values,
  currentQuestion,
  setCurrentQuestion,
}) => {
  const { t } = useTranslation();

  // State to manage form data and visibility of questions
  const [formData, setFormData] = useState({
    question1: values.question1 || "",
    question2: values.question2 || "",
    question3: values.question3 || "",
    question4: values.question4 || "",
    question5: values.question5 || "",
  });

  const [errors, setErrors] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  // State to manage whether each question should be displayed
  const [showQuestion1, setShowQuestion1] = useState(false);
  const [showQuestion2, setShowQuestion2] = useState(false);
  const [showQuestion3, setShowQuestion3] = useState(false);
  const [showQuestion4, setShowQuestion4] = useState(false);
  const [showQuestion5, setShowQuestion5] = useState(false);

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

  const handleYesNoChange = (field, value) => {
    switch (field) {
      case "question1":
        if (value == "yes") {
          setShowQuestion1(value === "yes");
        } else {
          nextInfo();
        }
        break;
      case "question2":
        if (value == "yes") {
          setShowQuestion2(value === "yes");
        } else {
          nextInfo();
        }
        break;
      case "question3":
        if (value == "yes") {
          setShowQuestion3(value === "yes");
        } else {
          nextInfo();
        }
        break;
      case "question4":
        if (value == "yes") {
          setShowQuestion4(value === "yes");
        } else {
          nextInfo();
        }
        break;
      case "question5":
        if (value == "yes") {
          setShowQuestion5(value === "yes");
        } else {
          nextInfo();
        }
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Regex pattern for alphanumeric
    const alphanumericPattern = /^[A-Za-z0-9\s*.,'"`#()\[\]-]+$/u;

    // Validate fields for the current question
    switch (currentQuestion) {
      case 0:
        if (!formData.question1 && showQuestion1) {
          isValid = true; // Optional field, so valid if not shown
        } else if (
          showQuestion1 &&
          !alphanumericPattern.test(formData.question1)
        ) {
          newErrors.question1 = t("error.textError");
          isValid = false;
        }
        break;
      case 1:
        if (!formData.question2 && showQuestion2) {
          isValid = true; // Optional field, so valid if not shown
        } else if (
          showQuestion2 &&
          !alphanumericPattern.test(formData.question2)
        ) {
          newErrors.question2 = t("error.textError");
          isValid = false;
        }
        break;
      case 2:
        if (!formData.question3 && showQuestion3) {
          isValid = true; // Optional field, so valid if not shown
        } else if (
          showQuestion3 &&
          !alphanumericPattern.test(formData.question3)
        ) {
          newErrors.question3 = t("error.textError");
          isValid = false;
        }
        break;
      case 3:
        if (!formData.question4 && showQuestion4) {
          isValid = true; // Optional field, so valid if not shown
        } else if (
          showQuestion4 &&
          !alphanumericPattern.test(formData.question4)
        ) {
          newErrors.question4 = t("error.textError");
          isValid = false;
        }
        break;
      case 4:
        if (!formData.question5 && showQuestion5) {
          isValid = true; // Optional field, so valid if not shown
        } else if (
          showQuestion5 &&
          !alphanumericPattern.test(formData.question5)
        ) {
          newErrors.question5 = t("error.textError");
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
      // Handle invalid form submission if needed
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
        <div className="medication-questions">
          <div className="label-info">
            <h2>{t("stepSeven.question1.title")}</h2>
            <p className="question">{t("stepSeven.question1.label")}</p>
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            <div className="input-label-full input-label">
              {!showQuestion1 && (
                <div className="yes-no-buttons">
                  <button
                    type="button"
                    onClick={() => handleYesNoChange("question1", "yes")}
                    className={`yes-btn ${showQuestion1 ? "active" : ""}`}
                  >
                    {t("stepSeven.yes")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleYesNoChange("question1", "no")}
                    className={`no-btn ${!showQuestion1 ? "active" : ""}`}
                  >
                    {t("stepSeven.no")}
                  </button>
                </div>
              )}
              {showQuestion1 && (
                <input
                  className="input-border"
                  type="text"
                  value={formData.question1}
                  onChange={handleInputChange("question1")}
                  placeholder={t("stepSeven.question1.placeholder")}
                />
              )}
              {errors.question1 && (
                <span className="error">{errors.question1}</span>
              )}
            </div>
            {showQuestion1 && (
              <div className="btn-group btn-group-stepthree">
                <button
                  type="button"
                  className="back-btn back-btn-stepthree"
                  onClick={prevInfo}
                >
                  <img src="/assets/arrow.svg" alt="arrow" />{" "}
                  {t("stepSeven.back")}
                </button>
                <div className="forward-btns">
                  <button type="submit" className="long-btn long-btn-stepthree">
                    {t("stepSeven.continueJourney")}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      ),
    },
    {
      form: (
        <div className="medication-questions">
          <div className="label-info">
            <h2>{t("stepSeven.question2.title")}</h2>
            <p className="question">{t("stepSeven.question2.label")}</p>
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            <div className="input-label-full input-label">
              {!showQuestion2 && (
                <div className="yes-no-buttons">
                  <button
                    type="button"
                    onClick={() => handleYesNoChange("question2", "yes")}
                    className={`yes-btn ${showQuestion2 ? "active" : ""}`}
                  >
                    {t("stepSeven.yes")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleYesNoChange("question2", "no")}
                    className={`no-btn ${!showQuestion2 ? "active" : ""}`}
                  >
                    {t("stepSeven.no")}
                  </button>
                </div>
              )}
              {showQuestion2 && (
                <input
                  className="input-border"
                  type="text"
                  value={formData.question2}
                  onChange={handleInputChange("question2")}
                  placeholder={t("stepSeven.question2.placeholder")}
                />
              )}
              {errors.question2 && (
                <span className="error">{errors.question2}</span>
              )}
            </div>
            {showQuestion2 && (
              <div className="btn-group btn-group-stepthree">
                <button
                  type="button"
                  className="back-btn back-btn-stepthree"
                  onClick={prevInfo}
                >
                  <img src="/assets/arrow.svg" alt="arrow" />{" "}
                  {t("stepSeven.back")}
                </button>
                <div className="forward-btns">
                  <button type="submit" className="long-btn long-btn-stepthree">
                    {t("stepSeven.continueJourney")}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      ),
    },
    {
      form: (
        <div className="medication-questions">
          <div className="label-info">
            <h2>{t("stepSeven.question3.title")}</h2>
            <p className="question">{t("stepSeven.question3.label")}</p>
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            <div className="input-label-full input-label">
              {!showQuestion3 && (
                <div className="yes-no-buttons">
                  <button
                    type="button"
                    onClick={() => handleYesNoChange("question3", "yes")}
                    className={`yes-btn ${showQuestion3 ? "active" : ""}`}
                  >
                    {t("stepSeven.yes")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleYesNoChange("question3", "no")}
                    className={`no-btn ${!showQuestion3 ? "active" : ""}`}
                  >
                    {t("stepSeven.no")}
                  </button>
                </div>
              )}
              {showQuestion3 && (
                <input
                  className="input-border"
                  type="text"
                  value={formData.question3}
                  onChange={handleInputChange("question3")}
                  placeholder={t("stepSeven.question3.placeholder")}
                />
              )}
              {errors.question3 && (
                <span className="error">{errors.question3}</span>
              )}
            </div>
            {showQuestion3 && (
              <div className="btn-group btn-group-stepthree">
                <button
                  type="button"
                  className="back-btn back-btn-stepthree"
                  onClick={prevInfo}
                >
                  <img src="/assets/arrow.svg" alt="arrow" />{" "}
                  {t("stepSeven.back")}
                </button>
                <div className="forward-btns">
                  <button type="submit" className="long-btn long-btn-stepthree">
                    {t("stepSeven.continueJourney")}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      ),
    },
    {
      form: (
        <div className="medication-questions">
          <div className="label-info">
            <h2>{t("stepSeven.question4.title")}</h2>
            <p className="question">{t("stepSeven.question4.label")}</p>
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            <div className="input-label-full input-label">
              {!showQuestion4 && (
                <div className="yes-no-buttons">
                  <button
                    type="button"
                    onClick={() => handleYesNoChange("question4", "yes")}
                    className={`yes-btn ${showQuestion4 ? "active" : ""}`}
                  >
                    {t("stepSeven.yes")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleYesNoChange("question4", "no")}
                    className={`no-btn ${!showQuestion4 ? "active" : ""}`}
                  >
                    {t("stepSeven.no")}
                  </button>
                </div>
              )}
              {showQuestion4 && (
                <input
                  className="input-border"
                  type="text"
                  value={formData.question4}
                  onChange={handleInputChange("question4")}
                  placeholder={t("stepSeven.question4.placeholder")}
                />
              )}
              {errors.question4 && (
                <span className="error">{errors.question4}</span>
              )}
            </div>
            {showQuestion4 && (
              <div className="btn-group btn-group-stepthree">
                <button
                  type="button"
                  className="back-btn back-btn-stepthree"
                  onClick={prevInfo}
                >
                  <img src="/assets/arrow.svg" alt="arrow" />{" "}
                  {t("stepSeven.back")}
                </button>
                <div className="forward-btns">
                  <button type="submit" className="long-btn long-btn-stepthree">
                    {t("stepSeven.continueJourney")}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      ),
    },
    {
      form: (
        <div className="medication-questions">
          <div className="label-info">
            <h2>{t("stepSeven.question5.title")}</h2>
            <p className="question">{t("stepSeven.question5.label")}</p>
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            <div className="input-label-full input-label">
              {!showQuestion5 && (
                <div className="yes-no-buttons">
                  <button
                    type="button"
                    onClick={() => handleYesNoChange("question5", "yes")}
                    className={`yes-btn ${showQuestion5 ? "active" : ""}`}
                  >
                    {t("stepSeven.yes")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleYesNoChange("question5", "no")}
                    className={`no-btn ${!showQuestion5 ? "active" : ""}`}
                  >
                    {t("stepSeven.no")}
                  </button>
                </div>
              )}
              {showQuestion5 && (
                <input
                  className="input-border"
                  type="text"
                  value={formData.question5}
                  onChange={handleInputChange("question5")}
                  placeholder={t("stepSeven.question5.placeholder")}
                />
              )}
              {errors.question5 && (
                <span className="error">{errors.question5}</span>
              )}
            </div>
            {showQuestion5 && (
              <div className="btn-group btn-group-stepthree">
                <button
                  type="button"
                  className="back-btn back-btn-stepthree"
                  onClick={prevInfo}
                >
                  <img src="/assets/arrow.svg" alt="arrow" />{" "}
                  {t("stepSeven.back")}
                </button>
                <div className="forward-btns">
                  <button type="submit" className="long-btn long-btn-stepthree">
                    {t("stepSeven.continueJourney")}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      ),
    },
    // Add more question forms as needed
  ];

  return (
    <div className="formContainer step-form">
      {questions[currentQuestion].form}

      <Review />
    </div>
  );
};

export default StepSeven;

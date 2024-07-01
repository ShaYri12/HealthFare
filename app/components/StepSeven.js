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
  const [showQuestion1, setShowQuestion1] = useState(null);
  const [showQuestion2, setShowQuestion2] = useState(null);
  const [showQuestion3, setShowQuestion3] = useState(null);
  const [showQuestion4, setShowQuestion4] = useState(null);
  const [showQuestion5, setShowQuestion5] = useState(null);

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
          setShowQuestion1(true);
        } else {
          setShowQuestion1(false);
          setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);
              window.scrollTo(0, 0);
            } else {
              nextStep();
            }
          }, 400);
        }
        break;
      case "question2":
        if (value == "yes") {
          setShowQuestion2(true);
        } else {
          setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);
              window.scrollTo(0, 0);
            } else {
              nextStep();
            }
          }, 400);
        }
        break;
      case "question3":
        if (value == "yes") {
          setShowQuestion3(true);
        } else {
          setShowQuestion3(false);
          setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);
              window.scrollTo(0, 0);
            } else {
              nextStep();
            }
          }, 400);
        }
        break;
      case "question4":
        if (value == "yes") {
          setShowQuestion4(true);
        } else {
          setShowQuestion4(false);
          setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);
              window.scrollTo(0, 0);
            } else {
              nextStep();
            }
          }, 400);
        }
        break;
      case "question5":
        if (value == "yes") {
          setShowQuestion5(true);
        } else {
          setShowQuestion5(false);
          setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);
              window.scrollTo(0, 0);
            } else {
              nextStep();
            }
          }, 400);
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
          newErrors.question1 = t("error.currentMedicationsError");
          isValid = false;
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
          newErrors.question2 = t("error.medicationAllergiesError");
          isValid = false;
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
          newErrors.question3 = t("error.dietarySupplementsError");
          isValid = false;
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
          newErrors.question4 = t("error.currentAntibioticsError");
          isValid = false;
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
          newErrors.question5 = t("error.weightLossMedicationsError");
          isValid = false;
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
          <div className="yes-no-buttons">
            <div className="yes-no-radio">
              <input
                type="radio"
                id="question1_yes"
                name="question1"
                value="yes"
                checked={showQuestion1 === true}
                onChange={() => handleYesNoChange("question1", "yes")}
              />
              <label htmlFor="question1_yes">{t("stepSeven.yes")}</label>
            </div>
            <div className="yes-no-radio">
              <input
                type="radio"
                id="question1_no"
                name="question1"
                value="no"
                checked={showQuestion1 === false}
                onChange={() => handleYesNoChange("question1", "no")}
              />
              <label htmlFor="question1_no">{t("stepSeven.no")}</label>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            {showQuestion1 && (
              <div className="input-label-full input-label">
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
            )}
            <div className="btn-group btn-group-stepthree">
              <button
                type="button"
                className={`back-btn back-btn-stepthree ${!showQuestion1 ? "back-btn-grow" : ""}`}
                onClick={prevInfo}
              >
                <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
              </button>
              {showQuestion1 && (
                <div className="forward-btns">
                  <button type="submit" className="long-btn long-btn-stepthree">
                    {t("stepSeven.continueJourney")}
                  </button>
                </div>
              )}
            </div>
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
          <div className="yes-no-buttons">
            <div className="yes-no-radio">
              <input
                type="radio"
                id="question2_yes"
                name="question2"
                value="yes"
                checked={showQuestion2 === true}
                onChange={() => handleYesNoChange("question2", "yes")}
              />
              <label htmlFor="question2_yes">{t("stepSeven.yes")}</label>
            </div>
            <div className="yes-no-radio">
              <input
                type="radio"
                id="question2_no"
                name="question2"
                value="no"
                checked={showQuestion2 === false}
                onChange={() => handleYesNoChange("question2", "no")}
              />
              <label htmlFor="question2_no">{t("stepSeven.no")}</label>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            {showQuestion2 && (
              <div className="input-label-full input-label">
                <input
                  className="input-border"
                  type="text"
                  value={formData.question2}
                  onChange={handleInputChange("question2")}
                  placeholder={t("stepSeven.question2.placeholder")}
                />
                {errors.question2 && (
                  <span className="error">{errors.question2}</span>
                )}
              </div>
            )}
            <div className="btn-group btn-group-stepthree">
              <button
                type="button"
                className={`back-btn back-btn-stepthree ${!showQuestion2 ? "back-btn-grow" : ""}`}
                onClick={prevInfo}
              >
                <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
              </button>
              {showQuestion2 && (
                <div className="forward-btns">
                  <button type="submit" className="long-btn long-btn-stepthree">
                    {t("stepSeven.continueJourney")}
                  </button>
                </div>
              )}
            </div>
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
          <div className="yes-no-buttons">
            <div className="yes-no-radio">
              <input
                type="radio"
                id="question3_yes"
                name="question3"
                value="yes"
                checked={showQuestion3 === true}
                onChange={() => handleYesNoChange("question3", "yes")}
              />
              <label htmlFor="question3_yes">{t("stepSeven.yes")}</label>
            </div>
            <div className="yes-no-radio">
              <input
                type="radio"
                id="question3_no"
                name="question3"
                value="no"
                checked={showQuestion3 === false}
                onChange={() => handleYesNoChange("question3", "no")}
              />
              <label htmlFor="question3_no">{t("stepSeven.no")}</label>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            {showQuestion3 && (
              <div className="input-label-full input-label">
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
            )}
            <div className="btn-group btn-group-stepthree">
              <button
                type="button"
                className={`back-btn back-btn-stepthree ${!showQuestion3 ? "back-btn-grow" : ""}`}
                onClick={prevInfo}
              >
                <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
              </button>
              {showQuestion3 && (
                <div className="forward-btns">
                  <button type="submit" className="long-btn long-btn-stepthree">
                    {t("stepSeven.continueJourney")}
                  </button>
                </div>
              )}
            </div>
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
          <div className="yes-no-buttons">
            <div className="yes-no-radio">
              <input
                type="radio"
                id="question4_yes"
                name="question4"
                value="yes"
                checked={showQuestion4 === true}
                onChange={() => handleYesNoChange("question4", "yes")}
              />
              <label htmlFor="question4_yes">{t("stepSeven.yes")}</label>
            </div>
            <div className="yes-no-radio">
              <input
                type="radio"
                id="question4_no"
                name="question4"
                value="no"
                checked={showQuestion4 === false}
                onChange={() => handleYesNoChange("question4", "no")}
              />
              <label htmlFor="question4_no">{t("stepSeven.no")}</label>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            {showQuestion4 && (
              <div className="input-label-full input-label">
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
            )}
            <div className="btn-group btn-group-stepthree">
              <button
                type="button"
                className={`back-btn back-btn-stepthree ${!showQuestion4 ? "back-btn-grow" : ""}`}
                onClick={prevInfo}
              >
                <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
              </button>
              {showQuestion4 && (
                <div className="forward-btns">
                  <button type="submit" class                Name="long-btn long-btn-stepthree">
                  {t("stepSeven.continueJourney")}
                </button>
              </div>
            )}
          </div>
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
        <div className="yes-no-buttons">
          <div className="yes-no-radio">
            <input
              type="radio"
              id="question5_yes"
              name="question5"
              value="yes"
              checked={showQuestion5 === true}
              onChange={() => handleYesNoChange("question5", "yes")}
            />
            <label htmlFor="question5_yes">{t("stepSeven.yes")}</label>
          </div>
          <div className="yes-no-radio">
            <input
              type="radio"
              id="question5_no"
              name="question5"
              value="no"
              checked={showQuestion5 === false}
              onChange={() => handleYesNoChange("question5", "no")}
            />
            <label htmlFor="question5_no">{t("stepSeven.no")}</label>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="input-form">
          {showQuestion5 && (
            <div className="input-label-full input-label">
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
          )}
          <div className="btn-group btn-group-stepthree">
            <button
              type="button"
              className={`back-btn back-btn-stepthree ${!showQuestion5 ? "back-btn-grow" : ""}`}
              onClick={prevInfo}
            >
              <img src="/assets/arrow.svg" alt="arrow" /> {t("stepSeven.back")}
            </button>
            {showQuestion5 && (
              <div className="forward-btns">
                <button type="submit" className="long-btn long-btn-stepthree">
                  {t("stepSeven.continueJourney")}
                </button>
              </div>
            )}
          </div>
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

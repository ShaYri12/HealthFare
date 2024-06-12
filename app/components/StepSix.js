'use client';
import { useState } from "react";
import "../styles/stepsix.css";
import "../styles/form.css";
import Review from "./Review";

const StepSix = ({ nextStep, prevStep, handleChange, values }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      title: "What’s your name?",
      form: (
        <form className="input-form">
          <div className="input-group">
            <div className="input-label">
              <label>FIRST NAME</label>
              <input type="text" placeholder="e.g., John" />
            </div>
            <div className="input-label">
              <label>LAST NAME</label>
              <input type="text" placeholder="e.g., John" />
            </div>
          </div>
        </form>
      ),
    },
    {
      title: "What’s your address?",
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <label>STREET ADDRESS</label>
            <input type="text" placeholder="e.g., 123 Main St" />
          </div>
          <div className="input-group">
            <div className="input-label">
              <label>CITY</label>
              <input type="text" placeholder="e.g., Los Angeles" />
            </div>
            <div className="input-label">
              <label>ZIP CODE</label>
              <input type="number" placeholder="e.g., 90001" />
            </div>
          </div>
          <div className="input-label location">
            <label>STATE</label>
            <select onChange={handleChange("location")} value={values.location}>
              <option value="">Select...</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Idaba">Idaba</option>
            </select>
          </div>
        </form>
      ),
    },
    {
      title: "What’s your date of birth?",
      description:
        "To participate in this program, you must be at least 18 years old. If you are under 18, we regret that you are not eligible to proceed with this program. Thank you for your understanding.",
      form: (
        <form className="input-form">
          <div className="input-group">
            <div className="input-label">
              <label>MONTH</label>
              <input type="number" placeholder="MM" />
            </div>
            <div className="input-label">
              <label>DAY</label>
              <input type="number" placeholder="DD" max="31" />
            </div>
            <div className="input-label">
              <label>YEAR</label>
              <input type="number" placeholder="YYYY" max="2024" />
            </div>
          </div>
        </form>
      ),
    },
    {
      title: "What’s your gender?",
      form: (
        <form className="input-form">
          <div className="gender-select">
            <div className="gender-option">
              <input type="radio" id="male" name="gender" />
              <label htmlFor="male"> Male </label>
            </div>
            <div className="gender-option">
              <input type="radio" id="female" name="gender" />
              <label htmlFor="female"> Female </label>
            </div>
            <div className="gender-option">
              <input type="radio" id="prefer-not-to-say" name="gender" />
              <label htmlFor="prefer-not-to-say"> Prefer not to answer </label>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: "What’s your phone?",
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <input type="text" placeholder="e.g., (123) 456-7890" />
          </div>
        </form>
      ),
    },
    {
      title: "What’s your email?",
      form: (
        <form className="input-form">
          <div className="input-label-full input-label">
            <input type="text" placeholder="e.g., johndoe@example.com" />
          </div>
        </form>
      ),
    },
  ];

  const nextInfo = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      nextStep();
    }
  };

  const prevInfo = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      prevStep();
    }
  };

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>{questions[currentQuestion].title}</h2>
        {questions[currentQuestion].description && (
          <p>{questions[currentQuestion].description}</p>
        )}
      </div>
      {questions[currentQuestion].form}

      <div className="btn-group btn-group-stepthree">
        <button className="back-btn back-btn-stepthree" onClick={prevInfo}>
          <img src="/assets/arrow.svg" alt="arrow" /> Back
        </button>
        <button className="long-btn long-btn-stepthree" onClick={nextInfo}> Continue Your Journey </button>
        <button className="arrow-btn arrow-btn-stepthree" onClick={nextInfo}>
          <img src="/assets/arrow.svg" alt="" />
        </button>
      </div>

      <Review />
    </div>
  );
};

export default StepSix;

"use client";
import { useState } from "react";
import "../styles/stepsix.css";
import "../styles/form.css";
import Testimonial from "./Testimonial";
import Review from "./Review";

const StepSix = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div className="formContainer step-form">
      {/* Question 1 */}
      <div className="title-info">
        <h2>what’s your name?</h2>
      </div>
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

      {/* Question 2 */}
      <div className="title-info">
        <h2>what’s your address?</h2>
      </div>
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

      {/* Question 3 */}
      <div className="title-info">
        <h2>what’s your date of birth?</h2>
        <p>
          To participate in this program, you must be at least 18 years old. If
          you are under 18, we regret that you are not eligible to proceed with
          this program. Thank you for your understanding.
        </p>
      </div>
      <form className="input-form">
        <div className="input-group">
          <div className="input-label">
            <label>MONTH</label>
            <input type="month" placeholder="MM" />
          </div>
          <div className="input-label">
            <label>DAY</label>
            <input type="day" placeholder="DD" />
          </div>
          <div className="input-label">
            <label>YEAR</label>
            <input type="year" placeholder="YYYY" />
          </div>
        </div>
      </form>

      {/* Question 4 */}
      <div className="title-info">
        <h2>WHAT’S YOUR GENDER?</h2>
      </div>
      <form className="input-form">
        <div className="gender-select">
            <div className="gender-option">
                <input type="radio" id="gender" name="gender" />
                <span htmlFor="gender"> Male </span>
            </div>
            <div className="gender-option">
                <input type="radio" id="gender" name="gender" />
                <span htmlFor="gender"> Female </span>
            </div>
            <div className="gender-option">
                <input type="radio" id="gender" name="gender" />
                <span htmlFor="gender"> Prefer not to answer </span>
            </div>
        </div>
      </form>

      {/* Question 5 */}
      <div className="title-info">
        <h2>WHAT’S YOUR PHONE?</h2>
      </div>
      <form className="input-form">
        <div className="input-label-full input-label">
          <input type="text" placeholder="e.g., (123) 456-7890" />
        </div>
      </form>

      {/* Question 6 */}
      <div className="title-info">
        <h2>WHAT’S YOUR EMAIL?</h2>
      </div>
      <form className="input-form">
        <div className="input-label-full input-label">
          <input type="text" placeholder="e.g., johndoe@example.com" />
        </div>
      </form>


      <div className="btn-group btn-group-stepthree">
        <button className="back-btn back-btn-stepthree" onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> Back
        </button>
        <button className="long-btn long-btn-stepthree" onClick={nextStep}>
          Continue Your Journey
        </button>
        <button className="arrow-btn arrow-btn-stepthree" onClick={nextStep}>
          <img src="/assets/arrow.svg" alt="" />
        </button>
      </div>

      <Review />
    </div>
  );
};

export default StepSix;

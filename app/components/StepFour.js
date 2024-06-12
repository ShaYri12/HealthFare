'use client';
import { useState } from 'react';
import '../styles/stepfour.css';
import '../styles/form.css'
import Testimonial from './Testimonial';

const StepFour = ({ nextStep, prevStep, handleChange, values }) => {

    return (
      <div className="formContainer step-form">
        <div className="title-info">
          <h2>Calculate Your Body Mass Index (BMI)</h2>
          <p>
            This helps us calculate your BMI. BMI is one factor that we use to
            determine your weight care path, so it's important to be as accurate
            as possible.
          </p>
        </div>
        <div className="pounds">
          <p>POUNDS</p>
          <input type="number" placeholder='e.g., 150' />
        </div>
        <div className='feet-inches'>
            <div className="feet-option">
                <p>FEET</p>
                <select onChange={handleChange("feet")} value={values.feet}>
                    <option value="">e.g., 5</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
            <div className="inches-option">
                <p>INCHES</p>
                <select onChange={handleChange("inches")} value={values.inches}>
                    <option value="">e.g., 8</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
            </div>
        </div>
        <div className='btn-group btn-group-stepthree'>
          <button className='back-btn back-btn-stepthree' onClick={prevStep}>
            <img src="/assets/arrow.svg" alt="arrow" /> Back
          </button>
          <div className='forward-btns'>
            <button className='long-btn long-btn-stepthree' onClick={nextStep}>Continue Your Journey</button>
            <button className='arrow-btn arrow-btn-stepthree' onClick={nextStep}><img src="/assets/arrow.svg" alt=""/></button>
          </div>
        </div>

        <Testimonial/>
      </div>
    );
};

export default StepFour;

import { useState, useEffect } from 'react';
import '../styles/form.css';
import '../styles/steptwelve.css';

const StepTwelve = ({ nextStep, handleChange, values }) => {
  // State to manage the selected day
  const [selectedDay, setSelectedDay] = useState('');
  // State to manage the selected time
  const [selectedTime, setSelectedTime] = useState("12:45 PM");

  useEffect(() => {
    // Get the next day's date
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);

    // Format the date as "WEEKDAY DAYTH MONTH"
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = nextDay.toLocaleDateString('en-US', options);

    // Set the selected day
    setSelectedDay(formattedDate);
  }, []);

  // Function to handle day increment
  const handleDayIncrement = () => {
    const currentDay = new Date(selectedDay);
    currentDay.setDate(currentDay.getDate() + 1);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDay.toLocaleDateString('en-US', options);
    setSelectedDay(formattedDate);
  };

  // Function to handle day decrement
  const handleDayDecrement = () => {
    const currentDay = new Date(selectedDay);
    currentDay.setDate(currentDay.getDate() - 1);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDay.toLocaleDateString('en-US', options);
    setSelectedDay(formattedDate);
  };

  // Function to handle time selection
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    nextStep();
  };

  return (
    <div className="formContainer step-form">
      <div className='title-info'>
        <h2>Schedule Your Appointment</h2>
        <p>Choose a Time to Consult with Our Licensed Provider</p>
      </div>
      <div className="schedule-section">
        <div className="schedule-header">
          <button onClick={handleDayDecrement}>
            <img alt="left-arrow" src="/assets/arrow.svg"/>
          </button>
          <h3>{selectedDay}</h3>
          <button onClick={handleDayIncrement}>
            <img className='right-arrow' alt="right-arrow" src="/assets/arrow.svg"/>
          </button>
        </div>
        <div className="times">
          <div className='selected-time'>{selectedTime}</div>
          <div className='time-options'>
            {/* Map over time options and render them */}
            {["12:45 PM", "01:15 PM", "01:45 PM", "02:15 PM", "02:45 PM", "03:15 PM", "03:45 PM"].map((time, index) => (
              <div key={index} className={`time ${selectedTime === time ? 'active' : ''}`} onClick={() => handleTimeSelection(time)}>
                {time}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwelve;

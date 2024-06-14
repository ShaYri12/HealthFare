import { useState, useEffect } from 'react';
import '../styles/form.css';
import '../styles/steptwelve.css';
import { useTranslation } from 'react-i18next';

const StepTwelve = ({ nextStep, handleChange, values }) => {
  const { t } = useTranslation();

  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState("12:45 PM");

  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);

    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = nextDay.toLocaleDateString('en-US', options);

    setSelectedDay(formattedDate);
  }, []);

  const handleDayIncrement = () => {
    const currentDay = new Date(selectedDay);
    currentDay.setDate(currentDay.getDate() + 1);

    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDay.toLocaleDateString('en-US', options);

    setSelectedDay(formattedDate);
  };

  const handleDayDecrement = () => {
    const currentDay = new Date(selectedDay);
    currentDay.setDate(currentDay.getDate() - 1);

    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDay.toLocaleDateString('en-US', options);

    setSelectedDay(formattedDate);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setShowModal(true); // Show modal when time is selected
  };

  const confirmAppointment = () => {
    setShowModal(false); // Close modal
    nextStep(); // Proceed to next step after confirmation
  };

  const closeModal = () => {
    setShowModal(false); // Close modal without confirming
  };

  return (
    <div className="formContainer step-form">
      <div className='title-info'>
        <h2>{t('stepTwelve.title')}</h2>
        <p>{t('stepTwelve.chooseTime')}</p>
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
            {["12:45 PM", "01:15 PM", "01:45 PM", "02:15 PM", "02:45 PM", "03:15 PM", "03:45 PM"].map((time, index) => (
              <div key={index} className={`time ${selectedTime === time ? 'active' : ''}`} onClick={() => handleTimeSelection(time)}>
                {time}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{t('stepTwelve.confirmAppointment')}</h3>
            <p>{selectedDay} - {selectedTime}</p>
            <div className='btn-group'>
              <div className='forward-btns'>
                <button className='cancel-btn' onClick={closeModal}>{t('stepTwelve.cancel')}</button>
                <button className='confirm-btn' onClick={confirmAppointment}>{t('stepTwelve.confirm')}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepTwelve;

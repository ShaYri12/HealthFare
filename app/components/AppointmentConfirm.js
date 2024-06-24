import { useTranslation } from 'react-i18next';
import '../styles/appointment-confirm.css';
import '../styles/form.css';
import Testimonial from './Testimonial';

const AppointmentConfirm = ({ nextStep, prevStep, values }) => {
    const { t } = useTranslation();
    const DoctorName = "Tyra Dean-Ousley, NP"

    return (
      <div className="formContainer step-form">
        <div className="title-info">
          
          <h2 className='appointment-title'>{t("appointment.title")}</h2>

          <div className='doctorImg-box'>
            <div className="doctor-profile">
                <img src="/assets/doctor.jpg" alt="doctorImg" />
            </div>
          </div>

          <span className="appointment-details">
            {t("appointment.pending")} <strong>{values.stepTwo.title}</strong>{" "}
            {t("appointment.at")} <b>{values.appointment.selectedTime}</b>{" "}
            {t("appointment.on")} <b>{values.appointment.selectedDay}</b>{" "}
            {t("appointment.with")} <b>{DoctorName}</b>
          </span>
        </div>

        <div className='about-steps'>
            <h3 className='steps-heading'>Next Steps</h3>
            <ol className='steps'>
                <li>Complete Intake Forms</li>
                <li>Complete Payment</li>
                <li>Speak to your Provider</li>
            </ol>
        </div>

        <div className="btn-group btn-group-stepthree">
          <button
            type="button"
            className="back-btn back-btn-stepthree"
            onClick={prevStep}
          >
            <img src="/assets/arrow.svg" alt="arrow" /> {t("appointment.back")}
          </button>
          <div className="forward-btns">
            <button
              type="button"
              className="long-btn long-btn-stepthree"
              onClick={nextStep}
            >
              {t("appointment.continueJourney")}
            </button>
          </div>
        </div>

        <Testimonial />
      </div>
    );
};

export default AppointmentConfirm;

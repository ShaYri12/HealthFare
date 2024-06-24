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
          
          <h2 className='appointment-title'>{t("appointmentConfirm.title")}</h2>

          <div className='doctorImg-box'>
            <div className="doctor-profile">
                <img src="/assets/doctor.jpg" alt="doctorImg" />
            </div>
          </div>

          <span className="appointment-details">
            {t("appointmentConfirm.pending")} <strong>{values.stepTwo.title}</strong>{" "}
            {t("appointmentConfirm.at")} <b>{values.appointment.selectedTime}</b>{" "}
            {t("appointmentConfirm.on")} <b>{values.appointment.selectedDay}</b>{" "}
            {t("appointmentConfirm.with")} <b>{DoctorName}</b>
          </span>
        </div>

        <div className='about-steps'>
            <h3 className='steps-heading'>{t("appointmentConfirm.nextSteps")}</h3>
            <ol className='steps'>
                <li>{t("appointmentConfirm.step1")}</li>
                <li>{t("appointmentConfirm.step2")}</li>
                <li>{t("appointmentConfirm.step3")}</li>
            </ol>
        </div>

        <div className="btn-group btn-group-stepthree">
          <button
            type="button"
            className="back-btn back-btn-stepthree"
            onClick={prevStep}
          >
            <img src="/assets/arrow.svg" alt="arrow" /> {t("appointmentConfirm.back")}
          </button>
          <div className="forward-btns">
            <button
              type="button"
              className="long-btn long-btn-stepthree"
              onClick={nextStep}
            >
              {t("appointmentConfirm.continueJourney")}
            </button>
          </div>
        </div>

        <Testimonial />
      </div>
    );
};

export default AppointmentConfirm;

'use client';
import '../styles/stepeleven.css';
import '../styles/form.css';
import Testimonial from './Testimonial';

const StepEleven = ({ prevStep, nextStep, handleChange, values }) => {

  const cardsData = [
    {
      imgSrc: "/assets/step2-product1.svg",
      title: "Semaglutide (3-Month treatment Plan)",
      price: "$889.99",
      monthlyPrice: "$296",
      description: "Lose up to 25lbs",
      savings: "$1500" // example value for savings
    },
  ];

  return (
    <div className="formContainer step-form">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-top">
            <div className="card-img">
              <img src={card.imgSrc} alt={card.title} />
            </div>
            <div className="card-title-price">
              {card.savings && (
                <div className="savings">
                  <p>Total Savings</p>
                  <span>
                    {card.savings}
                    <p>/year</p>
                  </span>
                </div>
              )}
              <h3>{card.title}</h3>
              <span>
                <h2>{card.price}</h2>
                <p>
                  {card.monthlyPrice}
                  <span>/month*</span>
                </p>
              </span>
              <p className="lose">{card.description}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="thank-you">
        <h3>Thank You for Your Purchase!</h3>
        <p>
            Thank you for choosing our Semaglutide - 3-Month Treatment Plan. Your
            order has been successfully processed and a confirmation email has
            been sent to you.
        </p>
      </div>

      <div className='btn-group btn-group-stepthree'>
            <button className='long-btn long-btn-stepthree' onClick={nextStep}>Schedule Your Appointment</button>
      </div>

      <Testimonial />
    </div>
  );
};

export default StepEleven;

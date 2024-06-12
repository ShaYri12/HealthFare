'use client';
import '../styles/stepten.css';
import '../styles/form.css';
import Review from "./Review";

const StepTen = ({ prevStep, nextStep, handleChange, values }) => {

  const cardsData = [
    {
      imgSrc: "/assets/step2-product1.svg",
      title: "Semaglutide (3-Month treatment Plan)",
      price: "$889.99",
      monthlyPrice: "$296",
      description: "Lose up to 25lbs",
      features: [
        "5mg/2ml Injection (Same as Ozempic & Wegovy)",
        "Weekly application - total of 12 applications"
      ],
      savings: "$1500" // example value for savings
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>Stay Informed with SMS Notifications</h2>
        <p>Would you like to receive SMS notifications about your program?</p>
      </div>
      {cardsData.map((card, index) => (
        <div className='card' key={index}>
          <div className='card-top'>
            <div className='card-img'>
              <img src={card.imgSrc} alt={card.title} />
            </div>
            <div className='card-title-price'>
              {card.savings && (
                <div className='savings'>
                  <p>Total Savings</p>
                  <span>{card.savings}<p>/year</p></span>
                </div>
              )}
              <h3>{card.title}</h3>
              <span>
                <h2>{card.price}</h2>
                <p>{card.monthlyPrice}<span>/month*</span></p>
              </span>
              <p className='lose'>{card.description}</p>
            </div>
          </div>
          <div className='card-info'>
            {card.features.map((feature, index) => (
              <span key={index}>
                <img src="/assets/checkmark.svg" alt="checkmark" />
                <p>{feature}</p>
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className='additional-suppliments'>
        <span>
            <h3>Additional Supplements</h3>
            <button>Add Supplements <img src="/assets/arrowblue.svg" alt=""/></button>
        </span>
        <p>(No additional supplements selected)</p>
      </div>

      <div className='included-card'>
        <h3>What's Included</h3>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>Provider Evaluation: Included</p>
        </span>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>Medication Adjustments: Included</p>
        </span>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>On-Going Check-Ins: Included</p>
        </span>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>Nutrition Plan: Included</p>
        </span>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>Syringes: Included</p>
        </span>
        <span>
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <p>Shipping: Free</p>
        </span>
      </div>

      <div className='total-cost'>
        <h3>TOTAL COST</h3>
        <h2>$1599.99</h2>
      </div>

      <div className="btn-group btn-group-stepthree">
        <button className="back-btn back-btn-stepthree" onClick={prevStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> Back
        </button>
        <button className="long-btn long-btn-stepthree proceed-btn" onClick={nextStep}> <img src="/assets/secure.svg" alt=""/> Proceed to Payment </button>
        <button className="arrow-btn arrow-btn-stepthree" onClick={nextStep}>
          <img src="/assets/arrow.svg" alt="" />
        </button>
      </div>

      <div className='pay-img'>
        <img src="/assets/pay1.svg" alt=""/>
        <img src="/assets/pay2.svg" alt=""/>
        <img src="/assets/pay3.svg" alt=""/>
        <img src="/assets/pay4.svg" alt=""/>
        <img src="/assets/pay5.svg" alt=""/>
        <img src="/assets/pay6.svg" alt=""/>
      </div>


      <Review/>
    </div>
  );
};

export default StepTen;

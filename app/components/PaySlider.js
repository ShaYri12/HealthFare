import React from "react";
import Marquee from "react-fast-marquee";
import '../styles/pay-slider.css';

const PaySlider = () => {
  return (
    <Marquee speed={50} gradient={false}>
      <div className="pay-img">
        <img src="/assets/pay1.svg" alt="pay1" />
        <img src="/assets/pay2.svg" alt="pay2" />
        <img src="/assets/pay3.svg" alt="pay3" />
        <img src="/assets/pay4.svg" alt="pay4" />
        <img src="/assets/pay5.svg" alt="pay5" />
        <img src="/assets/pay6.svg" alt="pay6" />
      </div>
    </Marquee>
  );
};

export default PaySlider;

import React from "react";
import PricingCalculator from "../components/pricingCal";
import HapticDiv from "../components/hapticdiv";
import "../styles/pricing.css";
import TypingText from "../components/typing";

const Pricing = () => {
  return (
    <div className="pricing_view">
      <h1>Our Pricing</h1>
      <div className="pricing_container">
        <div className="haptic_view">
          <HapticDiv />
        </div>
        <div className="calculator_view">
          <PricingCalculator />
        </div>
      </div>
    </div>
  );
};

export default Pricing;

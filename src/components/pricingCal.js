import React, { useState } from 'react';

function PricingCalculator() {
  const [hours, setHours] = useState(0);
  const [price, setPrice] = useState(0);

  const handleHoursChange = (event) => {
    const enteredHours = parseInt(event.target.value, 10); // Parse or default to 0
    setHours(enteredHours);
    calculatePrice(enteredHours);
  };

  const calculatePrice = (hours) => {
    let calculatedPrice = 0;

    if (hours < 10) {
      calculatedPrice = hours * 1500;
    } else if (hours < 50) {
      calculatedPrice = hours * 1400;
    } else if (hours < 100) {
      calculatedPrice = hours * 1300;
    } else {
      calculatedPrice = hours * 1200;
    }
    setPrice(calculatedPrice);
  };

  return (
    <div>
      <h2>Realtime Calculator</h2>
      <label htmlFor="hours">Enter Hours:</label>
      
      <input
        type="range"
        id="hours"
        value={hours}
        onChange={handleHoursChange}
        min="0" // Prevent negative hours
      />
      <p>Hours - {hours}</p>

      <p>Price - {price} LKR</p>


       
    </div>
  );
}

export default PricingCalculator;
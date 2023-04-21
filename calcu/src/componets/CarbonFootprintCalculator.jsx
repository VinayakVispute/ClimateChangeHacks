import React, { useState } from "react";

function CarbonFootprintCalculator({
  NumResidents,
  LivingType,
  HouseSize,
  cleanEnergy,
  Recycle,
  DietType,
  LongFlights,
  shortFlights,
  mediumFlights,
  hotel,
  

}) {
  // Define the carbon footprint calculation logic here
  const carbonFootprint = NumResidents * 100;

  return (
    <div>
      <h2>Carbon Footprint Calculator</h2>
      <p>NumResidents: {NumResidents}</p>
      <p>LivingType: {LivingType}</p>
      <p>HouseSize: {HouseSize}</p>
      <p>cleanEnergy: {cleanEnergy}</p>
      <p>Recycle: {Recycle}</p>
      <p>DietType: {DietType}</p>
      <p>     LongFlights:{LongFlights}</p>
      <p> shortFlights:{shortFlights}</p>
      <p>mediumFlights:{mediumFlights}</p>
      <p>hotel: {hotel}</p>
      <p>Carbon Footprint: {carbonFootprint} kg CO2e</p>
    </div>
  );
}

export default CarbonFootprintCalculator;

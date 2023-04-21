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
  var carbonFootprint = NumResidents * 100;
  //maps
  const numResidentsMap = {
    1: 20.21,
    2: 16.03,
    3: 13.47,
    4: 12.20,
    5: 11.35,
    "6+": 10.22,
  };
  const LivingTypeMap = {
    "Detached Single family home": 1.41,
    "attached Single family home": -0.67,
    "Apartment": -0.81,
    "Apartment(5+)": -4.16,
    "Mobile Home": -3.49,
  
  };
  const HouseSizeMap={
    "Under 500 sq ft":-2.52,
    "500-1000 sq ft":-3.02,
    "1000-1500 sq ft":-2.52,
    "1500-2000 sq ft":-0.38
  }
  const cleanEnergyMap={
    "Yes,some":-19.02+17.62,
    "Yes,most":-19.02+16.17,
    "Yes,all":-19.02+14.76,
    "No":0
  }
   
  carbonFootprint =
  NumResidents in numResidentsMap
    ? numResidentsMap[NumResidents]
    : "Not avialable";
    carbonFootprint +=
    LivingType in LivingTypeMap
    ? LivingTypeMap[LivingType]
    : "Not avialable";
    
    carbonFootprint +=
    HouseSize in HouseSizeMap
    ? HouseSizeMap[HouseSize]
    : "Not avialable";

    carbonFootprint +=
cleanEnergy in cleanEnergyMap
    ? cleanEnergyMap[cleanEnergy]
    : "Not avialable";
































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

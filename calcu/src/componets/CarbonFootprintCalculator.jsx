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
  selectedOptions
  

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
  const RecycleMap={
    "Yes":-17.62+17.48,
    "No":0
  }
  const DietTypeMap={
   "Vegetarian":16.82-17.62,
   "Non-Vegetarian":18.42-17.62,
   "No beef":17.02-17.62,
   "Vegan":16.62-17.62
   
  }
   
  const selectedOptionsMap={

    "I have programmable thermostat":15.40-16.48,
    "I use energy star appliances":15.67-16.48+0.09,
    "I use energy efficient lightbulbs":15.88-16.48,
    "I line dry my laundry":16.38-16.48
    
  }
  carbonFootprint =
  NumResidents in numResidentsMap
    ? numResidentsMap[NumResidents]
    : "0";
    carbonFootprint +=
    LivingType in LivingTypeMap
    ? LivingTypeMap[LivingType]
    : "0";
    
    carbonFootprint +=
    HouseSize in HouseSizeMap
    ? HouseSizeMap[HouseSize]
    : "0";

    carbonFootprint +=
cleanEnergy in cleanEnergyMap
    ? cleanEnergyMap[cleanEnergy]
    : "0";

    carbonFootprint +=
    Recycle in RecycleMap
        ? RecycleMap[Recycle]
        : "0";

        carbonFootprint +=
    DietType in DietTypeMap
        ? DietTypeMap[DietType]
        : "0";
    

    console.log(selectedOptions);

    for (const option of selectedOptions) {
        if (option in selectedOptionsMap) {
          carbonFootprint =parseFloat(carbonFootprint) + parseFloat(selectedOptionsMap[option]);
        }
      }


console.log(typeof(carbonFootprint));


























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

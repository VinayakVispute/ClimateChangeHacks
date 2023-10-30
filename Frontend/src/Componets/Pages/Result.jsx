import React from "react";
import Payment from "../Payment";
import Normalinfo from "../Normalinfo";
import Treecount from "../Treecount";
import Cardinfo from "../Cardinfo";
import Mail from "../Mail";

function Result({
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
  selectedOptions,
  AverageTravel,
  AverageTravelForMetro,
  AnnualMileage,
  fueleconomy,
  isChecked,
  isChecked1,
  isChecked2,
  isChecked3,
}) {
  // Define the carbon footprint calculation logic here

  const numResidentsMap = {
    1: 20.21,
    2: 16.03,
    3: 13.47,
    4: 12.2,
    5: 11.35,
    "6+": 10.22,
  };

  const LivingTypeMap = {
    "Detached Single family home": 1.41,
    "Attached Single family home": -0.67,
    Apartment: -0.81,
    "Apartment(5+)": -4.16,
    "Mobile Home": -3.49,
  };

  const HouseSizeMap = {
    "Under 500 sq ft": -2.52,
    "500-1000 sq ft": -3.02,
    "1000-1500 sq ft": -2.52,
    "1500-2000 sq ft": -0.38,
  };

  const cleanEnergyMap = {
    "Yes, some": -1.4,
    "Yes, most": -1.85,
    "Yes, all": -2.26,
    No: 0,
  };

  const RecycleMap = {
    Yes: -0.14,
    No: 0,
  };

  const DietTypeMap = {
    Vegetarian: -0.8,
    "Non-Vegetarian": 0.82,
    "No beef": 0.42,
    Vegan: -1,
  };

  const selectedOptionsMap = {
    "I have programmable thermostat": -1.08,
    "I use energy star appliances": -0.81,
    "I use energy efficient lightbulbs": -0.7,
    "I line dry my laundry": -0.1,
    Yes: -0.07,
  };

  const AverageTravelMap = {
    "Under 5 Miles": 0.02,
    "Under 5 to 9.9 Miles": 0.06,
    "10 to 14.9 Miles": 0.1,
    "15 to 19.9 Miles": 0.14,
    "20 to 29.9 Miles": 0.2,
    "30+ Miles": 0.28,
  };

  const AverageTravelForMetroMap = {
    "Under 5 Miles": 0.02,
    "Under 5 to 9.9 Miles": 0.04,
    "10 to 14.9 Miles": 0.06,
    "15 to 19.9 Miles": 0.09,
    "20 to 29.9 Miles": 0.12,
    "30+ Miles": 0.17,
  };

  const AnnualMileageMap = {
    "Under 1,000 Miles": 500,
    "1,000 Miles to 2,499 Miles": 1750,
    "2,500 Miles to 4,999 Miles": 5000,
    "5,0000 Miles to 9,999 Miles": 7500,
    "10,0000 Miles to 14,999 Miles": 15000,
    "15,0000 Miles to 19,999 Miles": 17500,
    "20,0000 Miles to 29,999 Miles": 25000,
    "30,0000 Miles + Miles": 30000,
  };

  const fueleconomyMap = {
    "0 to 14 MPG": 7,
    "15-19 MPG": 17,
    "20-24 MPG (US Average)": 22,
    "25-29 MPG": 27,
    "30-34 MPG": 32,
    "35-39 MPG": 37,
    "40-49 MPG": 42,
    "50-59 MPG": 52,
    "60-79 MPG": 62,
    "80-99 MPG": 82,
  };

  const hotelMap = {
    "1 to 2 nights": 0.06,
    "3 - 4 nights": 0.14,
    "5 - 6 nights": 0.22,
    "1 - 2 weeks": 0.22,
    "3 - 4 weeks": 0.94,
    "1 - 2 months": 1.73,
  };

  const LongFlightsMap = {
    0: 0,
    1: 0.85,
    2: 1.7,
    3: 2.55,
    4: 3.4,
    "5 to 9": 5.95,
    "9-14": 9.35,
  };

  const ShortFlightsMap = {
    0: 0,
    1: 0.4,
    2: 0.8,
    3: 1.2,
    4: 1.6,
    "5 to 9": 2.8,
    "9-14": 4.6,
  };

  const MediumFlightsMap = {
    0: 0,
    1: 0.08,
    2: 0.16,
    3: 0.24,
    4: 0.32,
    "5 to 9": 0.56,
    "9-14": 1.06,
  };

  let carbonFootprint = 0;

  carbonFootprint += numResidentsMap[NumResidents] || 0;
  carbonFootprint += LivingTypeMap[LivingType] || 0;
  carbonFootprint += HouseSizeMap[HouseSize] || 0;
  carbonFootprint += cleanEnergyMap[cleanEnergy] || 0;
  carbonFootprint += RecycleMap[Recycle] || 0;
  carbonFootprint += DietTypeMap[DietType] || 0;

  for (const option of selectedOptions) {
    carbonFootprint += selectedOptionsMap[option] || 0;
  }

  if (isChecked) {
    carbonFootprint += AverageTravelMap[AverageTravel] || 0;
  }

  if (isChecked1) {
    carbonFootprint += AverageTravelForMetroMap[AverageTravelForMetro] || 0;
  }

  if (isChecked2) {
    const mileage = AnnualMileageMap[AnnualMileage] || 0;
    const mpg = fueleconomyMap[fueleconomy] || 0;
    carbonFootprint += (mileage / mpg) * 0.0089;
  }

  carbonFootprint += hotelMap[hotel] || 0;

  if (LongFlights) {
    carbonFootprint += LongFlightsMap[LongFlights] || 0;
  }

  if (shortFlights) {
    carbonFootprint += ShortFlightsMap[shortFlights] || 0;
  }

  if (mediumFlights) {
    carbonFootprint += MediumFlightsMap[mediumFlights] || 0;
  }

  const trees = parseInt(carbonFootprint / 0.07);

  return (
    <div>
      <Payment trees={trees} carbonFootprint={carbonFootprint} />
      <Normalinfo trees={trees} carbonFootprint={carbonFootprint} />
      <Treecount trees={trees} carbonFootprint={carbonFootprint} />
      <Cardinfo trees={trees} carbonFootprint={carbonFootprint} />
      <Mail trees={trees} carbonFootprint={carbonFootprint} />
    </div>
  );
}

export default Result;

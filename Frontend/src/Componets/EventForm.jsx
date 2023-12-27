import React, { useState } from "react";
import Result from "./Pages/Result";

export default function EventForm() {
  const [NumResidents, setNumResidents] = useState("");
  const [LivingType, setLivingType] = useState("");
  const [HouseSIze, setHouseSIze] = useState("");
  const [cleanEnergy, setcleanEnergy] = useState("");
  const [Recycle, setRecycle] = useState("");
  const [DietType, setDietType] = useState("");
  const [LongFlights, setLongFlights] = useState("");
  const [mediumFlights, setmediumFlights] = useState("");
  const [shortFlights, setshortFlights] = useState("");
  const [hotel, sethotel] = useState("");
  const [AverageTravel, setAverageTravel] = useState("");
  const [AverageTravelForMetro, setAverageTravelForMetro] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [AnnualMileage, setAnnualMileage] = useState("");
  const [fueleconomy, setfueleconomy] = useState("");
  const [issubmit, setissubmit] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setissubmit(true);
  };
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    {
      value: "I have programmable thermostat",
      label: "I have programmable thermostat",
    },
    {
      value: "I use energy star appliances",
      label: "I use energy star appliances",
    },
    {
      value: "I use energy efficient lightbulbs",
      label: "I use energy efficient lightbulbs",
    },
    { value: "I line dry my laundry", label: "I line dry my laundry" },
  ];
  const option1 = "Yes";
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };
  const handleOptionChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleOptionChange1 = (event1) => {
    setIsChecked1(event1.target.checked);
  };
  const handleOptionChange2 = (event2) => {
    setIsChecked2(event2.target.checked);
  };
  const handleOptionChange3 = (event3) => {
    setIsChecked3(event3.target.checked);
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-w-full max-h-full">
      {issubmit ? (
        <div>
          <Result
            NumResidents={NumResidents}
            LivingType={LivingType}
            HouseSize={HouseSIze}
            cleanEnergy={cleanEnergy}
            Recycle={Recycle}
            DietType={DietType}
            LongFlights={LongFlights}
            shortFlights={shortFlights}
            mediumFlights={mediumFlights}
            hotel={hotel}
            selectedOptions={selectedOptions}
            AverageTravel={AverageTravel}
            AverageTravelForMetro={AverageTravelForMetro}
            AnnualMileage={AnnualMileage}
            fueleconomy={fueleconomy}
            isChecked={isChecked}
            isChecked1={isChecked1}
            isChecked2={isChecked2}
            isChecked3={isChecked3}
          />
        </div>
      ) : (
        <div className="py-8 px-4 mx-auto max-w-4xl lg:py-16">
          <h1 className="flex items-center text-5xl font-extrabold dark:text-white mb-8">
            EcoFootprint
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
              Calculator
            </span>
          </h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

          <form onSubmit={handleSubmit}>
            <h2 className="text-4xl font-extrabold dark:text-white my-8">
              Household Section
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="NumResidents"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Number of residents including myself:
                </label>
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="NumResidents"
                  value={NumResidents}
                  onChange={(event) => setNumResidents(event.target.value)}
                >
                  <option value="">Select your option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6+">5</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="LivingType"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  I live in a(n)
                </label>
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="LivingType"
                  value={LivingType}
                  onChange={(event) => setLivingType(event.target.value)}
                >
                  <option value="">Select your option</option>
                  <option value="Detached Single family home">
                    Detached Single family home
                  </option>
                  <option value="attached Single family home">
                    attached Single family home
                  </option>
                  <option value="Apartment">Apartment</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="HouseSIze"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Size of house
                </label>
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="HouseSIze"
                  value={HouseSIze}
                  onChange={(event) => setHouseSIze(event.target.value)}
                >
                  <option value="">Select your option</option>
                  <option value="Under 500 sq ft">Under 500 sq ft</option>
                  <option value="500-1000 sq ft">500-1000 sq ft</option>
                  <option value="1000-1500 sq ft">1000-1500 sq ft</option>
                  <option value="1500-2000 sq ft">1500-2000 sq ft</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="cleanEnergy"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Do you purchase clean energy such as wind or solar?
                </label>
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="cleanEnergy"
                  value={cleanEnergy}
                  onChange={(event) => setcleanEnergy(event.target.value)}
                >
                  <option value="">Select your option</option>
                  <option value="Yes,some">Yes,some</option>
                  <option value="Yes,most">Yes,most</option>
                  <option value="Yes,all">Yes,all</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="Recycle"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Do you recycle items such as metal, plastic, glass, or paper?
                </label>
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="Recycle"
                  value={Recycle}
                  onChange={(event) => setRecycle(event.target.value)}
                >
                  <option value="">Select your option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="DietType"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  My diet is mostly:
                </label>
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="DietType"
                  value={DietType}
                  onChange={(event) => setDietType(event.target.value)}
                >
                  <option value="">Select your option</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="No beef">No beef</option>
                  <option value="Vegan">Vegan</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="carDistance"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Do you make a conscious effort to save energy? Check all that
                  apply.
                </label>
                {options.map((option) => (
                  <div key={option.value} className="flex items-center mb-4">
                    <input
                      id={`checkbox-${option.value}`}
                      type="checkbox"
                      value={option.value}
                      checked={selectedOptions.includes(option.value)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-${option.value}`}
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 className="text-4xl font-extrabold dark:text-white my-8">
              Transport Section
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Select all of the ways you travel
                </label>
                {/* --- */}
                <div className="flex items-center mb-4">
                  <input
                    id="Intercity/Commuter Rail"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={isChecked}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="Intercity/Commuter Rail"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Intercity/Commuter Rail
                  </label>
                </div>
                {/* --- */}
                <div className="flex items-center mb-4">
                  <input
                    id="Bus/Subway/Metro"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={isChecked1}
                    onChange={handleOptionChange1}
                  />
                  <label
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="Bus/Subway/Metro"
                  >
                    Bus/Subway/Metro
                  </label>
                </div>
                {/* --- */}
                <div className="flex items-center mb-4">
                  <input
                    id="Car"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={isChecked2}
                    onChange={handleOptionChange2}
                  />
                  <label
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="Car"
                  >
                    Car
                  </label>
                </div>
                {/* --- */}
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="Bike/Walk"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={isChecked3}
                    onChange={handleOptionChange3}
                  />
                  <label
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="Bike/Walk"
                  >
                    Bike/Walk
                  </label>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2  gap-4 sm:gap-6 space-y-8">
              {isChecked && (
                <div>
                  <div className="sm:col-span-2 ">
                    <label
                      htmlFor="AverageTravel"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Average total weekly travel via intercity or commuter
                      rail...
                    </label>
                    <select
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="AverageTravel"
                      value={AverageTravel}
                      onChange={(event) => setAverageTravel(event.target.value)}
                    >
                      <option value="">Select your option</option>
                      <option value="0 Miles (Usa Average)">
                        0 Miles (Usa Average)
                      </option>
                      <option value="Under 5 Miles">Under 5 Miles</option>
                      <option value="Under 5 to 9.9 Miles">
                        Under 5 to 9.9 Miles
                      </option>
                      <option value="10 to 14.9 Miles">10 to 14.9 Miles</option>
                      <option value="15 to 19.9 Miles">15 to 19.9 Miles</option>
                      <option value="20 to 29.9 Miles">20 to 29.9 Miles</option>
                      <option value="30+ Miles">30+ Miles</option>
                    </select>
                  </div>
                </div>
              )}
              {isChecked1 && (
                <div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="AverageTravelForMetro"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Average total weekly travel via bus, subway, or metro...
                    </label>
                    <select
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="AverageTravelForMetro"
                      value={AverageTravelForMetro}
                      onChange={(event) =>
                        setAverageTravelForMetro(event.target.value)
                      }
                    >
                      <option value="">Select your option</option>
                      <option value="0 Miles (Usa Average)">
                        0 Miles (Usa Average)
                      </option>
                      <option value="Under 5 Miles">Under 5 Miles</option>
                      <option value="Under 5 to 9.9 Miles">
                        Under 5 to 9.9 Miles
                      </option>
                      <option value="10 to 14.9 Miles">10 to 14.9 Miles</option>
                      <option value="15 to 19.9 Miles">15 to 19.9 Miles</option>
                      <option value="20 to 29.9 Miles">20 to 29.9 Miles</option>
                      <option value="30+ Miles">30+ Miles</option>
                    </select>
                  </div>
                </div>
              )}
              {isChecked2 && (
                <div className="sm:col-span-2  gap-4 sm:gap-6 space-y-8">
                  <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      My car is an electric vehicle
                    </label>
                    <div className="flex items-center mb-4">
                      <input
                        id="CarIsElectricVehicle"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        value="Yes"
                        checked={selectedOptions.includes(option1)}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="CarIsElectricVehicle"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Yes, Car is Electric Vehicle
                      </label>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="AnnualMileage"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      My annual mileage is...
                    </label>
                    <select
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="AnnualMileage"
                      value={AnnualMileage}
                      onChange={(event) => setAnnualMileage(event.target.value)}
                    >
                      <option value="">Select your option</option>
                      <option value="Under 1,000 Miles">
                        Under 1,000 Miles
                      </option>
                      <option value=" 1,000 to 2,499 Miles">
                        1,000 to 2,499 Miles
                      </option>
                      <option value="2,500 to 4,999 Miles">
                        2,500 to 4,999 Miles
                      </option>
                      <option value="5,000 to 9,999 Miles">
                        5,000 to 9,999 Miles
                      </option>
                      <option value="10,000 to 14,999 Miles(USA Average)">
                        10,000 to 14,999 Miles(USA Average)
                      </option>
                      <option value="15,000 to 19,999 Miles">
                        15,000 to 19,999 Miles
                      </option>
                      <option value="20,000 to 29,999 Miles">
                        20,000 to 29,999 Miles
                      </option>
                      <option value="30,000 + Miles">30,000 + Miles</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="AnnualMileage"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      My vehicle's combined fuel economy is...
                    </label>
                    <select
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="fueleconomy"
                      value={fueleconomy}
                      onChange={(event) => setfueleconomy(event.target.value)}
                    >
                      <option value="Select your option">
                        Select your option
                      </option>
                      <option value="0 to 14 MPG">0 to 14 MPG</option>
                      <option value="15-19 MPG">15-19 MPG</option>
                      <option value="20-24 MPG (US Average)">
                        20-24 MPG (US Average)
                      </option>
                      <option value="25-29 MPG">25-29 MPG </option>
                      <option value="30-34 MPG">30-34 MPG </option>
                      <option value="35-39 MPG">35-39 MPG </option>
                      <option value="40-49 MPG">40-49 MPG </option>
                      <option value="50-59 MPG">50-59 MPG </option>
                      <option value="60-79 MPG">60-79 MPG </option>
                      <option value="80-99 MPG">80-99 MPG </option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 className="text-4xl font-extrabold dark:text-white my-8">
              Travel Section
            </h2>
            <div className="sm:col-span-2  gap-4 sm:gap-6 space-y-8">
              <div className="w-full">
                <label
                  htmlFor="LongFlights"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Number of long round-trip flights (2500+ miles) I make in a
                  year
                </label>
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="LongFlights"
                  value={LongFlights}
                  onChange={(event) => setLongFlights(event.target.value)}
                >
                  <option value="">Select your option</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5-9">5 to 9</option>
                  <option value="9-14">9-14</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="mediumFlights"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Number of medium round-trip flights (300-2500 miles one way) I
                  make in a year
                </label>
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="mediumFlights"
                  value={mediumFlights}
                  onChange={(event) => setmediumFlights(event.target.value)}
                >
                  <option value="">Select your option</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5-9">5 to 9</option>
                  <option value="9-14">9-14</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="shortFlights"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Number of short round-trip flights less than 300 miles one way
                  I make in a year
                </label>
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="shortFlights"
                  value={shortFlights}
                  onChange={(event) => setshortFlights(event.target.value)}
                >
                  <option value="">Select your option</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5-9">5 to 9</option>
                  <option value="9-14">9-14</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="hotel"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Average number of nights spent in a hotel per year
                </label>
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="hotel"
                  value={hotel}
                  onChange={(event) => sethotel(event.target.value)}
                >
                  <option value="">Select your option</option>
                  <option value="0">0</option>
                  <option value="1 to 2 nights">1 to 2 nights</option>
                  <option value="3-4 nights">3 to 4 nights</option>
                  <option value="5-6 nights">5 to 6 nights</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="3-4 weeks">3-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                </select>
              </div>
            </div>
            <div className="my-8">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 rounded-sm flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

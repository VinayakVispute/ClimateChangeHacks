import React, { useState } from 'react';



export default function EventForm() {
  const [NumResidents, setNumResidents] = useState('');
  const [LivingType, setLivingType] = useState('');
  const [HouseSIze, setHouseSIze] = useState('');
  const [cleanEnergy, setcleanEnergy] = useState('');
  const [Recycle, setRecycle] = useState('');
  const [DietType, setDietType] = useState('');
  const [carDistance, setCarDistance] = useState('');
  const [numHotelRooms, setNumHotelRooms] = useState('');
  const [numMealsPerDay, setNumMealsPerDay] = useState('');
  const [mealType, setMealType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

  };
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'I have programmable thermostat', label: 'I have programmable thermostat' },
    { value: 'I use energy star appliances', label: 'I use energy star appliances' },
    { value: 'I use energy efficient lightbulbs', label: 'I use energy efficient lightbulbs' },
    { value: 'I line dry my laundry', label: 'I line dry my laundry' }
  ];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (   

    <div  className="w-full tap-highlight-transparent text-base antialiased text-opacity-87 box-border block padding-4">
    <form onSubmit={handleSubmit} className='text-center gap-5 font-bold'   >
      <div className='main-div'>
        <label htmlFor="NumResidents">Number of residents including myself:
</label>
        <select 
        className='tap-highlight-transparent text-base antialiased box-border align-baseline font-roboto appearance-none bg-transparent bg-no-repeat bg-center-right border border-solid border-gray-700 shadow-none py-2 px-4 rounded-none w-full'
          id="NumResidents"
          value={NumResidents}
          onChange={(event) => setNumResidents(event.target.value)}
        >
          <option value="">Select your option</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4</option>
          <option value="3">5</option>
       
        </select>
      </div>
      <div className='main-div'>
        <label htmlFor="LivingType">I live in a(n)</label>
        <select 
          className='tap-highlight-transparent text-base antialiased box-border align-baseline font-roboto appearance-none bg-transparent bg-no-repeat bg-center-right border border-solid border-gray-700 shadow-none py-2 px-4 rounded-none w-full'
          id="LivingType"
          value={LivingType}
          onChange={(event) => setLivingType(event.target.value)}
        >
          <option value="">Select your option</option>
          <option value="Detached Single family home">Detached Single family home</option>
          <option value="attacched Single family home">attached Single family home</option>
          <option value="Apartment">Apartment</option>
          {/* <option value="Detached Single family home">Detached Single family home</option> */}
          
          
       
        </select>
      </div>
      <div className='main-div'>
        <label htmlFor="HouseSIze">Size of house</label>
        <select 
                className='tap-highlight-transparent text-base antialiased box-border align-baseline font-roboto appearance-none bg-transparent bg-no-repeat bg-center-right border border-solid border-gray-700 shadow-none py-2 px-4 rounded-none w-full'

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
      <div className='main-div'>
        <label htmlFor="cleanEnergy">Do you purchase clean energy such as wind or solar?</label>
        <select 
                className='tap-highlight-transparent text-base antialiased box-border align-baseline font-roboto appearance-none bg-transparent bg-no-repeat bg-center-right border border-solid border-gray-700 shadow-none py-2 px-4 rounded-none w-full'

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
      <div className='main-div'>
        <label htmlFor="Recycle">Do you recycle items such as metal, plastic, glass, or paper?
</label>
        <select 
        className='tap-highlight-transparent text-base antialiased box-border align-baseline font-roboto appearance-none bg-transparent bg-no-repeat bg-center-right border border-solid border-gray-700 shadow-none py-2 px-4 rounded-none w-full'
          id="Recycle"
          value={Recycle}
          onChange={(event) => setRecycle(event.target.value)}
        >
          <option value="">Select your option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
  
   
    </select>
  </div>
  <div  className='main-div' >
    <label htmlFor="DietType">My diet is mostly:
</label>
    <select 
            className='tap-highlight-transparent text-base antialiased box-border align-baseline font-roboto appearance-none bg-transparent bg-no-repeat bg-center-right border border-solid border-gray-700 shadow-none py-2 px-4 rounded-none w-full'

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
  <div className='main-div'  >
    <label htmlFor="carDistance">Do you make a conscious effort to save energy? Check all that apply.</label>
    {options.map((option) => (
        <div key={option.value}>
          <label>

          <input
          
            type="checkbox"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={handleCheckboxChange}
          />
          {option.label}
          </label>
        </div>
      ))}
  </div>

  <button type="submit" class="cursor-pointer font-roboto font-helvetica-neue font-sans  text-base bg-green-600 border-0 box-border text-white font-semibold block mx-auto my-10 py-5 px-10 text-center w-full">Submit</button>
</form>
    </div> 
    ); 
    }   




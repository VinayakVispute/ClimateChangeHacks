
import React from 'react';
import { useState } from 'react';
import Cart from './Cart';

export default function Description() {
  const [numTrees, setNumTrees] = useState("");
  const [treeName, setTreeName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [submit, setsubmit] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    setsubmit(true);
  };
  return (
    <>
    {submit ?(
      < Cart
      numTrees={numTrees}
      treeName={treeName}
      occasion={occasion}
      />
      
    ):( <div  class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden mt-4">
    <div class="relative">
        <img
          src="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/03/24105714/ETMy-1649053863-600x600.jpg"
          alt="Project Harit Himachal"
          class="w-full h-48 object-cover object-center"
        />
      </div>
      <div class="py-4 px-6">
        <h2 class="text-gray-900 font-bold text-xl mb-2">
        My Environment and Earth
        </h2>
        <p class="text-gray-700 text-base">
        The world could run out of forests in 2100, food in 2050, and water in 2040.
On the 53rd anniversary of Earth Day & 51st anniversary of World Environment Day, let us sustainably invest in our planet, and also in the lives of our farmers who help us with food security and sustenance on the planet by growing trees!
        </p>
        <br></br>
     
        <p class="text-gray-600 text-sm">Contribution ₹175.00</p>
        </div>
        <form
    onSubmit={handleSubmit}
    className="fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-8"
  >
    <h2 className="text-gray-900 font-bold text-xl mb-2">
      Plantation Form
    </h2>
    <div className="mb-4">
      <label
        htmlFor="numTrees"
        className="block text-gray-700 font-bold mb-2"
      >
        Number of Trees
      </label>
      <input
        type="number"
        id="numTrees"
        name="numTrees"
        value={numTrees}
        onChange={(e) => setNumTrees(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="treeName" className="block text-gray-700 font-bold mb-2">
        Name on Your Tree
      </label>
      <input
        type="text"
        id="treeName"
        name="treeName"
        value={treeName}
        onChange={(e) => setTreeName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="occasion" className="block text-gray-700 font-bold mb-2">
        Occasion
      </label>
      <input
        type="text"
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <button
      type="submit"
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Add to cart
    </button>
    {numTrees >= 10 && (
      <p className="mt-4 text-sm text-gray-500">
        Plant 10 trees and receive a goody bag. (Only applicable for online
        plantation through website)
      </p>
    )}
  </form>
  </div> )}
   


    </>
  )
}

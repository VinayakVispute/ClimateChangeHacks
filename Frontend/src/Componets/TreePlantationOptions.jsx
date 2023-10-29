import React from "react";

export default function TreePlantationOptions() {
  return (
    <div className="bg-gray-100 text-gray-700 font-inter">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-3xl md:text-4xl mb-5">
            Plant Trees at Your Convenience
          </h2>
          <p className="text-brown-600">
            Explore a variety of tree planting options, allowing you to make a
            positive impact on the environment anytime, anywhere.
          </p>
        </div>
        <div className="flex flex-row space-x-4 mt-7">
          <div className="w-1/4 text-center bg-green-200 hover:bg-green-300 rounded-lg shadow-lg flex justify-center items-center">
            <a href="https://sankalptaru.org/location" className="icon-box">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/location-category.png"
                alt="Location Icon"
                className="w-24 h-24"
              />
              <h4 className="font-bold mt-4">Location</h4>
            </a>
          </div>
          <div className="w-1/4 text-center bg-green-200 hover:bg-green-300 rounded-lg shadow-lg flex justify-center items-center">
            <a href="https://sankalptaru.org/zodiac" className="icon-box">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home%20Page/zodiac-category.png"
                alt="Zodiac Icon"
                className="w-24 h-24"
              />
              <h4 className="font-bold mt-4">Zodiac</h4>
            </a>
          </div>
          <div className="w-1/4 text-center bg-green-200 hover:bg-green-300 rounded-lg shadow-lg flex justify-center items-center">
            <a
              href="https://sankalptaru.org/native-species"
              className="icon-box"
            >
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home%20Page/native-species-category.png"
                alt="Native Species Icon"
                className="w-24 h-24"
              />
              <h4 className="font-bold mt-4">Native Species</h4>
            </a>
          </div>
          <div className="w-1/4 text-center bg-green-200 hover:bg-green-300 rounded-lg shadow-lg flex justify-center items-center">
            <a href="https://sankalptaru.org/festival" className="icon-box">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home%20Page/festival-category.png"
                alt="Festival Icon"
                className="w-24 h-24"
              />
              <h4 className="font-bold mt-4">Festival</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

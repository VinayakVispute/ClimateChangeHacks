import React from "react";

export default function HomeHighlights() {
  return (
    <div className="bg-gray-100 text-gray-700 font-inter">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-3xl md:text-4xl mb-5 mt-3">
            Going Beyond Planting Trees
          </h2>
          <p>
            Our commitment extends beyond planting trees; we strive to create a
            profound socio-environmental impact.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col items-center md:w-1/4 lg:w-1/4 sm:w-1/2">
            <div className="icon-box mt-7 flex flex-col items-center">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/lOCATION 1.png"
                className="w-16 h-16"
                alt="Location Icon"
              />
              <h4 className="font-bold text-xl mt-4">Nationwide Greening</h4>
              <p className="text-center">
                Our tree plantation projects span across 25 States &amp; Union
                Territories in India.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:w-1/4 lg:w-1/4 sm:w-1/2">
            <div className="icon-box mt-7 flex flex-col items-center">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Blockchain 1.png"
                className="w-16 h-16"
                alt="Blockchain Icon"
              />
              <h4 className="font-bold text-xl mt-4">Embracing Blockchain</h4>
              <p className="text-center">
                Pioneering the use of blockchain technology in the non-profit
                environmental sector.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:w-1/4 lg:w-1/4 sm:w-1/2">
            <div className="icon-box mt-7 flex flex-col items-center">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/PSD 1.png"
                className="w-16 h-16"
                alt="Geotagging Icon"
              />
              <h4 className="font-bold text-xl mt-4">Transparent Geotagging</h4>
              <p className="text-center">
                Providing tree updates with geo-coordinates to donors for utmost
                transparency.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:w-1/4 lg:w-1/4 sm:w-1/2">
            <div className="icon-box mt-7 flex flex-col items-center">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/rogh 1.png"
                className="w-16 h-16"
                alt="Challenging Terrains Icon"
              />
              <h4 className="font-bold text-xl mt-4">
                Overcoming Tough Terrains
              </h4>
              <p className="text-center">
                Mitigating challenges in challenging terrains across India to
                support our farmers and the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

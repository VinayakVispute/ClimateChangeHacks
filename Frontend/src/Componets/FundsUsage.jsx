import React from "react";

export default function FundsUsage() {
  return (
    <section className="bg-white text-[#73564C] font-inter">
      <div className="container min-w-full">
        <div className="text-center">
          <h2 className="font-bold text-3xl xl:text-4xl mb-5">
            How We Utilize Your Funds?
          </h2>
        </div>
        <div className="flex center items-center mt-6 bg-green-200 mb-5">
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className=" hover:bg-green-300 p-6 rounded-2xl h-full cursor-pointer">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Beneficiary-utilize-funds.png"
                alt="Beneficiary Farmers"
                className="w-1/2 h-auto"
              />
              <p className="font-inter text-black text-base mt-4">
                Identification of beneficiary farmers
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1">
            <div className=" hover:bg-green-300 p-6 rounded-2xl h-full cursor-pointer">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Sapling-utilize-funds.png"
                alt="Saplings"
                className="w-1/2 h-auto"
              />
              <p className="font-inter text-black text-base mt-4">
                Procurement of saplings
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className=" hover:bg-green-300 p-6 rounded-2xl h-full cursor-pointer">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Post-plantation-utilize-funds.png"
                alt="Post-plantation Interventions"
                className="w-1/2 h-auto"
              />
              <p className="font-inter text-black text-base mt-4">
                Post-plantation interventions and monitoring
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className=" hover:bg-green-300 p-6 rounded-2xl h-full cursor-pointer">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/R&D-utilize-funds.png"
                alt="R&D Activities"
                className="w-1/2 h-auto"
              />
              <p className="font-inter text-black text-base mt-4">
                R&D activities
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className=" hover:bg-green-300 p-6 rounded-2xl h-full cursor-pointer">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Program-management-utilize-funds.png"
                alt="Program Management and Administrative Overheads"
                className="w-1/2 h-auto"
              />
              <p className="font-inter text-black text-base mt-4">
                Program management and administrative overheads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

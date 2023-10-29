import React from "react";

export default function ClimateCrisis() {
  return (
    <section className="bg-white text-[#73564C] font-inter">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-3xl xl:text-4xl mt-5 mb-3">
            The Reality of the Climate Crisis
          </h2>
          <p>
            Did you know that climate change may become irreversible by 2030?
          </p>
        </div>
        <div className="flex flex-row  pd-6 gap-6 mt-6">
          <div className="flex flex-col items-center">
            <div className="icon-box">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Forest-climate-icon.png"
                alt="Forest Icon"
                className="w-full max-w-full h-auto"
              />
              <iframe
                className="h-[140px]"
                title="Hectares of forests cut down or burned"
                src="https://www.theworldcounts.com/embeds/counters/93?background_color=white&color=maroon&font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&font_size=19"
                height="400"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="icon-box">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/co2-emmission-climate-icon.png"
                alt="CO2 Emission Icon"
                className="w-full"
              />
              <iframe
                className="h-[140px]"
                title="Tons of CO2 emitted into the atmosphere"
                src="https://www.theworldcounts.com/embeds/counters/23?background_color=white&color=maroon&font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&font_size=19"
                height="400"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="icon-box">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Health-crisis-icon.png"
                alt="Health Crisis Icon"
                className="w-full"
              />
              <iframe
                className="h-[140px]"
                title="Years of healthy life lost from air pollution"
                src="https://www.theworldcounts.com/embeds/counters/24?background_color=white&color=maroon&font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&font_size=19"
                height="400"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="icon-box">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Fresh-water-crisis-icon.png"
                alt="Freshwater Crisis Icon"
                className="w-full"
              />
              <iframe
                className="h-[140px]"
                title="Earth running out of freshwater"
                src="https://www.theworldcounts.com/embeds/counters/113?background_color=white&color=maroon&font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&font_size=19"
                height="400"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

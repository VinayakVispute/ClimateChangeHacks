import React from "react";


export default function MainSec4() { 
return ( 

   <section className="font-inter text-73564C">
      <div className="container  max-w-[1340px] ">
        <div className="text-center">
          <h2 className="font-playfair-bold text-lg xl:text-3xl text-25 mb-5">
            Climate Crisis is Real
          </h2>
          <p>Did you know, climate change could be irreversible by 2030?</p>
        </div>
        <div
          className="flex flex-row justify-between mt-[calc(var(--bs-gutter-y)*-1)"
        >
          <div
            className="flex flex-col items-center md:col-span-6 lg:col-span-6 sm:col-span-12 col-span-12"
          >
            <div className="icon-box mt-7 col-12">
              <i className=""
                ><img
                  src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Forest-climate-icon.png"
                  className="w-full max-w-full h-auto"
                  alt=""
                />
              </i>
              <iframe
                title="Hectares of forests cut down or burned"
                src="https://www.theworldcounts.com/embeds/counters/93?background_color=white&amp;color=maroon&amp;font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&amp;font_size=19"
                height="98%"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div
            className="flex flex-col items-center md:col-span-6 lg:col-span-6 sm:col-span-12 col-span-12"
          >
            <div className="icon-box mt-7 col-12">
              <i className=""
                ><img
                  src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/co2-emmission-climate-icon.png"
                  className="w-full"
                  alt=""
                />
              </i>
              <iframe
                title="Tons of CO2 emitted into the atmosphere"
                src="https://www.theworldcounts.com/embeds/counters/23?background_color=white&amp;color=maroon&amp;font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&amp;font_size=19"
                height="100%"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div
            className="flex flex-col items-center md:col-span-6 lg:col-span-6 sm:col-span-12 col-span-12"
          >
            <div className="icon-box mt-7 col-12">
              <i className=""
                ><img
                  src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Health-crisis-icon.png"
                  className="w-full"
                  alt=""
                />
              </i>
              <iframe
                title="Years of healthy life lost from air pollution"
                src="https://www.theworldcounts.com/embeds/counters/24?background_color=white&amp;color=maroon&amp;font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&amp;font_size=19"
                height="100%"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div
            className="flex flex-col items-center md:col-span-6 lg:col-span-6 sm:col-span-12 col-span-12"
          >
            <div className="icon-box mt-7 col-12">
              <i className=""
                ><img
                  src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Fresh-water-crisis-icon.png"
                  className="w-full"
                  alt=""
                />
              </i>
              <iframe
                title="Earth running out of freshwater"
                src="https://www.theworldcounts.com/embeds/counters/113?background_color=white&amp;color=maroon&amp;font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&amp;font_size=19"
                height="100%"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    
)




}
import React from 'react'

const Card = () => {
  return (
   <section class="flex flex-row gap-x-10 items-center justify-center my-8">
      <div
        class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <div class="relative">
          <img
            src="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2022/10/04054134/HM1v-1664528454-500x500.jpg"
            alt="Project Harit Himachal"
            class="w-full h-48 object-cover object-center"
          />
        </div>
        <div class="py-4 px-6">
          <h2 class="text-gray-900 font-bold text-xl mb-2">
            Project Harit Himachal
          </h2>
          <p class="text-gray-700 text-base">
            Undertaking tree plantation for the farmers in the Rural areas of
            Jharkhand. Project Hariyar Jharkhand aims to provide livelihood
            support through agroforestry to these farmers so that they can see
            the hope for a better future for themselves and their families.
          </p>
          <div class="flex justify-between items-center mt-4">
            <p class="text-gray-600 text-sm">Contribution ₹175.00</p>
            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Plant Now
            </button>
          </div>
        </div>
      </div>
      <div
        class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <div class="relative">
          <img
            src="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2022/10/04054134/HM1v-1664528454-500x500.jpg"
            alt="Project Harit Himachal"
            class="w-full h-48 object-cover object-center"
          />
        </div>
        <div class="py-4 px-6">
          <h2 class="text-gray-900 font-bold text-xl mb-2">
            Project Harit Himachal
          </h2>
          <p class="text-gray-700 text-base">
            Undertaking tree plantation for the farmers in the Rural areas of
            Jharkhand. Project Hariyar Jharkhand aims to provide livelihood
            support through agroforestry to these farmers so that they can see
            the hope for a better future for themselves and their families.
          </p>
          <div class="flex justify-between items-center mt-4">
            <p class="text-gray-600 text-sm">Contribution ₹175.00</p>
            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Plant Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
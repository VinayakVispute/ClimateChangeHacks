import React from "react";

export default function Mail() { 

return( 
<div>
<section class="bg-gray-100 py-8 px-4">
      <h2 class="text-2xl font-bold mb-4 text-center">
        Get more tips – and a link to your full report – straight to your inbox
      </h2>
      <form class="flex flex-col md:flex-row md:space-x-4 max-w-md mx-auto">
        <label for="first-name" class="sr-only">First Name:</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          class="bg-white border border-gray-400 rounded-md py-2 px-4 mb-2 md:mb-0 flex-grow"
          placeholder="First Name"
        />
        <label for="email" class="sr-only">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          class="bg-white border border-gray-400 rounded-md py-2 px-4 mb-2 md:mb-0 flex-grow"
          placeholder="Email"
        />
        <button
          type="submit"
          class="bg-green-500 text-white font-semibold py-2 px-4 rounded-md"
        >
          Email Me
        </button>
      </form>
    </section>



</div>

)

}
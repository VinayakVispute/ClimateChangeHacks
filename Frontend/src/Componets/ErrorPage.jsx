import React from "react";
import { Link } from "react-router-dom";

const darkModeColor = "dark:from-gray-900 dark:via-gray-800 dark:to-gray-700";
const ErrorPage = () => {
  return (
    <div className="">
      <div
        className={`bg-gradient-to-r from-purple-300 to-blue-200 ${darkModeColor}`}
      >
        {/* Define the gradient for dark mode */}
        <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 shadow overflow-hidden sm:rounded-lg pb-8">
            {/* Define the background for dark mode */}
            <div className="border-t border-gray-200 text-center pt-8">
              <h1 className="text-9xl font-bold text-purple-400 dark:text-white">
                404
              </h1>
              <h1 className="text-6xl font-medium py-8 dark:text-white">
                Oops! Page not found
              </h1>
              <p className="text-2xl pb-8 px-12 font-medium dark:text-gray-400">
                {/* Define text color for dark mode */}
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <Link
                to="/"
                className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white dark:text-gray-800 font-semibold px-6 py-3 rounded-md mr-6"
              >
                HOME
              </Link>
              <Link
                to="/"
                className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white dark:text-gray-800 font-semibold px-6 py-3 rounded-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

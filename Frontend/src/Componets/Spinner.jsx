import React from "react";
import "./spinner.css";
const Spinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-gray-900">
      <span className="loader dark:loader-dark"></span>;
    </div>
  );
};

export default Spinner;

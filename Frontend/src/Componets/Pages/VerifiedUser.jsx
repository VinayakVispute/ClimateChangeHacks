import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const darkModeColor = "dark:from-gray-900 dark:via-gray-800 dark:to-gray-700";
const VerifiedUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const handleSendEmail = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/sendVerficationMail",
        {
          email: id,
        }
      );

      console.log(response);

      if (response.data.success) {
        // Email sent successfully
        alert("Email sent successfully!");
        return navigate("/");
        return;
      } else {
        // Email sending failed
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error sending email:", error);
      alert(
        "An error occurred while sending the email. Please try again later."
      );
    }
  };
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
                401
              </h1>
              <h1 className="text-6xl font-medium py-8 dark:text-white">
                Oops! Email Not Verified
              </h1>
              <p className="text-2xl pb-8 px-12 font-medium dark:text-gray-400">
                {/* Define text color for dark mode */}
                Please Click Verify Button to Send Verification Link
              </p>
              <button
                onClick={handleSendEmail}
                className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white dark:text-gray-800 font-semibold px-6 py-3 rounded-md mr-6"
              >
                Send Verification
              </button>
              <button
                // onClick={signOutUser}
                className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white dark:text-gray-800 font-semibold px-6 py-3 rounded-md"
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedUser;

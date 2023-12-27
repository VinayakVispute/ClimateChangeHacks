import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../Spinner";

const UserVerificationDone = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [userVerified, setUserVerified] = useState(false);
  const [error, setError] = useState(null); // State to handle errors
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const userId = encodeURIComponent(id);

    // Using an async function to properly handle promises
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/verifyUser/${userId}`
        );
        console.log(response);
        setUserVerified(true);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error verifying user."); // Set an error message
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, [id]); // Include 'id' in the dependency array to re-run the effect when 'id' changes

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {userVerified ? (
        <div className="bg-gray-100 h-screen flex justify-center items-center">
          <animated.div style={fadeIn} className="bg-white p-6 md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-16 h-16 mx-auto my-6 tick"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              />
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Verification Done
              </h3>
              <p className="text-gray-600 my-2">
                Thank you for verifying your Email.
              </p>
              <p> Have a great day! </p>
              <div className="py-10 text-center">
                <Link
                  to="/"
                  className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                >
                  GO BACK
                </Link>
              </div>
            </div>
          </animated.div>
        </div>
      ) : (
        // Error handling component (customize based on your design)
        <div className="bg-red-200 p-4">
          <p className="text-red-700">{error}</p>
          <Link to="/">GO BACK</Link>
        </div>
      )}
    </>
  );
};

export default UserVerificationDone;

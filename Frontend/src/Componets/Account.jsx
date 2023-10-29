import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NotLoginError from "./NotLoginError";
const user = {
  email: "vinayakvispute4@gmail.com",
  email_verified: true,
  family_name: "Vispute",
  given_name: "Vinayak",
  locale: "en",
  name: "Vinayak Vispute",
  nickname: "vinayakvispute4",
  picture:
    "https://lh3.googleusercontent.com/a/ACg8ocIhzQmWN5HOqWdGWG7iDKtBj-Y5NvO9Js51OEU3e_NukA=s96-c",
  sub: "google-oauth2|114550382088604480507",
  updated_at: "2023-10-29T11:47:02.543Z",
};

const Account = () => {
  const { isAuthenticated, error } = useAuth0();

  if (error) {
    // Handle the error here, you can display an error message or redirect to an error page.
    return <div>Error: {error.message}</div>;
  }

  if (!isAuthenticated) {
    return <NotLoginError />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 m-4">
        <div className="flex items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              src={user.picture}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              {user.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            {user.email_verified ? (
              <p className="text-green-600 dark:text-green-300">
                Email Verified
              </p>
            ) : (
              <p className="text-red-600 dark:text-red-300">
                Email Not Verified
              </p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <a href="/edit-profile" className="text-blue-500 dark:text-blue-300">
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Account;

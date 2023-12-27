import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useSearchParams, Navigate, Link } from "react-router-dom";
import axios from "axios";
export default function Navbar() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout, error } =
    useAuth0();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const saveUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/user/add-user",
          {
            email: user.email,
            name: user.name,
            nickname: user.nickname,
            picture: user.picture,
            email_verified: user.email_verified,
          }
        );

        // Handle the response here, if needed
        console.log(response.data);
      } catch (error) {
        // Handle errors here
        console.error(error);
      }
    };

    // Call the function
    saveUser();
  }, [user, isAuthenticated]);

  const errorDescription = searchParams.get("error");
  const emailError = searchParams.get("error_description");
  console.log(user);
  console.log(emailError, errorDescription);
  if (errorDescription === "access_denied") {
    return <Navigate to={`/sendVerificationMail/${emailError}`} />;
  }
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center">
          <img
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1454244885/ixicv8ysg4ksbzbjwxjg.png"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ecofootprint
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                class="hover-underline-animation block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-green-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Account"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-500 hover-underline-animation   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/EventForm"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-500 hover-underline-animation   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Calculate
              </Link>
            </li>

            <a
              href="/Account"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-500 hover-underline-animation   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Account
            </a>
            <li>
              {!isAuthenticated ? (
                <button
                  onClick={loginWithRedirect}
                  href=""
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-500 hover-underline-animation   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-500 hover-underline-animation   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Logout
                </button>
              )}
            </li>
            <li>
              {isAuthenticated && (
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                  <button
                    type="button"
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded={isUserMenuOpen}
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user?.picture}
                      alt="user photo"
                    />
                  </button>
                  <div
                    className={`absolute mt-44 right-32 z-50 ${
                      isUserMenuOpen ? "block" : "hidden"
                    }`}
                    id="user-dropdown"
                  >
                    <ul className="font-medium bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                      <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white">
                          {user?.nickname || "Guest"}
                        </span>
                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                          {user?.email || ""}
                        </span>
                      </div>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      {/* ... other menu items ... */}
                      <li>
                        <a
                          href="#"
                          onClick={() =>
                            logout({ returnTo: window.location.origin })
                          }
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

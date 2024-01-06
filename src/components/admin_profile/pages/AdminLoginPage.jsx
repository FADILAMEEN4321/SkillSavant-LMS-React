import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const AdminLoginPage = () => {
  let { loginAdmin } = useContext(AuthContext);

  return (
    <section className="bg-center bg-cover bg-no-repeat bg-[url('/self-learning.jpg')]">
      <div className="w-full flex flex-wrap justify-center items-center py-24 px-6">
        {/* Text on the left */}
        <div className="w-full sm:w-1/2 p-4 text-center">
          <h1 className="text-3xl font-bold text-gray-200 dark:text-white">
            Welcome to Skill Savant
          </h1>
          <p className="mt-4 text-lg text-gray-200 dark:text-gray-300">
            Discover a world of knowledge and unlock your potential.
          </p>
        </div>

        {/* Login card on the right */}
        <div className="w-full sm:w-1/2 max-w-sm p-4  bg-white bg-opacity-70 border-white/80 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-2xl backdrop-saturate-200">
          <form className="space-y-6" onSubmit={loginAdmin}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Admin Panel Skill Savant
            </h5>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                to="/instructor/signup"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLoginPage;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./../../../context/AuthContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <section className="bg-center bg-cover bg-no-repeat bg-gradient-to-r from-teal-200 to-green-400">
      <div className="w-full flex flex-wrap justify-center items-center py-24 px-6">
        {/* Text on the left */}
        <div className="w-full sm:w-1/2 p-4 text-left">
          <>
            <h1 className="mb-4 text-4xl capitalize font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Welcome to{" "}
              <span className="underline capitalize underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                Skill Savant.
              </span>
            </h1>
            <p className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-400">
              Discover a world of knowledge and unlock your potential.
            </p>
          </>
        </div>

        {/* Login card on the right */}
        <div className="w-full sm:w-1/2 max-w-sm p-4 shadow-2xl bg-white bg-opacity-70 border-white/80 rounded-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-2xl backdrop-saturate-200">
          <form className="space-y-6" onSubmit={loginUser}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to Skill Savant
            </h5>
            {/* ... Your login form fields and buttons ... */}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              {/* <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a> */}
            </div>
            <button
              type="submit"
              className="w-full p-2 btn hover:bg-gray-950 border hover:text-white border-gray-900 rounded-md"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                to="/signup"
                className="text-gray-900 hover:underline dark:text-gray-900"
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

export default LoginPage;

import React from 'react'
import {Link} from "react-router-dom"

const SignupPage = () => {
  return (
    <section className="bg-center bg-cover bg-no-repeat bg-[url('/self-learning.jpg')]">
  <div className="w-full flex flex-wrap justify-center items-center py-24 px-6">
  {/* Text on the left */}
  <div className="w-full sm:w-1/2 p-4 text-center">
    <h1 className="text-3xl font-bold text-gray-200 dark:text-white">
      Welcome to Skill Savant.
    </h1>
    <p className="mt-4 text-lg text-gray-200 dark:text-gray-300">
      Discover a world of knowledge and unlock your potential.
    </p>
  </div>

  {/* Login card on the right */}
  <div className="w-full sm:w-1/2 max-w-sm p-4  bg-white bg-opacity-70 border-white/80 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-2xl backdrop-saturate-200">
    <form className="space-y-6" action="#">
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">
        Join Skill Savant.
      </h5>
      {/* ... Your login form fields and buttons ... */}

      <div>
      <label
        htmlFor="First name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        First name
      </label>
      <input
        type="text"
        name="first_name"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="first name"
        required=""
      />
    </div>
    <div>
      <label
        htmlFor="last name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Last name
      </label>
      <input
        type="text"
        name="last_name"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="last name"
        required=""
      />
    </div>

      <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="example@gmail.com"
        required=""
      />
    </div>
    <div>
      <label
        htmlFor="phone number"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Phone number
      </label>
      <input
        type="number"
        name="phone_number"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder=""
        required=""
      />
    </div>
    <div>
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required=""
      />
    </div>
    
    <button
      type="submit"
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Signup
    </button>
    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
      Already have an account?{" "}
      <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">
        Login
      </Link>
    </div>
    </form>
  </div>
</div>

  </section>
  )
}

export default SignupPage
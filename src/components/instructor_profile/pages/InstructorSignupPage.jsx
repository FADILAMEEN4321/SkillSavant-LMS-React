import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {axiosInstance} from "../../../services/axios";
import { toast } from "react-toastify";

const InstructorSignupPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("instructor-signup/", formData);

      if (response.status === 201) {
        // Signup successful, you can redirect to the login page or show a success message
        toast.success("Account created successfully. Please login now");
        navigate("/instructor/login");
      } else {
        // Handle other response statuses (e.g., display an error message)
        toast.error("something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("something went wrong.");
    }
  };

  return (
    <section className="bg-center bg-cover bg-no-repeat bg-gradient-to-r from-teal-200 to-green-400">
      <div className="w-full flex flex-wrap justify-center items-center py-24 px-6">
        {/* Text on the left */}
        <div className="w-full sm:w-1/2 p-4 text-left">
        <>
  <h1 className="mb-4 text-4xl capitalize font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
  Welcome Back {" "}<br/>
    <span className="underline capitalize underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
    Lets teach the world.
    </span>
  </h1>
  <p className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-400">
  Spread the knowledge and make this world a beautiful place.
  </p>
</>
        </div>

        {/* Login card on the right */}
        <div className="w-full sm:w-1/2 max-w-sm p-4  bg-white bg-opacity-70 border-white/80 rounded-md shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-2xl backdrop-saturate-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Join to teach on Skill Savant.
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
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="first name"
                onChange={handleInputChange}
                required
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
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="last name"
                onChange={handleInputChange}
                required
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="example@gmail.com"
                onChange={handleInputChange}
                required
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
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 btn hover:bg-gray-950 border hover:text-white border-gray-900 rounded-md"
            >
              Signup
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-gray-900 hover:underline dark:text-gray-900"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InstructorSignupPage;

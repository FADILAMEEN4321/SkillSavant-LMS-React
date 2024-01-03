import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../services/axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import * as Yup from "yup";
import { SignupSchema } from "./../../../formValidations/signupSchema";

const SignupPage = () => {
  const navigate = useNavigate();

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axiosInstance.post("student-signup/", values);

      console.log(response.data);
      navigate(`/otp/${values.email}`);
    } catch (error) {
      console.error("Error:", error);
      if (
        error.response?.data?.message ===
        "Email Already registered. Login or resend otp to verify account."
      ) {
        toast.error(
          "Email Already registered. Login or resend otp to verify account."
        );
      } else {
        console.error("Something went wrong.");
        toast.error("Something went wrong.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit,
  });

  return (
    <>
      {/* // bg-[url('/self-learning.jpg')] */}
      <section className="bg-center bg-cover bg-gradient-to-r from-teal-200 to-green-400 bg-no-repeat">
        <div className="w-full flex flex-wrap justify-center items-center py-24 px-6">
          {/* Text on the left */}
          <div className="w-full sm:w-1/2 p-4 text-left">
            <>
              <h1 className="mb-4 text-4xl capitalize font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Join Skill Savant and{" "}
                <span className="underline capitalize underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                  Enlight yourself.
                </span>
              </h1>
              <p className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-400">
                Lets begin the journey of self-improvement, hard work and
                success through the incredible course of skill savant.
              </p>
            </>
          </div>

          {/* Login card on the right */}
          <div className="w-full sm:w-1/2 max-w-sm p-4  bg-white bg-opacity-80 border-white/80 rounded-md shadow-2xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-2xl backdrop-saturate-200">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
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
                  id="first_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="first name"
                />
                {formik.touched.first_name && formik.errors.first_name && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.first_name}
                  </div>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="last name"
                />
                {formik.touched.last_name && formik.errors.last_name && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.last_name}
                  </div>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="example@gmail.com"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                )}
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
    </>
  );
};

export default SignupPage;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../services/axios";
import { toast } from "react-toastify";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { document } from "postcss";



const SignupPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Ensure the input is a number
    if (/^\d*$/.test(value)) {
      // Update the OTP array with the new value at the specified index
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });

      // Move to the next input field if the value is entered
      if (value !== '' && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };






  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("student-signup/", formData);
      console.log(response.data)
      document.getElementById('otp_modal').showModal()
     
     
    
    } catch (error) {
      console.error("Error:", error);
      toast.error("something went wrong.");
    }
  };

  const handleOtpSubmit = async(e) =>{
    e.preventDefault();
    const enteredOtp = otp.join('');
    console.log(enteredOtp)
    try{
      const response = await axiosInstance.post('verify-student-otp/',
      {'email':formData.email, 'otp':enteredOtp}
      )
      console.log(response)
      document.getElementById('otp_modal').close()
      navigate('/login')
      toast.success("Verification successfull. Please login now");


    }catch(error){
      console.log(error)
      toast.error("something went wrong.");
    }

  }





  return (


    <>

    {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('otp_modal').showModal()}>open modal</button> */}
<dialog id="otp_modal" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="flex items-center justify-center space-x-4">
    <form onSubmit={handleOtpSubmit} className="flex items-center justify-center space-x-4">
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          className="w-10 h-10 text-xl border-b-2 rounded-md border-gray-900 text-center focus:border-green-500"
        />
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  </div>
</dialog>










{/* // bg-[url('/self-learning.jpg')] */}
    <section className="bg-center bg-cover bg-gradient-to-r from-teal-200 to-green-400 bg-no-repeat">
      <div className="w-full flex flex-wrap justify-center items-center py-24 px-6">
        {/* Text on the left */}
        <div className="w-full sm:w-1/2 p-4 text-left">
 
        <>
  <h1 className="mb-4 text-4xl capitalize font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
    Join Skill Savant and {" "}
    <span className="underline capitalize underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
      Enlight yourself.
    </span>
  </h1>
  <p className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-400">
    Lets begin the journey of self-improvement, hard work and success through the incredible course of skill savant.
  </p>
</>

          
        </div>

        {/* Login card on the right */}
        <div className="w-full sm:w-1/2 max-w-sm p-4  bg-white bg-opacity-70 border-white/80 rounded-md shadow-2xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-2xl backdrop-saturate-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
    
    
    
    
    </>




    
  );
};  

export default SignupPage;

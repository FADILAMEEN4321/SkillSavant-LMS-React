import React,{useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { axiosInstance } from '../../../services/axios';


const OtpInstructor = () => {
    const {email} = useParams()
    const [enteredOtp, setEnteredOtp] = useState('');
    console.log(email)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Send email and entered OTP to the server for verification
          const response = await axiosInstance.post('verify-instructor-otp/', {
            email,
            otp: enteredOtp,
          });
    
          console.log(response);
          navigate('/instructor/login');
          toast.success('Verification successful. Please login now');
        } catch (error) {
          console.error(error);
          toast.error('Wrong OTP');
        }
      };




  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-teal-200 to-green-400">
      <form className="bg-white bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 shadow-2xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="otp">
            Please enter your OTP here
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              className="rounded-md"
              maxLength={4}
              required
              placeholder='••••'
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
            />
          </div>
        </div>
        
        <div className='flex items-center justify-between'>
        {/* bg-gradient-to-r from-blue-500 to-red-500 hover:bg-gradient-to-l */}
        <button className='px-4 py-1 m-2 bg-transparent border text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white btn btn-sm rounded-md'>
submit
        </button>
        <p className='text-sm font-mono underline hover:cursor-pointer'>
          resend OTP
        </p>
        </div>
    
      </form>
    </div>
  )
}

export default OtpInstructor
import React,{useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { axiosInstance } from '../../../services/axios';


const OtpPage = () => {
    const {email} = useParams()
    const [enteredOtp, setEnteredOtp] = useState('');
    console.log(email)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Send email and entered OTP to the server for verification
          const response = await axiosInstance.post('verify-student-otp/', {
            email,
            otp: enteredOtp,
          });
    
          console.log(response);
          navigate('/login');
          toast.success('Verification successful. Please login now');
        } catch (error) {
          console.error(error);
          toast.error('Something went wrong during verification.');
        }
      };




  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
            Enter OTP:
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              className="rounded-md"
              maxLength={4}
              required
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  )
}

export default OtpPage
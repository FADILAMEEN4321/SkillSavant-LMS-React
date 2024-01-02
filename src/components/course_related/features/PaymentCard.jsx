import React,{useContext, useState} from "react";
import useRazorpay from "react-razorpay";
import {axiosInstance} from "./../../../services/axios";
import AuthContext from "../../../context/AuthContext";
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import {razorPayKeyId} from './../../../services/constants';



const PaymentCard = ({ loading, courseDetails }) => {

    const navigate = useNavigate()
    const [Razorpay] = useRazorpay();
    const {userProfile} = useContext(AuthContext)
    const razorpayKeyID = razorPayKeyId

    const [paymentLoader, setPaymentLoader] = useState(false);

    const completeEnrollment = (paymentID,orderID,signature) =>{
        console.log(courseDetails.id,userProfile.id,paymentID,orderID,signature,courseDetails.price)

        axiosInstance({
            method: 'post',
            url: 'enrollment-completion/',
            data: {
                "course":courseDetails.id,
                "student":userProfile.id,
                "payment_id":paymentID,
                "order_id":orderID,
                "signature":signature,
                "total_amount":courseDetails.price
            }
        })
        .then((response)=>{
            navigate(`/enrolled-course/${courseDetails.id}`,{ replace: true })
            toast.success('You are successfully enrolled.')         
        })
        .catch((error)=>{
            console.log(error)
        })

    }


    const razorpayPayment = () => {
        const amount = courseDetails.price
        const currency = "INR"

        setPaymentLoader(true)
        axiosInstance
        .post('razorpay_order/create/',{
            amount,
            currency
        })
        .then((response)=>{
            console.log(response.data.data)

            const order_id = response.data.data.id

            const options = {
                key: razorpayKeyID, 
                name: "Skill Savant",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: order_id, 
                handler: function (response) {
                  completeEnrollment(
                    response.razorpay_payment_id,
                    response.razorpay_order_id,
                    response.razorpay_signature
                  )
                },
                prefill: {
                  name: "Piyush Garg",
                  email: "youremail@example.com",
                  contact: "9999999999",
                },
                notes: {
                  address: "Razorpay Corporate Office",
                },
                theme: {
                  color: "#008080",
                },
              };
            
              const rzp1 = new Razorpay(options);
            
              rzp1.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
              });
            
              rzp1.open();
        })
        .catch((error)=>{
            console.error(error)
        })
        .finally(()=>{
          setPaymentLoader(false)
        })
    }
  

  return (
    <>
      {loading ? (
         <p>loading...</p>
      ) : (
        <>
        

          <div class="w-full md:w-1/3 px-2">
                <div class="bg-white rounded-lg p-8 shadow-xl">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h3>
                    <p class="text-gray-700 mb-4">Complete your purchase with our secure payment gateway.</p>
                    <div class="text-gray-800 mb-4">
                        <div class="flex justify-between mb-4">
                            <span class="text-lg">Course Fees</span>
                            <span class="text-lg">₹{courseDetails.price}</span>
                        </div>
                       
                        <div class="flex justify-between font-semibold">
                            <span class="text-lg">Total Amount</span>
                            <span class="text-lg">₹{courseDetails.price}</span>
                        </div>
                    </div>
                    <button 
                    disabled={paymentLoader === true ? true : false}
                    onClick={razorpayPayment}
                    class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center w-full transition duration-300 ease-in-out">
                     {paymentLoader &&  <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
  </svg>} <i class="fas fa-credit-card mr-3"></i> Pay with Razorpay
                    </button>
                </div>
            </div>




        </>
      )}
    </>
  );
};

export default PaymentCard;

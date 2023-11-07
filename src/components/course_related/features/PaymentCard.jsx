import React,{useContext} from "react";
import useRazorpay from "react-razorpay";
import axios from "./../../../services/axios";
import AuthContext from "../../../context/AuthContext";



const PaymentCard = ({ loading, courseDetails }) => {

    const [Razorpay] = useRazorpay();
    const {userProfile} = useContext(AuthContext)
    const razorpayKeyID = import.meta.env.VITE_APP_RAZORPAY_KEY_ID;

    const completeEnrollment = (paymentID,orderID,signature) =>{
        console.log(courseDetails.id,userProfile.id,paymentID,orderID,signature,courseDetails.price)

        axios({
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
            console.log(response.data)
            alert('enrollment successfull.')
        })
        .catch((error)=>{
            console.log(error)
        })

    }


    const razorpayPayment = () => {
        const amount = courseDetails.price
        const currency = "INR"

        axios
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
                  alert(response.razorpay_payment_id);
                  alert(response.razorpay_order_id);
                  alert(response.razorpay_signature);
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

        })
    }
  

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              Payment Details
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              You can know the amount you need to pay with tax.
            </p>
            <div className="border-b border-gray-300 dark:border-gray-600 mt-2 mb-4"></div>

            <table className="w-full mb-4">
              <tbody>
                <tr>
                  <td className="text-gray-600 dark:text-gray-400">
                    Course Fees
                  </td>
                  <td className="text-gray-900 dark:text-white text-right">
                    {courseDetails.price}
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-600 dark:text-gray-400">Tax</td>
                  <td className="text-gray-900 dark:text-white text-right">
                    00.00
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-900 dark:text-white font-semibold">
                    Total Amount
                  </td>
                  <td className="text-gray-900 dark:text-white text-right">
                    {courseDetails.price}
                  </td>
                </tr>
              </tbody>
            </table>

            <button
              onClick={razorpayPayment}
              type="button"
              class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
            >
              <svg
                aria-hidden="true"
                class="w-10 h-3 mr-2 -ml-1"
                viewBox="0 0 660 203"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996"
                  fill="#0E4595"
                />
                <path
                  d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718"
                  fill="#F2AE14"
                />
              </svg>
              Pay with Visa
            </button>

            <div></div>
          </div>
        </>
      )}
    </>
  );
};

export default PaymentCard;

import React,{useEffect, useState} from "react";
import { FaChalkboardTeacher, FaGraduationCap, FaClock } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {axiosInstance} from './../../../services/axios';
import PaymentCard from "../features/PaymentCard";



const EnrollmentPage = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`single-course-details/${courseId}/`)
      .then((response) => {
        console.log(response.data);
        setCourseDetails(response.data);
      })
      .catch((error) => {
        console.log("error while fetching course data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  
  return (
    <>
      <div className="container mx-auto mt-4 mb-4">

        <div className="bg-blue-200 p-6 rounded-md shadow-lg">


          <div className="mb-6">
            {loading ? (
              <p>loading...</p>
            ):(
              <>
              <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  {courseDetails.title}
                </span>{" "}
              </h1>
              <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              {courseDetails.subtitle}

              </p>
              </>
            )}
           
          </div>
          <div className="border-b border-gray-300 dark:border-gray-600 mb-6"></div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-6">

            <div className="flex-1 mt-4">
              
              {loading ? (
                <p>loading...</p>
              ):(
                <>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                  Course Details
                </h5>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  You can know the amount you need to pay with tax.
                </p>
                <div className="border-b border-gray-300 dark:border-gray-600 mt-2 mb-4"></div>

                <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3 items-center">
                    <FaChalkboardTeacher />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Instructor: {courseDetails.instructor_first_name} {courseDetails.instructor_last_name}
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <FaGraduationCap />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Level: {courseDetails.level}
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <FaClock />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Duration: fake
                    </span>
                  </li>
                </ul>

                <div></div>
              </div>
                </>
              )}


            </div>

            <div className="flex-1 mt-4">

              <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                  Benefits
                </h5>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  You can know the amount you need to pay with tax.
                </p>
                <div className="border-b border-gray-300 dark:border-gray-600 mt-2 mb-4"></div>

                <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3 items-center">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Lifetime access to the course
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Downloadable course materials
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Access to community forum
                    </span>
                  </li>
                </ul>

                <div></div>
              </div>

              
            </div>
            <div className="flex-1 mt-4">

              <PaymentCard loading={loading} courseDetails={courseDetails} />
              

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollmentPage;

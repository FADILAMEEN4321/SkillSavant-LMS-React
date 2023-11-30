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
      {/* <div className="container mx-auto mt-4 mb-4">

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

              <PaymentCard loading={loading} courseDetails={courseDetails} />
              

            </div>
          </div>
        </div>
      </div> */}



<div class="container mx-auto px-4 py-8">
        <h1 class="text-5xl font-bold text-center text-gray-800 mb-6">{courseDetails.title}</h1>
        <h2 class="text-2xl text-center text-gray-700 mb-12">{courseDetails.subtitle}</h2>
        <div class="flex flex-wrap -mx-2 justify-center">


          {loading ? (''):(
            <div class="w-full md:w-1/3 px-2 mb-6 md:mb-0">
            <div class="bg-white rounded-lg p-8 shadow-xl">
                <h3 class="text-2xl font-semibold text-gray-800 mb-6">Course Details</h3>
                <p class="text-gray-700 mb-8">Get all the details you need to join the course and start your journey.</p>
                <div class="flex items-center text-gray-800 mb-4">
                    <i class="fas fa-chalkboard-teacher mr-3 text-lg"></i>
                    <span class="text-lg">Instructor: {courseDetails.instructor_first_name} {courseDetails.instructor_last_name}</span>
                </div>
                <div class="flex items-center text-gray-800 mb-4">
                    <i class="fas fa-layer-group mr-3 text-lg"></i>
                    <span class="text-lg">Level: {courseDetails.level}</span>
                </div>
                <div class="flex items-center text-gray-800">
                    <i class="fas fa-hourglass-half mr-3 text-lg"></i>
                    <span class="text-lg">Duration: {courseDetails.duration}</span>
                </div>
            </div>
        </div>
          )}
            




            <div class="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                <div class="bg-white rounded-lg p-8 shadow-xl">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-6">Benefits</h3>
                    <p class="text-gray-700 mb-8">Discover the advantages of enrolling in our kickboxing course.</p>
                    <ul class="text-gray-800">
                        <li class="flex items-center mb-4">
                            <i class="fas fa-infinity mr-3 text-lg text-blue-600"></i>
                            <span class="text-lg">Lifetime access to the course</span>
                        </li>
                        <li class="flex items-center mb-4">
                            <i class="fas fa-download mr-3 text-lg text-blue-600"></i>
                            <span class="text-lg">Downloadable course materials</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-users mr-3 text-lg text-blue-600"></i>
                            <span class="text-lg">Access to community forum</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <PaymentCard loading={loading} courseDetails={courseDetails} />
            
        </div>
    </div>




    </>
  );
};

export default EnrollmentPage;

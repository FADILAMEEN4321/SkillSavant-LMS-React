import React, { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaGraduationCap, FaClock } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { axiosInstance } from "./../../../services/axios";
import PaymentCard from "../features/PaymentCard";

const EnrollmentPage = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`single-course-details/${courseId}/`)
      .then((response) => {
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
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-5xl font-bold text-center text-gray-800 mb-6">
          {courseDetails.title}
        </h1>
        <h2 class="text-2xl text-center text-gray-700 mb-12">
          {courseDetails.subtitle}
        </h2>
        <div class="flex flex-wrap -mx-2 justify-center">
          {loading ? (
            ""
          ) : (
            <div class="w-full md:w-1/3 px-2 mb-6 md:mb-0">
              <div class="bg-white rounded-lg p-8 shadow-xl">
                <h3 class="text-2xl font-semibold text-gray-800 mb-6">
                  Course Details
                </h3>
                <p class="text-gray-700 mb-8">
                  Get all the details you need to join the course and start your
                  journey.
                </p>
                <div class="flex items-center text-gray-800 mb-4">
                  <i class="fas fa-chalkboard-teacher mr-3 text-lg"></i>
                  <span class="text-lg">
                    Instructor: {courseDetails.instructor_first_name}{" "}
                    {courseDetails.instructor_last_name}
                  </span>
                </div>
                <div class="flex items-center text-gray-800 mb-4">
                  <i class="fas fa-layer-group mr-3 text-lg"></i>
                  <span class="text-lg">Level: {courseDetails.level}</span>
                </div>
                <div class="flex items-center text-gray-800">
                  <i class="fas fa-hourglass-half mr-3 text-lg"></i>
                  <span class="text-lg">
                    Duration: {courseDetails.duration}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div class="w-full md:w-1/3 px-2 mb-6 md:mb-0">
            <div class="bg-white rounded-lg p-8 shadow-xl">
              <h3 class="text-2xl font-semibold text-gray-800 mb-6">
                Benefits
              </h3>
              <p class="text-gray-700 mb-8">
                Discover the advantages of enrolling in our kickboxing course.
              </p>
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

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "./../../../services/axios";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { BiLock } from "react-icons/bi";

const CoursedetailPage = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
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
      <section className="bg-gray-1000 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* <iframe
        className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
        src="https://www.youtube.com/embed/KaLxCiilHns"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      /> */}
          {loading ? (
            <p>loading...</p>
          ) : (
            // <ReactPlayer
            //   loop={true}
            //   playing={true}
            //   controls={true}
            //   height="320px"
            //   width="500px"
            //   style={{
            //     margin: "0 auto",
            //     width: "100%",
            //     maxWidth: "44rem", // Equivalent to lg:max-w-xl in Tailwind
            //     height: "16rem", // Equivalent to h-64 in Tailwind
            //     borderRadius: "1rem", // Equivalent to rounded-lg in Tailwind
            //     boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.12)", // Equivalent to shadow-xl in Tailwind
            //   }}
            // />

            <iframe
              className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src={
                courseDetails.modules[0]
                  ? courseDetails.modules[0].video_url
                  : ""
              }
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="true"
            />
          )}

          <div className="flex flex-col justify-center">
            {loading ? (
              <p>loading...</p>
            ) : (
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                {courseDetails.title}
              </h1>
            )}
            {loading ? (
              <p>loading...</p>
            ) : (
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                {courseDetails.subtitle}
              </p>
            )}

            <div className="container mb-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-center justify-between">
                <p className="text-green-500 font-semibold text-lg">
                  Instructor: {courseDetails.instructor_first_name}{" "}
                  {courseDetails.instructor_last_name}
                </p>
                <p className="text-green-500 font-semibold text-lg">
                  level: {courseDetails.level}
                </p>
                <p className="text-green-500 font-semibold text-lg">
                  price: {courseDetails.price}
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Enroll now
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* Module Listing */}
      <div className="container mx-auto mt-4">
        {/* Module listing content here */}
        <div className="container p-3 flex items-center justify-between">
          <h3 className="text-xl text-gray-900 font-bold">
            Lessons in this course
          </h3>
          <h3 className="text-xl text-gray-900 font-semibold">
            {/* 6 Lessons (2h:00m) */}
          </h3>
        </div>
        <hr />
        <div className="container mx-auto mt-4 mb-4">
          {loading ? (
            <p>loading...</p>
          ) : (
            courseDetails.modules.map((module) => (
              <div
                key={module.id}
                className="container p-3 flex items-center justify-between hover:border hover:border-gray-900 rounded-md"
              >
                {/* <h3 className="text-lg font-bold text-gray-900">
                  <span><BiLock size={25} color="black" /></span>
                  <span>{module.module_order}. {module.module_title}</span>
                </h3> */}
                <div className="flex items-center">
                  <BiLock size={23} color="black" />
                  <h3 className="text-lg font-bold text-gray-900 ml-2">
                    {module.module_order}. {module.module_title}
                  </h3>
                </div>

                <h3 className="text-lg text-gray-900 font-semibold">
                  {module.duration}m
                </h3>
              </div>
            ))
          )}
        </div>
        <hr />
      </div>

      <>
        {/* About the Course */}
        <div className="container mx-auto mt-4">
          <div className="container mb-4 p-3">
            <h2 className="text-2xl font-bold mb-4">About the Course</h2>
            {loading ? (
              <p>loading...</p>
            ) : (
              <p className="text-gray-700">{courseDetails.description}</p>
            )}
            <p className="text-gray-700 mt-2">
              Nullam varius, ipsum sit amet tristique vehicula, massa libero
              feugiat justo, at bibendum ipsum sem sed justo. Nulla facilisi.
              Proin tristique vehicula orci, eu bibendum sapien posuere non.
            </p>
          </div>
          <hr />
        </div>
        {/* About the Instructor */}
        <div className="container mx-auto mt-4">
          <div className="container mb-4 p-3">
            <h2 className="text-2xl font-bold mb-4">Meet your Instructor</h2>
            <div className="flex items-center">
              {loading ? (
                <p>loading...</p>
              ) : (
                <img
                  src={courseDetails.instructor_photo}
                  alt="Instructor"
                  className="w-16 h-16 rounded-full mr-4"
                />
              )}
              <div>
                {loading ? (
                  <p>loading...</p>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold">
                      {courseDetails.instructor_first_name}{" "}
                      {courseDetails.instructor_last_name}
                    </h3>
                    <p className="text-gray-700">
                      {courseDetails.instructor_skill}
                    </p>
                  </>
                )}
              </div>
            </div>
            {loading ? (
              <p>loading...</p>
            ) : (
              <p className="text-gray-700 mt-2">
                {courseDetails.instructor_bio}
              </p>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default CoursedetailPage;

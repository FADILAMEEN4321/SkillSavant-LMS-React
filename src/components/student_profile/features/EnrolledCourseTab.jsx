import React, { useEffect, useState } from "react";
import { axiosInstance, axiosAuthorized } from "./../../../services/axios";
import { Link } from "react-router-dom";

const EnrolledCourseTab = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("enrolled-courses/")
      .then((response) => {
        console.log(response.data);
        setEnrolledCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container min-h-screen">
        <div className="pl-2 pr-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <>
            {loading ? (
              <>
                <div className="w-[300px] mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4 animate-pulse">
                  <div className="h-48 bg-gray-400"></div>
                  <div className="p-4">
                    <div className="h-4 w-full bg-gray-400 rounded-md mb-2"></div>

                    <div className="h-4 w-3/4 rounded-md bg-gray-400 mb-2"></div>

                    <div className="flex justify-start items-center">
                      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400 mt-7 mb-2"></div>
                      <div className="h-2 w-[59px] rounded-md bg-gray-400 mt-7 mb-2"></div>
                    </div>

                    <div className="flex justify-start items-center">
                      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400  mb-2"></div>
                      <div className="h-2 w-[59px] rounded-md bg-gray-400  mb-2"></div>
                    </div>
                  </div>
                </div>

                <div className="w-[300px] mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4 animate-pulse">
                  <div className="h-48 bg-gray-400"></div>
                  <div className="p-4">
                    <div className="h-4 w-full bg-gray-400 rounded-md mb-2"></div>

                    <div className="h-4 w-3/4 rounded-md bg-gray-400 mb-2"></div>

                    <div className="flex justify-start items-center">
                      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400 mt-7 mb-2"></div>
                      <div className="h-2 w-[59px] rounded-md bg-gray-400 mt-7 mb-2"></div>
                    </div>

                    <div className="flex justify-start items-center">
                      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400  mb-2"></div>
                      <div className="h-2 w-[59px] rounded-md bg-gray-400  mb-2"></div>
                    </div>
                  </div>
                </div>

                <div className="w-[300px] mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4 animate-pulse">
                  <div className="h-48 bg-gray-400"></div>
                  <div className="p-4">
                    <div className="h-4 w-full bg-gray-400 rounded-md mb-2"></div>

                    <div className="h-4 w-3/4 rounded-md bg-gray-400 mb-2"></div>

                    <div className="flex justify-start items-center">
                      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400 mt-7 mb-2"></div>
                      <div className="h-2 w-[59px] rounded-md bg-gray-400 mt-7 mb-2"></div>
                    </div>

                    <div className="flex justify-start items-center">
                      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400  mb-2"></div>
                      <div className="h-2 w-[59px] rounded-md bg-gray-400  mb-2"></div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              enrolledCourses.map((enrolled) => (
                <>
                  {/* Course Card */}

                  <Link to={`/enrolled-course/${enrolled.course.id}`}>
                    <div
                      key={enrolled.id}
                      className="w-[300px] hover:drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4"
                    >
                      {/* h-[338px] */}
                      {/* Course Image */}
                      <img
                        className="object-cover w-full h-48"
                        src={enrolled.course.cover_image}
                        alt="Course Image"
                      />

                      {/* Course Details */}
                      <div className="p-4">
                        {/* Course Title */}
                        {/* <h2 className="text-xl font-bold mb-2">{course.title}</h2> */}

                        <h2
                          className="line-clamp-2 uppercase hover:line-clamp-none text-md font-extrabold mb-2 overflow-hidden"
                          // title={course.title} // Adding a tooltip using the title attribute
                        >
                          {enrolled.course.title}
                        </h2>
                        {/* Hours */}
                        <div className="flex items-center  mb-1">
                          <span className="text-[17px]">🕤</span>
                          <span className="text-[14px] text-gray-500">
                            {" "}
                            {enrolled.course.total_duration}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          {/* Instructor Name */}
                          <p className="text-[14px] text-gray-500">
                            <span className="text-[17px]">👨‍⚖️</span>
                            {enrolled.course.instructor_first_name}{" "}
                            {enrolled.course.instructor_last_name}
                          </p>
                        </div>

                        <div>
                          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div
                              className="bg-gradient-to-br from-green-500 to-indigo-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                              style={{
                                width: `${enrolled.completion_percentage}%`,
                              }}
                            >
                              {" "}
                              {enrolled.completion_percentage}%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              ))
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default EnrolledCourseTab;

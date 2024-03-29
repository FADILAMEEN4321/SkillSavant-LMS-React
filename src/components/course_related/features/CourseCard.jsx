import React, { useEffect, useState } from "react";
import { axiosInstance } from "./../../../services/axios";
import { Link } from "react-router-dom";
import classNames from "classnames";

const CourseCard = ({ courses, loading }) => {
  return (
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
        courses.map((course) => (
          <>
            <Link to={`/courses/${course.id}`}>
              <div
                key={course.id}
                className="w-[300px] hover:drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4"
              >
                <div className="relative group">
                  <img
                    className="object-cover w-full h-48"
                    src={course.cover_image}
                    alt="Course Image"
                    loading="lazy"
                  />
                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-11 w-11 rounded-full bg-slate-900 bg-opacity-75 flex items-center justify-center">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-4">
                <span
                      className={classNames({
                        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 text-xs rounded font-medium px-2.5 py-0.5":
                          course.level === "Beginner",
                        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 text-xs rounded font-medium px-2.5 py-0.5":
                          course.level === "Intermediate",
                        "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300 text-xs rounded font-medium px-2.5 py-0.5":
                          course.level === "Advanced",
                      })}
                    >
                      {course.level}
                    </span>
                  {/* Course Title */}

                  <h2 className="line-clamp-2 uppercase hover:line-clamp-none text-md font-extrabold mb-1 overflow-hidden">
                    {course.title}
                  </h2>
                  <hr classNames="" />
                  {/* Hours */}
                  <div className="flex items-center mt-2 mb-1">
                    <span className="text-[15px] mr-1">🕤</span>
                    <span className="text-[13px] text-gray-500">
                      {"  "}
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    {/* Instructor Name */}
                    <p className="text-[13px] text-gray-500">
                      <span className="text-[15px] mr-1">👨‍⚖️</span>
                      {course.instructor_first_name}{" "}
                      {course.instructor_last_name}
                    </p>
                    {course.is_favourite ? (
                      <svg
                        className="fill-red-500"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className=""
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))
      )}
    </>
  );
};

export default CourseCard;

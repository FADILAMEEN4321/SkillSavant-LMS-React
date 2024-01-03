import React, { useEffect, useState } from "react";
import AdminMobileSideBar from "../features/AdminMobileSideBar";
import AdminSideBar from "../features/AdminSideBar";
import { Link } from "react-router-dom";
import { axiosInstance } from "./../../../services/axios";

const ApprovedCoursePage = () => {
  const [approvedCourses, setApprovedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("admin/approved-courses/")
      .then((response) => {
        console.log(response.data);
        setApprovedCourses(response.data);
      })
      .catch((error) => {
        console.log("error while fetching approved courses:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Main Content Container */}
      <div className="mx-auto flex">
        {/* Sidebar for Dash Board */}

        <AdminSideBar />

        {/* Scrollable Area for Course Listings */}
        <div className="h-screen w-full bg-gray-200 p-4 overflow-y-auto">
          {/* for mobile */}
          <AdminMobileSideBar />

          <div className="relative container bg-gray-900 min-h-[150px] rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-60 bg-gray-900 rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              <h1 class="mb-3 text-3xl font-extrabold leading-none tracking-tight capitalize text-white md:text-3xl lg:text-4xl dark:text-white">
                Approved{" "}
                <span class="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-blue-600">
                  courses.
                </span>
              </h1>

              <p class="text-sm font-normal capitalize text-gray-200 lg:text-lg">
                Manage all Approved courses of skill savant.
              </p>
            </div>
            {/* <div className="bg-cover bg-[url('/self-learning.jpg')] min-h-[200px] rounded-md" /> */}
          </div>

          <div className="container"></div>

          <div className="container">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Course Cards */}

              {loading ? (
                <p>loading...</p>
              ) : (
                approvedCourses.map((course) => (
                  <Link to={`/admin/approved-courses/${course.id}`}>
                    <div
                      key={course.id}
                      className="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100"
                    >
                      <img
                        src={course.cover_image}
                        alt="Image Alt Text"
                        className="w-full rounded-t-md object-top"
                      />
                      <div className="p-4">
                        {/* <p>20m</p> */}
                        <h3 className="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                          {course.title}
                        </h3>
                        {/* <p className="text-gray-600 mb-4">Description of Course 1.</p> */}
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {course.subtitle}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          instructor: {course.instructor_first_name}{" "}
                          {course.instructor_last_name}
                        </p>

                        {course.is_approved ? (
                          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                            Approved
                          </span>
                        ) : (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
                            Pending
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))
              )}

              {/* Repeat the above course card div for each course */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovedCoursePage;

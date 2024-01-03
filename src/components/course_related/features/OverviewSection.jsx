import React from "react";

const OverviewSection = ({ courseData, currentModule, loading }) => {
  return (
    <>
      <div className="p-2">
        {loading ? (
          <div className="animate-pulse mb-10">
            <div className="h-4 bg-gray-200 rounded-md w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded-md w-2/4"></div>
          </div>
        ) : (
          <div className="mb-4">
            <h4 className="text-3xl mb-1 capitalize font-bold">
              {courseData.title}
            </h4>
            <p className="mb-4 text-xl capitalize font-normal text-gray-500 dark:text-gray-400">
              {courseData.subtitle}
            </p>
          </div>
        )}

        {loading ? (
          <div className="animate-pulse mb-10">
            <div className="h-4 rounded-md bg-gray-200 w-2/4 mb-2"></div>
            <div className="h-4 rounded-md bg-gray-200 w-3/4 mb-4"></div>
          </div>
        ) : (
          <div class="inline-block bg-gradient-to-br from-blue-400 to-teal-700 rounded px-4 py-2 mb-2">
            <h2 class="text-lg font-medium capitalize text-white">
              <i class="fas fa-play-circle text-gary-900 mr-3"></i>
              {currentModule ? currentModule.module_order : ""}.{" "}
              {currentModule ? currentModule.module_title : ""}
            </h2>
          </div>
        )}
      </div>

      {loading ? (
        <div className="animate-pulse mb-8">
          <div className="h-4 bg-gray-200 rounded-md w-2/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-md w-3/4 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded-md w-4/5"></div>
        </div>
      ) : (
        <div className="container mb-4 p-3">
          <h2 className="text-xl capitalize font-bold mb-4">
            About the Course
          </h2>
          <p className="text-gray-700">{courseData.description}</p>
        </div>
      )}

      <hr />

      {loading ? (
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded-md w-2/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-md w-3/4 mb-4"></div>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <div className="h-4 bg-gray-200 rounded-md w-16 mb-1"></div>
              <div className="h-4 bg-gray-200 rounded-md w-10"></div>
            </div>
          </div>
          <div className="h-4 bg-gray-200 rounded-md w-4/5 mt-2"></div>
        </div>
      ) : (
        <div className="container mb-4 p-3">
          <h2 className="text-xl capitalize font-bold mb-4">
            Meet your Instructor
          </h2>
          <div className="flex items-center">
            <img
              src={courseData.instructor_photo}
              alt="Instructor"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl capitalize font-semibold">
                {courseData.instructor_first_name}{" "}
                {courseData.instructor_last_name}
              </h3>
              <p className="text-gray-700 capitalize">
                {courseData.instructor_skill}
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-2">{courseData.instructor_bio}</p>
        </div>
      )}
    </>
  );
};

export default OverviewSection;

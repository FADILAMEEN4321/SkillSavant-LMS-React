import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <>
      <div className="h-screen w-1/4 bg-white hidden md:flex border border-r-gray-300">
        <div className="grid gap-2 w-full h-6 p-2">
          <div className="min-h-[80px] w-full"></div>
          <hr />
          {/* Category Tabs */}
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/admin/dashboard"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >🟧
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/student-management"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >👩‍🎓 
                <span className="flex-1 ml-3 whitespace-nowrap">Students</span>
                
              </Link>
            </li>
            <li>
              <Link
                to="/admin/instructor-management"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >👨‍🏫
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Instructors
                </span>
                
              </Link>
            </li>
            <li>
              <Link to="/admin/approved-courses"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >👍
                <span className="flex-1 ml-3 whitespace-nowrap">Approved Courses</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/pending-courses"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >⏳
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Pending Courses
                </span>
              </Link>
            </li>
            <li>
              <Link to="/admin/category-management"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
              📊
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Category Management
                </span>
              </Link>
            </li>
            <li>
              <Link to="/admin/sales"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >💰
                <span className="flex-1 ml-3 whitespace-nowrap">Sales</span>
              </Link>
            </li>
          </ul>
          <hr />
          <div
            id="dropdown-cta"
            className="p-4 mt-6 rounded-md bg-blue-50 dark:bg-blue-900"
            role="alert"
          >
            <div className="flex items-center mb-3">
              <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                Beta
              </span>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-md focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200  dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                data-dismiss-target="#dropdown-cta"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-2.5 h-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
              Preview the new Flowbite dashboard navigation! You can turn the
              new navigation off for a limited time in your profile.
            </p>
            <a
              className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
              href="#"
            >
              Turn new navigation off
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;

import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <>
      <div className="h-screen w-1/4 bg-white hidden md:flex border border-r-gray-300">
        <div className="grid gap-2 w-full h-6 p-2">
          <ul className="space-y-2 mt-4 font-medium">
            <li>
              <Link
                to="/admin/dashboard"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                🗃️
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/student-management"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                👩‍🎓
                <span className="flex-1 ml-3 whitespace-nowrap">Students</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/instructor-management"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                👨‍🏫
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Instructors
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/approved-courses"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                👍
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Approved Courses
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/pending-courses"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                ⏳
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Pending Courses
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/category-management"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                📊
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Category Management
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/sales"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                💰
                <span className="flex-1 ml-3 whitespace-nowrap">Sales</span>
              </Link>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;

import React from "react";
import { Link } from "react-router-dom";

const AdminMobileSideBar = () => {
  return (
    <div className="drawer md:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-sm mb-4 drawer-button">
          <svg
            class="w-4 h-4 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 14"
          >
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
          </svg>{" "}
          menu
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* <ul className=""> */}

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
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
              <span className="flex-1 ml-3 whitespace-nowrap">Instructors</span>
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
  );
};

export default AdminMobileSideBar;

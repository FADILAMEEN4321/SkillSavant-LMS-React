import React,{useEffect,useState} from "react";

const CourseSideBar = () => {

  return (
    <div className="drawer md:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn mb-4 drawer-button">
          <svg
            class="w-4 h-4 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 14"
          >
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
          </svg>
          Explore
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="min-h-[80px] bg-blue-400 rounded-md mb-4 w-full"></div>
          <hr />
          {/* Sidebar content here */}
          <li className="mb-2">
            <a
              href="#"
              className="px-4 py-2 bg-gray-900 font-bold text-white rounded-md"
            >
              All courses
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-300"
            >
              Web development
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-300"
            >
              History
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-300"
            >
              Hobbies
            </a>
          </li>

          <hr className="mt-4" />
        </ul>
      </div>
    </div>
  );
};

export default CourseSideBar;

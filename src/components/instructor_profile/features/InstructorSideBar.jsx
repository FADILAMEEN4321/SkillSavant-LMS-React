import React from "react";
import { Link } from "react-router-dom";

const InstructorSideBar = () => {
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
                to="/instructor/profile"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
              >
                
                🗃️<span className="ml-2">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/instructor/mycourses"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
              >
                
                📚<span className="flex-1 ml-2 whitespace-nowrap">
                  My courses
                </span>
                
              </Link>
            </li>
            
            {/* <li>
              <Link
                to="/instructor/chat"
                className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
              >
               
               💬<span className="flex-1 ml-2 whitespace-nowrap"> Chat</span>
              </Link>
            </li> */}
          </ul>
          <hr />

        
         
        </div>
      </div>
    </>
  );
};

export default InstructorSideBar;

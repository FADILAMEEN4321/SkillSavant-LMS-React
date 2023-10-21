import React, { useState, useEffect } from "react";
import AdminSideBar from "./AdminSideBar";
import { initFlowbite } from "flowbite";
import axios from "./../../services/axios";
import AdminMobileSideBar from "./AdminMobileSideBar";

const AdminInstructorManagement = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    initFlowbite();
    axios
      .get("admin/instructors")
      .then((response) => {
        setInstructors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  console.log("----------->from inst---->", instructors);

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

          <div className="relative container bg-blue-700 min-h-[200px] rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-60 bg-black rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              {/* Your text content here */}
              <h2 className="text-3xl font-bold mt-4 text-green-500">
                Instructor Management
              </h2>
              <p className="mt-2">All Instructors of Skill savant</p>
            </div>
            <div className="bg-cover bg-[url('/self-learning.jpg')] min-h-[200px] rounded-md" />
          </div>
          <div className="container">
            <div className="relative overflow-x-auto shadow-md sm:rounded-md">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  Our products
                  <p className="mt-1 mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
                    Browse a list of Flowbite products designed to help you work
                    and play, stay organized, get answers, keep in touch, grow
                    your business, and more.
                  </p>
                  <label for="table-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative mt-1">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="table-search"
                      class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for items"
                    />
                  </div>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      First name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {instructors
                    ? instructors.map((instructor) => (
                        <tr
                          key={instructor.user.id}
                          className="bg-white dark:bg-gray-800"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {instructor.user.first_name}
                          </th>
                          <td className="px-6 py-4">
                            {instructor.user.last_name}
                          </td>
                          <td className="px-6 py-4">{instructor.user.email}</td>
                          <td className="px-6 py-4">
                            <button
                              type="button"
                              class="text-white bg-gradient-to-r from-green-400
              via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
              focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg
              dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 
              py-2.5 text-center mr-2 mb-2"
                            >
                              Unblock
                            </button>
                          </td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminInstructorManagement;

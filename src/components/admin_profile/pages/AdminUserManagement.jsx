import React, { useEffect, useState } from "react";
import AdminSideBar from "../features/AdminSideBar";
import { axiosInstance } from "../../../services/axios";
import { Link } from "react-router-dom";
import AdminMobileSideBar from "../features/AdminMobileSideBar";
import { toast } from "react-toastify";

const AdminUserManagement = () => {
  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);

  const handleSearchInput = (searchQuery) => {
    const searchedList = allStudents.filter((student) => {
      const fullName = `${student.user.first_name} ${student.user.last_name}`;
      return fullName.toLowerCase().startsWith(searchQuery.toLowerCase());
    });

    // Update the state with the filtered list

    setStudents(searchedList);
  };

  const toggleBlock = (user) => {
    const newStatus = !user.user.is_blocked;

    axiosInstance
      .post(`admin/students-block-unblock/${user.user.id}/`)
      .then((response) => {
        const updatedStudents = students.map((student) => {
          if (student.user.id === user.user.id) {
            return {
              ...student,
              user: {
                ...student.user,
                is_blocked: newStatus,
              },
            };
          }
          return student;
        });
        setStudents(updatedStudents);
        toast.success("Successfully done");
      })
      .catch((error) => {
        console.error("Error toggling block/unblock:", error);
        toast.error("Error while blocking or unblocking student.");
      });
  };

  useEffect(() => {
    axiosInstance
      .get("admin/students/")
      .then((response) => {
        setStudents(response.data);
        setAllStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
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
                Student{" "}
                <span class="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-blue-600">
                  Management.
                </span>
              </h1>

              <p class="text-sm font-normal capitalize text-gray-200 lg:text-lg">
                Manage all Students of Skill savant.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="relative overflow-x-auto shadow-md sm:rounded-md">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
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
                      class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md w-80 bg-gray-50 focus:ring-green-900 focus:border-green-600 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for students..."
                      onChange={(e) => handleSearchInput(e.target.value)}
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
                  {students
                    ? students.map((student) => (
                        <tr
                          key={student.user.id}
                          className="bg-white dark:bg-gray-800"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {student.user.first_name}
                          </th>
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {student.user.last_name}
                          </td>
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {student.email}
                          </td>
                          <td className="px-6 py-4">
                            {student.user.is_blocked ? (
                              <button
                                onClick={() => toggleBlock(student)}
                                type="button"
                                class="btn btn-sm btn-success"
                              >
                                Unblock
                              </button>
                            ) : (
                              <button
                                onClick={() => toggleBlock(student)}
                                type="button"
                                class="btn btn-sm btn-error"
                              >
                                Block
                              </button>
                            )}
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

export default AdminUserManagement;

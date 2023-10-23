import React, { useEffect, useContext } from "react";
import { initFlowbite } from "flowbite";
import InstructorSideBar from "./InstructorSideBar";
import InstructorMobileSideBar from "./InstructorMobileSideBar";
import AuthContext from "./../../context/AuthContext";


const InstructorProfilePage = () => {
  let { userProfile, user } = useContext(AuthContext);

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      {/* Main Content Container */}
      <div className="mx-auto flex">
        {/* Sidebar for Dash Board */}

        <InstructorSideBar />

        {/* Scrollable Area for Course Listings */}
        <div className="h-screen w-full bg-gray-200 p-4 overflow-y-auto">
          {/* for mobile */}
          <InstructorMobileSideBar />

          <div className="relative container bg-blue-700 min-h-[200px] rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-60 bg-black rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              {/* Your text content here */}
              <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  Lets's Teach the
                </span>{" "}
                World.
              </h1>
              <p class="text-lg font-normal text-gray-200 lg:text-xl dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation.
              </p>
              {/* <p className="mt-2">All Students of Skill savant</p> */}
            </div>
            <div className="bg-cover bg-[url('/self-learning.jpg')] min-h-[200px] rounded-md" />
          </div>

          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* <!-- Profile Details --> */}
              {/* <div className="p-4 bg-white rounded shadow-lg"> */}
              {/* <h2 className="text-2xl font-bold mb-2">Profile Details</h2> */}
              {/* <!-- Add your profile information here --> */}

              <div className="p-7 bg-white rounded shadow-lg">
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                  <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                    {userProfile ? (
                      <img
                        src={userProfile.profile_photo}
                        alt="tania andrew"
                        className="relative inline-block h-[75px] w-[75px] !rounded-full object-cover object-center"
                      />
                    ) : (
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="tania andrew"
                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                      />
                    )}
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          {user ? user.first_name + " " + user.last_name : ""}
                        </h5>
                        <div class="flex items-center gap-0 5">
                          {/* You can open the modal using document.getElementById('ID').showModal() method */}
                          <button
                            className="btn"
                            onClick={() =>
                              document.getElementById("my_modal_3").showModal()
                            }
                          >
                            Edit
                          </button>
                          <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                  ✕
                                </button>
                              </form>

                              <>
                                {/* Modal body */}
                                <form action="#">
                                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                    <div>
                                      <label
                                        htmlFor="first_name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                      >
                                        First name
                                      </label>
                                      <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="last_name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                      >
                                        Last name
                                      </label>
                                      <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      />
                                    </div>

                                    <div className="sm:col-span-2">
                                      <div>
                                        <label
                                          htmlFor="skill"
                                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                          Skill
                                        </label>
                                        <input
                                          type="text"
                                          name="skill"
                                          id="skill"
                                          className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        />
                                      </div>

                                      <label
                                        htmlFor="bio"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                      >
                                        Bio
                                      </label>
                                      <textarea
                                        id="bio"
                                        rows={4}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Write a bio..."
                                      />
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-4">
                                    <button
                                      type="submit"
                                      className="text-gray-900 bg-primary-700 border border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                      Save
                                    </button>
                                    <button
                                      type="button"
                                      className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                    >
                                      <svg
                                        className="mr-1 -ml-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                      Delete
                                    </button>
                                  </div>
                                </form>
                              </>
                            </div>
                          </dialog>
                        </div>
                      </div>
                      {userProfile ? (
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                          {userProfile.skill}
                        </p>
                      ) : (
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                          Update your skill.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="p-0 mb-6">
                    {userProfile ? (
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {userProfile.bio}
                      </p>
                    ) : (
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        Update your bio.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* </div> */}

              {/* </div> */}

              {/* <!-- Instructor Statistics --> */}
              <div className="p-4 bg-white rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-2">
                  Instructor Statistics
                </h2>
                {/* <!-- Add statistics like courses, students, earnings, etc. here --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorProfilePage;

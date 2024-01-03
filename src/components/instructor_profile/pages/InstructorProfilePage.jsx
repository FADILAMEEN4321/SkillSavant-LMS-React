import React, { useEffect, useContext } from "react";
import { initFlowbite } from "flowbite";
import InstructorSideBar from "../features/InstructorSideBar";
// import InstructorMobileSideBar from "./InstructorMobileSideBar";
import InstructorMobileSideBar from "../features/InstructorMobileSideBar";
import AuthContext from "../../../context/AuthContext";
import InstructorDashboardGrid from "../features/InstructorDashboardGrid";
import ProfileEditModal from "../features/ProfileEditModal";

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

          <div className="relative container bg-blue-700 min-h-[170px] rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-70 bg-black rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              {/* Your text content here */}

              <h1 class="mb-4 text-2xl capitalize font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-4xl dark:text-white">
                Elevate your teaching{" "}
                <span class="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-blue-600">
                  experience with Skill Savant.
                </span>
              </h1>

              <p class="text-sm font-normal text-gray-200 lg:text-lg dark:text-gray-400">
                Seamless control, powerful insights – Your gateway to an
                enriched instructing journey.
              </p>
              {/* <p className="mt-2">All Students of Skill savant</p> */}
            </div>
            <div className="bg-cover bg-[url('/self-learning.jpg')] min-h-[170px] rounded-md" />
          </div>

          {/* <div> */}
          {/* <InstructorDashboardGrid/> */}

          {/* </div> */}

          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* <!-- Profile Details --> */}
              {/* <div className="p-4 bg-white rounded shadow-lg"> */}
              {/* <h2 className="text-2xl font-bold mb-2">Profile Details</h2> */}
              {/* <!-- Add your profile information here --> */}

              <div className="p-4 bg-white rounded shadow-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold">My profile</h4>

                  <ProfileEditModal userProfile={userProfile} />
                </div>
                <hr className="mt-2"></hr>

                <div className="mt-2 flex items-center">
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

                  <div>
                    <p className="text-md font-bold ml-3">
                      {" "}
                      {userProfile &&
                        `${userProfile.first_name} ${userProfile.last_name}`}
                    </p>
                    <p className="text-md font-normal ml-3">
                      {userProfile ? (
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                          {userProfile.skill}
                        </span>
                      ) : (
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                          Update your skill.
                        </p>
                      )}
                    </p>
                  </div>
                </div>

                <div>
                  <>
                    {userProfile ? (
                      <p className="mb-3 p-1 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
                        {userProfile.bio}
                      </p>
                    ) : (
                      <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
                        Update your bio.
                      </p>
                    )}
                  </>
                </div>
              </div>

              {/* </div> */}

              {/* </div> */}

              {/* <!-- Instructor Statistics --> */}
              <div className="p-4 bg-white rounded shadow-lg">
                <h2 className="text-lg font-bold mb-2">Dashboard</h2>
                <hr className="mt-2"></hr>
                {/* <!-- Add statistics like courses, students, earnings, etc. here --> */}

                {userProfile ? (
                  <div class="bg-gradient-to-r from-gray-900 to-green-700 rounded-xl mt-2 overflow-hidden shadow-lg max-w-s">
                    <div class="p-4">
                      <div class="flex justify-between items-center">
                        <div class="flex items-start justify-center space-x-1">
                          <div class="rounded-full bg-red-500 w-7 h-7"></div>
                          <div class="rounded-full bg-yellow-400 w-7 h-7"></div>

                          <div class="">
                            <h1 class="text-white text-2xl font-bold">
                              Skill Savant Wallet
                            </h1>
                          </div>
                        </div>

                        <div class="card-chip w-8 h-8"></div>
                      </div>

                      <div class="mt-4">
                        <p class="text-gray-400 text-xs">Card Number</p>
                        <p class="text-white text-xl font-semibold tracking-wider">
                          &times;&times;&times;&times;
                          &times;&times;&times;&times; 2030 3020
                        </p>
                      </div>
                      <div class="mt-4">
                        <p class="text-gray-400 text-xs">Balance</p>
                        <p class="text-white text-xl font-semibold tracking-wider">
                          &#8377;{userProfile?.wallet}
                        </p>
                      </div>
                      <div class="flex justify-between mt-4">
                        <div>
                          <p class="text-gray-400 text-xs">Card Holder</p>
                          <p class="text-white text-sm">
                            {userProfile && `${userProfile.first_name}`}
                          </p>
                        </div>
                        <div>
                          <p class="text-gray-400 text-xs">Valid Till</p>
                          <p class="text-white text-sm">Lifetime</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorProfilePage;

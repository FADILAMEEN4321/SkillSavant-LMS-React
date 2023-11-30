import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { axiosInstance } from "./../../services/axios";
import SkillGPT from "./SkillGPT";


const Header = () => {
  let { logoutUser, user, authTokens, setUserProfile, userProfile } =
    useContext(AuthContext);
  const [studentData, setStudentData] = useState(null);

  const handleLogout = () => {
    setStudentData(null);
    setUserProfile(null);
    logoutUser();
  };

  useEffect(() => {
    // Fetch student profile data when the app initializes and when user is logged in
    if (user) {
      // Only fetch if a user is logged in
      const user_id = user.user_id;

      // Fetch student profile data
      const fetchStudentData = async () => {
        try {
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens?.access}`,
          };
          if (user.role === "student") {
            console.log("if condition---yes");
            const response = await axiosInstance.get(
              `student-profile-view-update/${user_id}/`,
              { headers }
            );
            if (response.status === 200) {
              const studentProfileData = response.data;
              console.log("from header----------->", studentProfileData);
              setStudentData(studentProfileData);
              setUserProfile(studentProfileData);
            }
          }
          if (user.role === "instructor") {
            console.log("if condition---yes admin");
            const response = await axiosInstance.get(
              `instructor-profile-view-update/${user_id}/`,
              { headers }
            );
            if (response.status === 200) {
              const studentProfileData = response.data;
              console.log("from header----------->", studentProfileData);
              setStudentData(studentProfileData);
              setUserProfile(studentProfileData);
            }
          }
        } catch (error) {
          // Handle any errors, e.g., by showing an error message or logging them
          console.error("Error fetching student profile data:", error);
        }
      };

      fetchStudentData();
    }
  }, [user]);

  console.log(studentData, "---------------header");

  return (
    <div className="navbar bg-base-100 sticky inset-0 z-40 border-white/8 bg-opacity-80 shadow-md backdrop-blur-2xl backdrop-saturate-200">
      <div className="navbar-start">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <li><a>Item 1</a></li> */}
            <li>
              <ul className="p-2">
                {user ? (
                  user.role === "student" && (
                    <li>
                      <Link to="/">
                        {" "}
                        <span className="text-[15px] text-black">🏡 Home</span>
                      </Link>
                    </li>
                  )
                ) : (
                  <li>
                    <Link to="/"><span className="text-[15px] text-black">🏡 Home</span></Link>
                  </li>
                )}
                {user ? (
                  user.role === "student" && (
                    <li>
                      <Link to="/courses">
                        <span className="text-[15px] text-black">
                          📚 Courses
                        </span>
                      </Link>
                    </li>
                  )
                ) : (
                  // <li tabIndex={0}>
                  //       <details>
                  //         <summary>Courses</summary>
                  //         <ul className="p-2">
                  //           <li><a>Submenu 1</a></li>
                  //           <li><a>Submenu 2</a></li>
                  //         </ul>
                  //       </details>
                  //     </li>

                  // <li tabIndex={0}>
                  //   <details>
                  //     <summary>Courses</summary>
                  //     <ul className="p-2">
                  //       <li><a>Submenu 1</a></li>
                  //       <li><a>Submenu 2</a></li>
                  //     </ul>
                  //   </details>
                  // </li>
                  <li>
                    <Link to="/courses">
                      <span className="text-[15px] text-black">📚 Courses</span>
                    </Link>
                  </li>
                )}

                {user
                  ? user.role === "student" && (
                      <li>
                        <Link to="/MyLearning">
                          <span className="text-[15px] text-black">
                            🤹 My learning{" "}
                          </span>
                        </Link>
                      </li>
                    )
                  : ""}

               {user
                  ? user.role === "student" && (
                      <li>
                        <Link to="/MyLearning">
                          <span className="text-[15px] text-black">
                            🤹 My learning{" "}
                          </span>
                        </Link>
                      </li>
                    )
                  : ""}



                {user ? (
                  ""
                ) : (
                  <li>
                    <Link to="/instructor/login">
                      <span className="text-[15px] text-black">
                        👩‍🏫 Teach On Skill Savant
                      </span>
                    </Link>
                  </li>
                )}

                {userProfile && (
                  <li>
                    <a>
                      <span className="text-[15px] text-black">
                        👋 Hi, {userProfile.first_name}
                      </span>
                    </a>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl mr-6">Skill Savant</a>
        <div className="form-control w-full hidden md:flex rounded-md relative">
  <input
    type="text"
    placeholder="What you want to learn ?"
    className="input input-bordered md:w-auto hidden rounded-md md:flex bg-transparent"
  />
  <div className="absolute btn btn-sm right-2 rounded-md p-2 bg-gray-200 hover:bg-gray-300 text-[17px] top-1/2 transform -translate-y-1/2 cursor-pointer">
  <i class="fas fa-search text-gray-900"></i>
  </div>
</div>





      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {user ? (
            user.role === "student" && (
              <li>
                <Link to="/">
                  {" "}
                  <span className="text-[15px] text-black">🏡 Home</span>
                </Link>
              </li>
            )
          ) : (
            <li>
              <Link to="/">🏡 Home</Link>
            </li>
          )}
          {user ? (
            user.role === "student" && (
              <li>
                <Link to="/courses">
                  <span className="text-[15px] text-black">📚 Courses</span>
                </Link>
              </li>
            )
          ) : (
            // <li tabIndex={0}>
            //       <details>
            //         <summary>Courses</summary>
            //         <ul className="p-2">
            //           <li><a>Submenu 1</a></li>
            //           <li><a>Submenu 2</a></li>
            //         </ul>
            //       </details>
            //     </li>

            // <li tabIndex={0}>
            //   <details>
            //     <summary>Courses</summary>
            //     <ul className="p-2">
            //       <li><a>Submenu 1</a></li>
            //       <li><a>Submenu 2</a></li>
            //     </ul>
            //   </details>
            // </li>
            <li>
              <Link to="/courses">
                <span className="text-[15px] text-black">📚 Courses</span>
              </Link>
            </li>
          )}

          {user
            ? user.role === "student" && (
                <li>
                  <Link to="/MyLearning">
                    <span className="text-[15px] text-black">
                      🤹 My learning{" "}
                    </span>
                  </Link>
                </li>
              )
            : ""}


             {user
            ? user.role === "student" && (
                <li onClick={()=>document.getElementById('skillGPT').showModal()}>
                  
                    <span className="text-[15px] text-black">
                      🤹 skillGPT{" "}
                    </span>
                    
                  
                </li>
                

              )
            : ""}




          {user ? (
            ""
          ) : (
            <li>
              <Link to="/instructor/login">
                <span className="text-[15px] text-black">
                  👩‍🏫 Teach On Skill Savant
                </span>
              </Link>
            </li>
          )}

          {userProfile && (
            <li>
              <a>
                <span className="text-[15px] text-black">
                  👋 Hi, {userProfile.first_name}
                </span>
              </a>
            </li>
          )}
        </ul>
      </div>

      {user ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {studentData ? (
                <img src={studentData.profile_photo} />
              ) : (
                <img src="" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <Link
          to="/login"
          className="btn px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </Link>

       
      )}
    </div>
  );
};

export default Header;

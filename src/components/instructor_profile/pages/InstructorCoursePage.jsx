import React, { useState, useEffect, useContext } from "react";
import InstructorSideBar from "../features/InstructorSideBar";
import InstructorMobileSideBar from "../features/InstructorMobileSideBar";
import { axiosInstance, axiosAuthorized } from "../../../services/axios";
import AuthContext from "../../../context/AuthContext";
import CourseCreationModal from "../features/CourseCreationModal";
import { Link } from "react-router-dom";
import MyCourseFilter from "../features/MyCourseFilter";
import EditCourseModal from "../features/EditCourseModal";
import CourseDelete from "../features/CourseDelete";

const InstructorCoursePage = (props) => {
  let { userProfile, authTokens } = useContext(AuthContext);

  const [courses, setCourses] = useState([]);
  const [originalCourses, setOriginalCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (userProfile) {
        const instructorId = userProfile.id;
        console.log("from instructor course page--->", instructorId);
        // Set loading to true when starting the API call
        setLoading(true);
        try {
          const response = await axiosInstance.get(
            `instructor-courses/${instructorId}/`
          );
          console.log(response.data);
          setCourses(response.data);
          setOriginalCourses(response.data);
        } catch (error) {
          console.error("Error fetching courses", error);
        } finally {
          // Set loading to false when the API call is complete
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [userProfile]);

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

          <div className="relative container bg-slate-500 min-h-[150px] rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-60 bg-black rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              {/* Your text content here */}
              <h1 className="mb-3 text-2xl font-extrabold text-white dark:text-white md:text-3xl lg:text-4xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-sky-400">
                  Empower minds, shape
                </span>{" "}
                futures.
              </h1>
              <p className="text-sm font-normal text-gray-200 lg:text-lg dark:text-gray-400">
                Craft your legacy as a Skill Savant instructor.
              </p>
            </div>
            {/* <div className="bg-cover bg-[url('/self-learning.jpg')] min-h-[160px] rounded-md" /> */}
          </div>

          <div className="container">
            <div className="md:flex items-center justify-between">
              <CourseCreationModal setCourses={setCourses} />
              <MyCourseFilter
                setCourses={setCourses}
                originalCourses={originalCourses}
              />
            </div>
          </div>

          <div className="container">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Course Cards */}

              {loading ? (
                <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                courses.map((course) => (
                  <>
                    <div
                      key={course.id}
                      className="w-[300px] hover:drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-2"
                    >
                      <Link to={`/instructor/mycourses/${course.id}`}>
                        <div className="relative group">
                          <img
                            className="object-cover w-full h-48"
                            src={course.cover_image}
                            alt="Course Image"
                          />
                          {/* Play icon */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="h-11 w-11 rounded-full bg-slate-900 bg-opacity-75 flex items-center justify-center">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
                                  stroke="#fff"
                                  stroke-width="1.5"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Course Details */}
                      <div className="p-4">
                        {/* Course Title */}
                        {/* <h2 className="text-xl font-bold mb-2">{course.title}</h2> */}
                        <Link to={`/instructor/mycourses/${course.id}`}>
                          <h2
                            className="line-clamp-2 uppercase hover:line-clamp-none text-md font-extrabold mb-1 overflow-hidden"
                            // title={course.title} // Adding a tooltip using the title attribute
                          >
                            {course.title}
                          </h2>
                        </Link>
                        <hr className="mb-1" />
                        {/* Hours */}
                        <div className="flex items-center justify-between mb-1">
                          <Link to={`/instructor/mycourses/${course.id}`}>
                            <div>
                              <span className="text-[17px] mr-1">⏳</span>
                              <span className="text-[14px] text-gray-500">
                                {"  "}
                                {course.duration}
                              </span>
                            </div>
                          </Link>

                          <div></div>
                        </div>

                        <div className="flex items-center justify-between mb-1">
                          <Link to={`/instructor/mycourses/${course.id}`}>
                            <div>
                              <span className="text-[17px] mr-1">🗓️</span>
                              <span className="text-[14px] text-gray-500">
                                {"  "}
                                {course.fromatted_created_at}
                              </span>
                            </div>
                          </Link>

                          <div>
                            {course.is_approved ? (
                              <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                                Approved
                              </span>
                            ) : (
                              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
                                Pending
                              </span>
                            )}
                          </div>
                        </div>
                        <hr className="mt-2 mb-2" />

                        <div className="flex items-center justify-end mb-1">
                          <div className="bg-blue-700 hover:bg-blue-800 hover:cursor-pointer p-1 rounded-md mr-2">
                            <svg
                              className=""
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 11.0004V7.81855C20 6.12531 20 5.27869 19.732 4.60251C19.3012 3.51547 18.3902 2.65802 17.2352 2.25257C16.5168 2.00037 15.6173 2.00037 13.8182 2.00037C10.6698 2.00037 9.09563 2.00037 7.83836 2.44172C5.81714 3.15125 4.22281 4.65179 3.46894 6.55412C3 7.73743 3 9.21901 3 12.1822V14.7276C3 17.797 3 19.3317 3.8477 20.3975C4.09058 20.7028 4.37862 20.9739 4.70307 21.2025C5.74797 21.9387 7.21706 21.9956 10 22"
                                stroke="#fff"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2"
                                stroke="#fff"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M14.3477 21.8557L14.1909 21.1223L14.3477 21.8557ZM13.1443 20.6523L13.8777 20.8091L13.1443 20.6523ZM14.0207 18.1117L13.4903 17.5814H13.4903L14.0207 18.1117ZM20.7963 15.4773L21.4458 15.1023L20.7963 15.4773ZM20.7963 16.9981L21.4458 17.3731L20.7963 16.9981ZM19.5227 14.2037L19.8977 13.5542L19.5227 14.2037ZM17.3285 14.8039L17.8588 15.3342L17.3285 14.8039ZM18.0019 14.2037L17.6269 13.5542L17.6269 13.5542L18.0019 14.2037ZM19.6658 17.1412L16.358 20.449L17.4186 21.5097L20.7265 18.2018L19.6658 17.1412ZM14.551 18.642L17.8588 15.3342L16.7982 14.2735L13.4903 17.5814L14.551 18.642ZM14.1909 21.1223C14.0155 21.1598 13.8753 21.1897 13.7548 21.2121C13.6333 21.2347 13.5536 21.2454 13.4996 21.2488C13.4441 21.2524 13.4479 21.2458 13.4825 21.2547C13.5296 21.2669 13.5936 21.2972 13.6482 21.3518L12.5876 22.4124C12.9113 22.7362 13.3158 22.7636 13.5948 22.7458C13.8603 22.7289 14.1839 22.6577 14.5045 22.5891L14.1909 21.1223ZM12.4109 20.4955C12.3423 20.8161 12.2711 21.1397 12.2542 21.4052C12.2364 21.6842 12.2638 22.0887 12.5876 22.4124L13.6482 21.3518C13.7028 21.4064 13.7331 21.4704 13.7453 21.5175C13.7542 21.5521 13.7476 21.5559 13.7512 21.5004C13.7546 21.4464 13.7653 21.3667 13.7879 21.2452C13.8103 21.1247 13.8402 20.9845 13.8777 20.8091L12.4109 20.4955ZM19.6658 15.3342C20.0333 15.7017 20.1084 15.786 20.1467 15.8523L21.4458 15.1023C21.2839 14.8218 21.0257 14.5728 20.7265 14.2735L19.6658 15.3342ZM20.7265 18.2018C21.0257 17.9026 21.2839 17.6535 21.4458 17.3731L20.1467 16.6231C20.1084 16.6894 20.0333 16.7737 19.6658 17.1412L20.7265 18.2018ZM20.1467 15.8523C20.2844 16.0908 20.2844 16.3846 20.1467 16.6231L21.4458 17.3731C21.8514 16.6705 21.8514 15.8049 21.4458 15.1023L20.1467 15.8523ZM20.7265 14.2735C20.4272 13.9743 20.1782 13.7161 19.8977 13.5542L19.1477 14.8533C19.214 14.8916 19.2983 14.9667 19.6658 15.3342L20.7265 14.2735ZM17.8588 15.3342C18.2263 14.9667 18.3106 14.8916 18.3769 14.8533L17.6269 13.5542C17.3465 13.7161 17.0974 13.9743 16.7982 14.2735L17.8588 15.3342ZM19.8977 13.5542C19.1951 13.1486 18.3295 13.1486 17.6269 13.5542L18.3769 14.8533C18.6154 14.7156 18.9092 14.7156 19.1477 14.8533L19.8977 13.5542ZM16.358 20.449C16.1624 20.6445 15.8952 20.771 15.5155 20.8679C15.3253 20.9165 15.1224 20.954 14.8963 20.9931C14.679 21.0306 14.4303 21.0711 14.1909 21.1223L14.5045 22.5891C14.7063 22.546 14.9131 22.5124 15.1517 22.4712C15.3814 22.4315 15.6346 22.3856 15.8866 22.3213C16.3914 22.1924 16.9533 21.975 17.4186 21.5097L16.358 20.449ZM13.8777 20.8091C13.9289 20.5697 13.9694 20.321 14.0069 20.1037C14.046 19.8776 14.0835 19.6747 14.1321 19.4845C14.229 19.1048 14.3555 18.8376 14.551 18.642L13.4903 17.5814C13.025 18.0467 12.8076 18.6086 12.6787 19.1134C12.6144 19.3654 12.5685 19.6186 12.5288 19.8483C12.4876 20.0869 12.454 20.2937 12.4109 20.4955L13.8777 20.8091Z"
                                fill="#fff"
                              />
                            </svg>
                          </div>

                          <CourseDelete
                            setCourses={setCourses}
                            course={course}
                            originalCourses={originalCourses}
                            setOriginalCourses={setOriginalCourses}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ))
              )}

              {/* Repeat the above course card div for each course */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCoursePage;

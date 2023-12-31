import React, { useEffect, useState } from "react";
import InstructorMobileSideBar from "../features/InstructorMobileSideBar";
import InstructorSideBar from "../features/InstructorSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faTag,
  faDollarSign,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { axiosInstance } from "./../../../services/axios";
import ModuleCreationModal from "../features/ModuleCreationModal";
import PlayButton from "../features/PlayButton";
import ModuleDelete from "../features/ModuleDelete";

const InstructorCourseDetailPage = () => {
  const { courseId } = useParams();

  const [course, setCourse] = useState({});
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`courses-details/${courseId}/`)
      .then((response) => {
        const { course, modules } = response.data;
        setCourse(course);
        setModules(modules);
      })
      .catch((error) => {
        console.error("error while fetching course and modules:", error);
      })
      .finally(() => {
        setLoading(false);
      });
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

          <div className="container bg-white p-4 rounded-md">
            <>
              {/* Module Listing */}
              <div className="container mx-auto ">
                <div className="relative container min-h-[150px] rounded-md mb-4">
                  <div className="absolute inset-0 bg-opacity-60 bg-black rounded-md" />
                  <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
                    {/* Your text content here */}
                    {loading ? (
                      <p>loading</p>
                    ) : (
                      <h1 className="mb-1 line-clamp-1 hover:line-clamp-none text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-sky-500">
                          {course.title}
                        </span>{" "}
                        {/* World. */}
                      </h1>
                    )}
                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      <p className="text-md font-normal line-clamp-1 hover:line-clamp-none text-gray-200 lg:text-lg dark:text-gray-400">
                        {course.subtitle}
                      </p>
                    )}
                  </div>

                  <div
                    className="bg-cover min-h-[150px] rounded-md"
                    style={{
                      backgroundImage: `url('${course.cover_image}')`,
                      backgroundPosition: "center center",
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="p-3 bg-green-200 rounded hover:cursor-pointer shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300">
                    <div className="text-green-600 text-1xl mb-1">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <div className="text-lg font-bold text-green-800">
                      Level
                    </div>
                    {loading ? (
                      <p>loading..</p>
                    ) : (
                      <div className="text-gray-600">{course.level}</div>
                    )}
                  </div>
                  <div className="p-3 bg-blue-200 rounded  shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300">
                    <div className="text-blue-600 text-1xl mb-1">
                      <i className="fas fa-tag"></i>
                    </div>
                    <div className="text-lg font-bold text-blue-800">
                      Category
                    </div>
                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      <div className="text-gray-600">
                        {course.subcategory.name}
                      </div>
                    )}
                  </div>
                  <div className="p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 bg-red-200 rounded shadow-lg">
                    <div className="text-red-600 text-1xl mb-1">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div className="text-lg font-bold text-red-800">Price</div>
                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      <div className="text-gray-600">{course.price}</div>
                    )}
                  </div>
                  <div className="p-3 bg-yellow-200 rounded shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300">
                    <div className="text-yellow-600 text-1xl mb-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="text-lg font-bold text-yellow-800">
                      Status
                    </div>
                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      <div className="text-gray-600 font-normal">
                        {course.is_approved ? "Approved" : "Pending"}
                      </div>
                    )}
                  </div>
                </div>

                {/* Module listing content here */}
                <div className="container p-3 flex items-center justify-between">
                  <h3 className="text-xl text-gray-900 font-bold">
                    Modules in this course
                  </h3>
                  <h3 className="text-xl text-gray-900 font-semibold">
                    <ModuleCreationModal
                      course={course}
                      setModules={setModules}
                    />
                  </h3>
                </div>
                <hr />
                <div className="container mx-auto mt-4 mb-4">
                  {loading ? (
                    <p>loading...</p>
                  ) : (
                    modules.map((module) => (
                      <div
                        key={module.id}
                        className="container p-3 mb-1 hover:text-gray-800 bg-gray-100 flex items-center justify-between hover:bg-gray-200 rounded-md"
                      >
                        <h3 className="text-md font-medium text-gray-800">
                          {module.module_order}. {module.module_title}{" "}
                          <span className="text-sm ml-1 font-light">
                            {module.duration}
                          </span>
                        </h3>
                        <div className="flex">
                          <PlayButton module={module} />

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

                          <ModuleDelete
                            modules={modules}
                            setModules={setModules}
                            module={module}
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <hr />
              </div>
            </>

            <>
              {/* About the Course */}
              <div className="container mx-auto mt-4">
                <div className="container mb-4 p-3">
                  <h2 className="text-lg font-bold mb-4">About the Course</h2>
                  {loading ? (
                    <p>loading...</p>
                  ) : (
                    <p className="text-gray-700 font-normal">
                      {course.description}
                    </p>
                  )}
                </div>
                <hr />
              </div>

              {/* Created at */}
              <div className="container mx-auto mt-1">
                <div className="container mb-4 p-3">
                  <h2 className="text-lg font-bold mb-4">
                    Created at:{" "}
                    {loading ? (
                      ""
                    ) : (
                      <span className="font-thin text-md">
                        {course.formatted_created_at}
                      </span>
                    )}
                  </h2>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCourseDetailPage;

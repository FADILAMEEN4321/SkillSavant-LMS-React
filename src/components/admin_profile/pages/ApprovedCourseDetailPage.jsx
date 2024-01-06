import React, { useEffect, useState } from "react";
import AdminSideBar from "./../features/AdminSideBar";
import AdminMobileSideBar from "./../features/AdminMobileSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { axiosInstance } from "./../../../services/axios";
import { toast } from "react-toastify";
import PlayButton from "../../instructor_profile/features/PlayButton";

const ApprovedCourseDetailPage = () => {
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
        console.log("error while fetching coure details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleApprovalToggle = async (courseId) => {
    try {
      const response = await axiosInstance.put(
        `admin/course-approval-toggle/${courseId}/`
      );
      if (response.data) {
        setCourse(response.data);
        toast.success("Blocked successfully");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Erroe while blocking course.");
    }
  };

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

          <div className="container bg-white p-4 rounded-md">
            <>
              {/* Module Listing */}
              <div className="container mx-auto ">
                <div className="relative container bg-blue-700 min-h-[200px] rounded-md mb-4">
                  <div className="absolute inset-0 bg-opacity-60 bg-black rounded-md" />
                  <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
                    {/* Your text content here */}

                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      <>
                        <h1 class="mb-3 text-2xl font-extrabold leading-none tracking-tight capitalize text-white md:text-2xl lg:text-3xl dark:text-white">
                          {course.title}
                          <span class="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-blue-600"></span>
                        </h1>

                        <p class="text-sm font-normal capitalize text-gray-200 lg:text-lg">
                          {course.subtitle}
                        </p>
                      </>
                    )}
                  </div>

                  {loading ? (
                    <p>loading...</p>
                  ) : (
                    <div
                      className="bg-cover min-h-[200px] rounded-md"
                      style={{
                        backgroundImage: `url('${course.cover_image}')`,
                        backgroundPosition: "center center",
                      }}
                    />
                  )}
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
                  {loading ? (
                    <p>loading...</p>
                  ) : course.is_approved ? (
                    <button
                      onClick={() => handleApprovalToggle(course.id)}
                      type="button"
                      class="btn btn-sm btn-error"
                    >
                      Block course
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                <hr />
                <div className="container mx-auto mt-4 mb-4">
                  {loading ? (
                    <p>loading...</p>
                  ) : (
                    modules.map((module) => (
                      <div
                        key={module.id}
                        className="container p-3 flex items-center justify-between hover:border hover:border-gray-900 rounded-md"
                      >
                        <h3 className="text-lg font-semibold text-gray-900">
                          {module.module_order}. {module.module_title}
                        </h3>
                        <div>
                          <span>
                            <PlayButton module={module} />
                            {module.duration}m
                          </span>
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
                  <h2 className="text-2xl font-bold mb-4">About the Course</h2>

                  {loading ? (
                    <p>loading...</p>
                  ) : (
                    <p className="text-gray-700">{course.description}</p>
                  )}
                </div>
                <hr />
              </div>

              {/* Created at */}
              <div className="container mx-auto mt-4">
                <div className="container mb-4 p-3">
                  <h2 className="text-xl font-bold mb-4">
                    Created at:{" "}
                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      <span className="font-thin">{course.created_at}</span>
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

export default ApprovedCourseDetailPage;

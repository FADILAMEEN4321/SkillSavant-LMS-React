import React, { useEffect, useState, useContext } from "react";
import ReactPlayer from "react-player";
import { axiosInstance } from "./../../../services/axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { BiLock } from "react-icons/bi";
import AuthContext from "../../../context/AuthContext";
import { toast } from "react-toastify";

const CoursedetailPage = () => {
  const { courseId } = useParams();
  const { user, userProfile } = useContext(AuthContext);

  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`single-course-details/${courseId}/`)
      .then((response) => {
        setCourseDetails(response.data);
      })
      .catch((error) => {
        console.log("error while fetching course data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onClickVerifyCourse = async (courseId) => {
    if (!user) {
      navigate("/login");
    } else {
      try {
        const response = await axiosInstance.get(
          `verify-course/${courseId}/${userProfile.id}`
        );

        if (response.status === 200) {
          navigate(`/courses/enroll/${courseId}`);
        }
      } catch (error) {
        if (error.response.data) {
          console.log(error.response.data);
          toast.warning(error.response.data.message);
        }
      }
    }
  };

  return (
    <>
      <section className="bg-gray-900 p-2">
        {loading ? (
          <>
            <div className="animate-pulse">
              {/* Skeleton Loader */}
              <div className="container mx-auto my-8 bg-gray-800 rounded-md p-4">
                <div className="flex flex-wrap items-center">
                  {/* Left Part - Video Player Skeleton */}
                  <div className="md:w-full lg:w-1/3 bg-gray-700 rounded-md p-4">
                    {/* Skeleton for video player */}
                    <div className="w-full h-64 bg-gray-600 rounded-md"></div>
                  </div>

                  {/* Right Part - Course Details Skeleton */}
                  <div className="w-full md:1/2 lg:w-2/3 p-4">
                    {/* Skeleton for course details */}
                    <div className="mb-3 h-8 bg-gray-600 rounded-md"></div>
                    <div className="mb-4 h-6 bg-gray-600 rounded-md"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="w-full mb-2">
                        {/* Skeleton for level */}
                        <div className="flex flex-row items-center mb-1">
                          <div className="text-gray-400 rounded-md font-mono text-md font-thin h-4 w-24 bg-gray-600"></div>
                        </div>

                        {/* Skeleton for price */}
                        <div className="flex flex-row items-center mb-1">
                          <div className="text-gray-400 rounded-md font-mono text-md font-thin h-4 w-24 bg-gray-600"></div>
                        </div>

                        {/* Skeleton for instructor */}
                        <div className="flex flex-row items-center mb-1">
                          <div className="text-gray-400 rounded-md text-md font-mono font-thin h-4 w-24 bg-gray-600"></div>
                        </div>
                      </div>

                      <div className="w-full h-full flex items-end">
                        <div>
                          {/* Skeleton for enroll button */}
                          <div className="bg-gray-600 text-sm text-white text-center font-semibold p-3 rounded-md h-10 w-32"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container mx-auto my-8 bg-gray-900">
              <div className="flex flex-wrap items-center">
                {/* Left Part - Video Player */}
                <div className="md:w-full lg:w-1/3">
                  <ReactPlayer
                    url={
                      courseDetails?.modules[0]
                        ? courseDetails?.modules[0].video_url
                        : ""
                    }
                    width="100%"
                    height="100%"
                    loop={true}
                    playing={true}
                    controls={true}
                  />
                </div>

                {/* Right Part - Course Details */}
                <div className="w-full md:1/2 lg:w-2/3 p-4">
                  <h2 className="mb-3 line-clamp-3 capitalize hover:line-clamp-none text-2xl font-extrabold tracking-wide leading-none text-white md:text-3xl lg:text-4xl dark:text-white">
                    {courseDetails.title}
                  </h2>

                  <p className="mb-4 text-lg font-normal capitalize text-gray-300 lg:text-xl dark:text-gray-400">
                    {courseDetails.subtitle}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="w-full mb-2">
                      <div className="flex flex-row items-center mb-1">
                        <p className="text-gray-400 font-mono text-md font-thin">
                          <i class="fas fa-signal mr-2 text-gray-200"></i>
                          {courseDetails.level}
                        </p>
                      </div>

                      <div className="flex flex-row items-center mb-1">
                        <p className="text-gray-400 font-mono text-md font-thin">
                          <i class="fas fa-rupee-sign mr-2 text-gray-200"></i>

                          {courseDetails.price}
                        </p>
                      </div>

                      <div className="flex flex-row items-center mb-1">
                        <p className="text-gray-400 text-md font-mono font-thin">
                          <i class="fas fa-chalkboard-teacher mr-2 text-gray-200"></i>
                          {courseDetails.instructor_first_name}{" "}
                          {courseDetails.instructor_last_name}
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full flex items-end">
                      <div>
                        <button
                          type="button"
                          onClick={() => onClickVerifyCourse(courseDetails.id)}
                          class="bg-white border border-gray-400 text-sm text-white text-center font-semibold p-3 rounded-md hover:bg-white hover:text-black"
                        >
                          <i class="fas fa-user-plus mr-2"></i>
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Module Listing */}
      <div className="container mx-auto mt-4 mb-4">
        {/* Module listing content here */}
        <div className="container p-3 flex items-center justify-between">
          <h3 className="text-2xl text-gray-900 font-bold">
            Lessons in this course
          </h3>

          <h3 className="text-xl text-gray-900 font-semibold">
            {loading ? (
              ""
            ) : (
              <>
                <span className="text-[19px]">
                  <i class="far fa-clock mr-2"></i>
                </span>
                <span className="text-xl text-[18px] font-mono">
                  {courseDetails.duration}
                </span>
              </>
            )}
          </h3>
        </div>
        <hr />
        <div className="container mx-auto mt-4 mb-4">
          {loading ? (
            <div className="animate-pulse">
              {[1, 2, 3].map((placeholderModule) => (
                <div
                  key={placeholderModule}
                  className="container p-3 flex items-center justify-between border border-gray-400 rounded-md mb-2"
                >
                  <div className="flex items-center">
                    <span className="mr-4 bg-gray-400 rounded-full h-6 w-6"></span>
                    <div className="bg-gray-400 h-4 w-32 rounded-md"></div>
                  </div>
                  <div className="h-6 w-12 bg-gray-400 rounded-md"></div>
                </div>
              ))}
            </div>
          ) : (
            courseDetails.modules.map((module) => (
              <div
                key={module.id}
                className="container p-3 flex items-center justify-between hover:border hover:border-gray-900 rounded-md"
              >
                <div className="flex items-center">
                  <span className="mr-4">
                    <BiLock size={20} color="black" />
                  </span>
                  <h3 className="text-lg font-medium text-gray-900">
                    <span>
                      {module.module_order}. {module.module_title}
                    </span>
                  </h3>
                </div>

                <h3 className="text-md font-mono text-thin text-gray-900 font-semibold">
                  {module.duration}
                </h3>
              </div>
            ))
          )}
        </div>
        <hr />
      </div>

      <>
        {/* About the Course */}
        <div className="container mx-auto mt-4 mb-2">
          <div className="container mb-4 p-3">
            <h2 className="text-2xl font-bold mb-4">About the Course</h2>
            {loading ? (
              <div className="animate-pulse">
                <div className="h-4 rounded-md bg-gray-400 w-3/4 mb-4"></div>
                <div className="h-4 rounded-md bg-gray-400 w-2/4 mb-4"></div>
                <div className="h-4 rounded-md bg-gray-400 w-1/4 mb-4"></div>
              </div>
            ) : (
              <p className="text-gray-700">{courseDetails.description}</p>
            )}
          </div>
          <hr />
        </div>
        {/* About the Instructor */}
        <div className="container mx-auto mt-4 mb-10">
          <div className="container mb-4 p-3">
            <h2 className="text-2xl font-bold mb-4">Meet your Instructor</h2>
            <div className="flex items-center">
              {loading ? (
                <div className="animate-pulse">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mr-4"></div>
                </div>
              ) : (
                <img
                  src={courseDetails.instructor_photo}
                  alt="Instructor"
                  className="w-16 h-16 rounded-full mr-4"
                />
              )}
              <div>
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-400 w-2/4 mb-2"></div>
                    <div className="h-4 bg-gray-400 w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-400 w-2/4 mb-2"></div>
                    <div className="h-4 bg-gray-400 w-3/4"></div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl capitalize font-semibold">
                      {courseDetails.instructor_first_name}{" "}
                      {courseDetails.instructor_last_name}
                    </h3>
                    <p className="text-gray-700 mt-1">
                      <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        {courseDetails.instructor_skill}
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
            {loading ? (
              <div className="animate-pulse">
                <div className="h-4 rounded-md bg-gray-400 w-3/4 mb-4"></div>
                <div className="h-4 rounded-md bg-gray-400 w-2/4 mb-4"></div>
                <div className="h-4 rounded-md bg-gray-400 w-1/4 mb-4"></div>
              </div>
            ) : (
              <p className="text-gray-700 mt-2">
                {courseDetails.instructor_bio}
              </p>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default CoursedetailPage;

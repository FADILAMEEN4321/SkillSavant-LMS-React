import React, { useState, useEffect } from "react";
import LearningReactPlayer from "../features/LearningReactPlayer";
import OverviewSection from "../features/OverviewSection";
import { useParams } from "react-router-dom";
import { axiosInstance } from "./../../../services/axios";
import { Tabs, Tab } from "./../features/Tabs";
import DiscussionRoom from "../features/DiscussionRoom";
import { Editor } from "novel";
import LearningPageMobileSideBar from "../features/LearningPageMobileSideBar";

const CourseLearningPage = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentModule, setCurrentModule] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`single-course-details/${courseId}/`)
      .then((response) => {
        console.log(response.data);
        setCourseData(response.data);
        console.log("---->modules====", response.data.modules[0]);
        console.log("---->modules====", response.data.modules);
        if (response.data.modules) {
          setCurrentModule(response.data.modules[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Main Content Container */}
      <div className="container mx-auto p-4 mt-4 flex">
        {/* Left Side (ReactPlayer) */}
        <div className="w-full md:pr-4">
          <LearningPageMobileSideBar
            setCurrentModule={setCurrentModule}
            courseData={courseData}
            loading={loading}
            currentModule={currentModule}
          />
          {/* sidebar */}

          {/* ReactPlayer Component (replace with your ReactPlayer code) */}

          <LearningReactPlayer
            setCourseData={setCourseData}
            currentModule={currentModule}
            loading={loading}
          />

          <Tabs>
            <Tab label="Overview" icon="fas fa-chess-board">
              {/* Section of Overview */}
              <OverviewSection
                courseData={courseData}
                currentModule={currentModule}
                loading={loading}
              />
            </Tab>

            <Tab label="Discussion Room" icon="far fa-comments">
              <DiscussionRoom enrolledCourseId={courseId} />
            </Tab>
            {/* <Tab label="Take Notes" icon="far fa-sticky-note">
        
        
        <div className="container min-h-screen">
        <Editor className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg"/>

        </div>

        </Tab>
      */}
          </Tabs>

          {/* Section of Chat */}
        </div>

        <div className="w-2/4 hidden md:block">
          <div class="sidebar bg-white mx-auto">
            <div class="flex flex-col min-h-screen shadow-lg rounded overflow-hidden">
              <div class="px-6 py-4 bg-gray-900">
                <h2 class="text-xl font-bold text-white">Course Modules</h2>
              </div>
              <ul class="flex-1 overflow-y-auto">
                {loading ? (
                  <div className="animate-pulse">
                    {[1, 2, 3, 4].map((placeholderModule) => (
                      <li
                        key={placeholderModule}
                        className="flex items-center justify-between py-4 px-6 border-b border-gray-200 cursor-pointer"
                      >
                        <div className="flex items-center">
                          <div className="bg-gray-200 h-4 w-4 rounded-full mr-4"></div>
                          <div className="bg-gray-200 h-4 w-[150px] rounded-md"></div>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-gray-200 h-4 w-6 rounded-md"></div>
                        </div>
                      </li>
                    ))}
                  </div>
                ) : (
                  courseData.modules.map((module) => (
                    <li
                      key={module.id}
                      className={`${
                        currentModule.id === module.id
                          ? "bg-blue-100"
                          : "hover:bg-blue-50 transition  duration-150 ease-in-out"
                      }
                        flex items-center justify-between py-4 px-6 border-b border-gray-200
                        cursor-pointer
                         
                          
                          
                          `}
                    >
                      <div
                        class="flex items-center"
                        onClick={() => setCurrentModule(module)}
                      >
                        {module.is_completed ? (
                          <i class="fas fa-check-circle text-green-500 mr-4"></i>
                        ) : (
                          <i class="fas fa-check-circle text-gray-200 mr-4"></i>
                        )}
                        <span class="font-medium text-gray-800">
                          {module.module_order}. {module.module_title}
                        </span>
                      </div>
                      <div class="flex items-center">
                        {/* <i class="far fa-file-alt text-gray-500 mr-2"></i> */}
                        <span class="text-sm text-gray-600">
                          {module.duration}m
                        </span>
                      </div>
                    </li>
                  ))
                )}
              </ul>
              <div className="p-3">
                <div className="rounded-md shadow-lg p-6 bg-gradient-to-br from-teal-700 to-indigo-900 text-white">
                  <div className="flex flex-col items-start">
                    <h2 className="text-xl font-semibold mb-2 flex items-center">
                      🏆 <span className="ml-2">Dynamic AI Certificates</span>
                    </h2>
                    <p className="mb-4">
                      Celebrate course completion with unique, AI-generated
                      certificates from Stable Diffusion model.
                    </p>
                    <a className="font-semibold flex items-center" href="#">
                      Get certified
                      <i className="fas fa-arrow-right ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseLearningPage;

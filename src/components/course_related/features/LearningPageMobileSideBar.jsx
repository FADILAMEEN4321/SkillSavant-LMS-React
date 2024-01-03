import React from "react";

const LearningPageMobileSideBar = ({
  courseData,
  loading,
  currentModule,
  setCurrentModule,
}) => {
  return (
    <>
      <div className="drawer md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-sm mb-2 drawer-button">
            modules
          </label>
        </div>
        <div className="drawer-side z-40">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="w-80 min-h-full bg-base-200 text-base-content">
            <div class="px-6 py-4 bg-gray-900">
              <h2 class="text-xl font-bold text-white">Course Modules</h2>
            </div>
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

            <div className="p-4 mt-2">
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default LearningPageMobileSideBar;

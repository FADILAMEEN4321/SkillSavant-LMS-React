import React from 'react'

const OverviewSection = ({courseData,currentModule, loading}) => {
  return (
    <>
     <div className="p-2">
            {loading ? (
                <p>loading...</p>
            ):(
                <div className="mb-4">
                <h4 className="text-2xl font-bold">
                  {courseData.title}
                </h4>
                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                {courseData.subtitle}
                </p>
              </div>
            )}

            {loading ? (
                <p>loading...</p>
            ):(
                <div>
                <div className="mb-3 bg-lime-200 p-3 rounded-md">
                  <h4 className="text-2xl font-bold">{currentModule.module_order}: {currentModule.module_title}</h4>
                  <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                    {currentModule.description}
                  </p>
                </div>
              </div>
            )}
          </div>


          {loading ? (
            <p>loading...</p>
          ):(
            <div className="container mb-4 p-3">
            <h2 className="text-2xl font-bold mb-4">About the Course</h2>
            <p className="text-gray-700">
              {courseData.description}
            </p>
            
          </div>
          )}

          <hr />

          {loading ? (
            <p>loading...</p>
          ):(
            <div className="container mb-4 p-3">
            <h2 className="text-2xl font-bold mb-4">Meet your Instructor</h2>
            <div className="flex items-center">
              <img
                src={courseData.instructor_photo}
                alt="Instructor"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{courseData.instructor_first_name} {courseData.instructor_last_name}</h3>
                <p className="text-gray-700">{courseData.instructor_skill}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-2">
             {courseData.instructor_bio}
            </p>
          </div>
          )}




    </>
  )
}

export default OverviewSection
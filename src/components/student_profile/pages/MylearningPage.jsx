import React from 'react'
import {MyLearningTabs,Tab} from '../features/MyLearningTabs'

const MylearningPage = () => {
  return (
    <>
    {/* Top section with heading */}
    <div className="bg-gray-900 text-white p-10">
    
    
    <>
  <h1 className="mb-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
      My Learn
    </span>{""}
    ing.
  </h1>
  <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
    Here at Flowbite we focus on markets where technology, innovation, and
    capital can unlock long-term value and drive economic growth.
  </p>
</>


    </div>
    {/* Tabs for Labs and Favorite Courses */}
    <div className="p-1 flex items-center">

    <MyLearningTabs>
        <Tab label="💡 Experiment Lab">

          <div className="container min-h-screen">
          <div className="pl-2 pr-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <>
  {/* Course Card */}
  <div className="max-w-xs mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4">
    {/* Course Image */}
    <img
      className="object-cover w-full h-48"
      src="self-learning.jpg"
      alt="Course Image"
    />
    
    {/* Course Details */}
    <div className="p-4">
      {/* Course Title */}
      <h2 className="text-xl font-bold mb-2">Course Title</h2>
      
      {/* Hours */}
      <div className="flex items-center text-[14px] text-gray-500 mb-1">
        
        <span>🕤 10 h 20 m</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        {/* Instructor Name */}
      <p className="text-[14px] text-gray-500">👨‍⚖️ John Doe</p>
      {/* <p className="mb-1">❤️</p> */}
      </div>

      <div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  <div
    className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
    style={{ width: "45%" }}
  >
    {" "}
    45%
  </div>
</div>
      </div>
      
    </div>

   
  </div>
</>



  {/* Repeat the above course card div for each course */}
</div>

          </div>




        </Tab>

        <Tab label="🔥 Favourite courses">
        
        <div className="container min-h-screen"></div>

        </Tab>
     
      </MyLearningTabs>

      
    </div>
    
  </>
  
  )
}

export default MylearningPage
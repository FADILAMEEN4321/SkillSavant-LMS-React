import React from 'react'
import {MyLearningTabs,Tab} from '../features/MyLearningTabs'
import EnrolledCourseTab from '../features/EnrolledCourseTab'

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
  Empower Your Future: Unleash Your Potential Through Lifelong Learning
  </p>
</>


    </div>
    {/* Tabs for Labs and Favorite Courses */}
    <div className="p-1 flex items-center">

    <MyLearningTabs>
        <Tab label="💡 Experiment Lab">

          <EnrolledCourseTab/>

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
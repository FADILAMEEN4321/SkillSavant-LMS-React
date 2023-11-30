import React from 'react'
import InstructorSideBar from '../features/InstructorSideBar'
import InstructorMobileSideBar from '../features/InstructorMobileSideBar'

const InstructorChat = () => {
  return (
    <>
    {/* Main Content Container */}
    <div className="mx-auto flex">
      {/* Sidebar for Dash Board */}

      <InstructorSideBar/>

      {/* Scrollable Area for Course Listings */}
      <div className="h-screen w-full bg-gray-200 p-4 overflow-y-auto">
        {/* for mobile */}
        <InstructorMobileSideBar/>


        
      </div>
    </div>
  </>
  )
}

export default InstructorChat
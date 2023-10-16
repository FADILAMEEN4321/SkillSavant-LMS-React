import React from 'react'

const InstructorSideBar = () => {
  return (
    <div className="bg-gray-900 shadow-xl col-span-1 min-h-[50px] md:h-full hidden md:flex">
    {/* Sidebar content goes here */}
    <ul className="flex flex-col w-full p-2 m-2">

    <a
href="#"
className="block max-w-sm p-3 mb-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  Teach Board
</h5>
<p className="font-normal mb-1 text-gray-700 dark:text-gray-400">
  Lets teach the world.
</p>
</a>


  <li>
    <a
      href="#profile"
      className="block w-full px-4 py-2 rounded-md my-1 text-white bg-blue-600 hover:bg-blue-700"
    >
      Profile
    </a>
  </li>
  <li>
    <a
      href="#courses"
      className="block w-full px-4 py-2 rounded-md my-1 text-white bg-blue-600 hover:bg-blue-700"
    >
      Courses
    </a>
  </li>
  <li>
    <a
      href="#settings"
      className="block w-full px-4 py-2 rounded-md my-1 text-white bg-blue-600 hover:bg-blue-700"
    >
      Settings
    </a>
  </li>
  {/* Add more tabs as needed */}
</ul>
    
  </div>
  )
}

export default InstructorSideBar
import React,{useEffect, useState} from 'react';
import AdminSideBar from './../features/AdminSideBar';
import AdminMobileSideBar from './../features/AdminMobileSideBar';
import {Link} from 'react-router-dom';
import axios from './../../../services/axios';

const PendingCoursesPage = () => {

  const [pendingCourses, setPendingCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios
    .get('admin/pending-courses/')
    .then((response)=>{
      console.log(response.data)
      setPendingCourses(response.data)
    })
    .catch((error)=>{
      console.error('error while fetching pending courses:',error)
    })
    .finally(()=>{
      setLoading(false)
    })

  },[])



  return (
    <>
      {/* Main Content Container */}
      <div className="mx-auto flex">
        {/* Sidebar for Dash Board */}

        <AdminSideBar/>

        {/* Scrollable Area for Course Listings */}
        <div className="h-screen w-full bg-gray-200 p-4 overflow-y-auto">
          {/* for mobile */}
          <AdminMobileSideBar/>

          <div className="relative container bg-blue-700 min-h-[200px] rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-60 bg-black rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              {/* Your text content here */}
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  Lets's Teach the
                </span>{" "}
                World.
              </h1>
              <p className="text-lg font-normal text-gray-200 lg:text-xl dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation.
              </p>
              {/* <p className="mt-2">All Students of Skill savant</p> */}
            </div>
            <div className="bg-cover bg-[url('/self-learning.jpg')] min-h-[200px] rounded-md" />
          </div>

          <div className="container">



          </div>

          <div className="container">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Course Cards */}

              
               {loading ? (
                <p>loading...</p>
               ):(
                pendingCourses.map((course)=>(
                  <Link to={`/admin/pending-courses/${course.id}`} >
                <div key={course.id} className="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
               <img
                 src={course.cover_image}
                 alt="Image Alt Text"
                 className="w-full rounded-t-md object-top"
               />
               <div className="p-4">
                 {/* <p>20m</p> */}
                 <h3 className="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                 {course.title}
                 </h3>
                 {/* <p className="text-gray-600 mb-4">Description of Course 1.</p> */}
                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                 {course.subtitle}
                 </p>

                 
                   <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Pending</span>
                
               </div>
             </div>
              </Link>
                ))
               )}
              

           


              {/* Repeat the above course card div for each course */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PendingCoursesPage
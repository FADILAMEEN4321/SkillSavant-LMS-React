import React,{useEffect, useState} from "react";
import {axiosAuthorized} from './../../../services/axios';
import {Link} from 'react-router-dom';

const EnrolledCourseTab = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axiosAuthorized
        .get('enrolled-courses/')
        .then((response)=>{
            console.log(response.data)
            setEnrolledCourses(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })

    },[])


  return (
    <>
      <div className="container min-h-screen">
        <div className="pl-2 pr-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <>
            {loading ? (
                <p>loading...</p>
            ):(
                enrolledCourses.map((enrolled)=>(
                    <>
                {/* Course Card */}
            <Link to={`/enrolled-course/${enrolled.course.id}`}>
            <div key={enrolled.id} className="max-w-xs mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4">
            {/* Course Image */}
            <img
              className="object-cover w-full h-48"
              src={enrolled.course.cover_image}
              alt="Course Image"
            />

            {/* Course Details */}
            <div className="p-4">
              {/* Course Title */}
              <h2 className="text-xl font-bold mb-2">{enrolled.course.title}</h2>

              {/* Hours */}
              <div className="flex items-center text-[14px] text-gray-500 mb-1">
                <span>🕤 10 h 20 m</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                {/* Instructor Name */}
                <p className="text-[14px] text-gray-500">👨‍⚖️ {enrolled.course.instructor_first_name} {enrolled.course.instructor_last_name}</p>
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
            </Link>
                </>
                ))
            )}
          </>


        </div>
      </div>
    </>
  );
};

export default EnrolledCourseTab;

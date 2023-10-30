import React,{useEffect,useState} from "react";
import axios from './../../../services/axios';
import { Link } from "react-router-dom";

const CourseCard = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
  
    
    useEffect(()=>{
      axios
      .get('all-courses/')
      .then((response)=>{
        console.log(response.data);
        setCourses(response.data)
      })
      .catch((error)=>{
        console.error('error while fetching courses:',error);
      })
      .finally(()=>{
        setLoading(false)
      })
    },[])




  return (
    <>
    {loading ? (
        <p>loading...</p>
    ):(
        courses.map((course)=>(
            <Link to={`/courses/${course.id}`}>
            <div key={course.id} class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
        <img
          src={course.cover_image}
          alt="Image Alt Text"
          class="w-full rounded-t-md object-top"
        />
        <div class="p-4">
          <p>20m</p>
          <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
            {course.title}
          </h3>
          <p class="text-gray-600 mb-4">{course.subtitle}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {course.instructor_first_name} {course.instructor_last_name}
          </p>
        </div>
      </div>
            </Link>
        ))
    )}
    </>
  );
};

export default CourseCard;

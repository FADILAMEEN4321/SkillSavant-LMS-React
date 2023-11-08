import React,{useState, useEffect, useContext} from "react";
import InstructorSideBar from "../features/InstructorSideBar";
import InstructorMobileSideBar from "../features/InstructorMobileSideBar";
import {axiosInstance, axiosAuthorized} from '../../../services/axios'
import AuthContext from "../../../context/AuthContext";
import CourseCreationModal from "../features/CourseCreationModal";
import {Link} from 'react-router-dom';


const InstructorCoursePage = (props) => {

  let {userProfile,authTokens} = useContext(AuthContext)

  const [courses,setCourses] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      if (userProfile) {
        const instructorId = userProfile.id;
        console.log('from instructor course page--->', instructorId);
        // Set loading to true when starting the API call
        setLoading(true);
        try {
        
          const response = await axiosAuthorized.get(`instructor-courses/${instructorId}/`);
          console.log(response.data);
          setCourses(response.data);
        } catch (error) {
          console.error('Error fetching courses', error);
        } finally {
          // Set loading to false when the API call is complete
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [userProfile]);



  return (
    <>
      {/* Main Content Container */}
      <div className="mx-auto flex">
        {/* Sidebar for Dash Board */}

        <InstructorSideBar />

        {/* Scrollable Area for Course Listings */}
        <div className="h-screen w-full bg-gray-200 p-4 overflow-y-auto">
          {/* for mobile */}
          <InstructorMobileSideBar />

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

            <CourseCreationModal setCourses={setCourses}/>


          </div>

          <div className="container">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Course Cards */}

              {loading? (
              <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div role="status">
                  <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                  <span className="sr-only">Loading...</span>
              </div>
          </div>
              ):(
              courses.map((course)=>(
               <Link to={`/instructor/mycourses/${course.id}`} >
                 <div className="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
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

                  {course.is_approved?(
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Approved</span>
                  ):(
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Pending</span>
                  )}
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
  );
};

export default InstructorCoursePage;

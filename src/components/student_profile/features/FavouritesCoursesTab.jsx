import React,{useState, useEffect, useContext} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { fetchFavCourses, removeFavourites } from './../../../api/studentAPI';
import AuthContext from './../.././../context/AuthContext';

const FavouritesCoursesTab = () => {
    const navigate = useNavigate()
    const [favCourses, setFavCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const {userProfile, user} = useContext(AuthContext)

    const studentId = userProfile.id;


    const handleRemoveFavourites = async (courseId) =>{
       if(!user){
        navigate('/login')
       }else{
        try{
            const response = await removeFavourites(studentId,courseId)
            if(response.status === 204){
            setFavCourses((prevFavCourses)=>
            prevFavCourses.filter((fav) => fav.course_details.id !== courseId)
            );                  
            }
        }catch(error){
            console.log(error)
        }
       }
    }


    const fetchFavCourseData = async () =>{
        try{
            const response = await fetchFavCourses(studentId)
            setFavCourses(response.data)            
            setLoading(false)
        }catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{

        fetchFavCourseData();

    },[])

  return (
    <>
    <div className="container min-h-screen">
      <div className="pl-2 pr-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <>
          {loading ? (
            <>
            <div className="w-[300px] mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4 animate-pulse">
    <div className="h-48 bg-gray-400"></div>
    <div className="p-4">
      <div className="h-4 w-full bg-gray-400 rounded-md mb-2"></div>
      
      <div className="h-4 w-3/4 rounded-md bg-gray-400 mb-2"></div>

      <div className="flex justify-start items-center">
      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400 mt-7 mb-2"></div>
      <div className="h-2 w-[59px] rounded-md bg-gray-400 mt-7 mb-2"></div>
      </div>

      <div className="flex justify-start items-center">
      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400  mb-2"></div>
      <div className="h-2 w-[59px] rounded-md bg-gray-400  mb-2"></div>
      </div>
     
     
    </div>
  </div>

  <div className="w-[300px] mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4 animate-pulse">
    <div className="h-48 bg-gray-400"></div>
    <div className="p-4">
      <div className="h-4 w-full bg-gray-400 rounded-md mb-2"></div>
      
      <div className="h-4 w-3/4 rounded-md bg-gray-400 mb-2"></div>

      <div className="flex justify-start items-center">
      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400 mt-7 mb-2"></div>
      <div className="h-2 w-[59px] rounded-md bg-gray-400 mt-7 mb-2"></div>
      </div>

      <div className="flex justify-start items-center">
      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400  mb-2"></div>
      <div className="h-2 w-[59px] rounded-md bg-gray-400  mb-2"></div>
      </div>
     
     
    </div>
  </div>

  <div className="w-[300px] mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4 animate-pulse">
    <div className="h-48 bg-gray-400"></div>
    <div className="p-4">
      <div className="h-4 w-full bg-gray-400 rounded-md mb-2"></div>
      
      <div className="h-4 w-3/4 rounded-md bg-gray-400 mb-2"></div>

      <div className="flex justify-start items-center">
      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400 mt-7 mb-2"></div>
      <div className="h-2 w-[59px] rounded-md bg-gray-400 mt-7 mb-2"></div>
      </div>

      <div className="flex justify-start items-center">
      <div className="h-3 w-[12px] mr-2 rounded-full bg-gray-400  mb-2"></div>
      <div className="h-2 w-[59px] rounded-md bg-gray-400  mb-2"></div>
      </div>
     
     
    </div>
  </div>
  
            </>
          ) : (
            favCourses.map((favCourse) => (
              <>
                {/* Course Card */}

                
                  <div
                    key={favCourse.id}
                    className="w-[300px] hover:drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4"
                  >
                    {/* h-[338px] */}
                    {/* Course Image */}
                    {/* <Link to={`/courses/${favCourse.course_details.id}`}> */}
                    <img
                      className="object-cover w-full h-48"
                      src={favCourse.course_details?.cover_image}
                      alt="Course Image"
                    />
                    {/* </Link> */}
                   

                    {/* Course Details */}
                    <div className="p-4">
                      {/* Course Title */}
                      {/* <h2 className="text-xl font-bold mb-2">{course.title}</h2> */}
                    <Link to={`/courses/${favCourse.course_details?.id}`}>

                    <h2
                        className="line-clamp-2 uppercase hover:line-clamp-none text-md font-extrabold mb-2 overflow-hidden"
                        // title={course.title} // Adding a tooltip using the title attribute
                      >
                        {favCourse.course_details?.title}
                      </h2>

                    </Link>
                     
                     
                      {/* Hours */}
                    <Link to={`/courses/${favCourse.course_details?.id}`}>
                    <div className="flex items-center mb-1">
                        <span className="text-[17px]">🕤</span>
                        <span className="text-[14px] text-gray-500">
                          {" "}
                          10 h 20 m
                        </span>
                      </div>
                    </Link>

                      
                      <div className="flex items-center justify-between mb-2">
                        {/* Instructor Name */}
                        <Link to={`/courses/${favCourse.course_details?.id}`}>
                        <p className="text-[14px] text-gray-500">
                          <span className="text-[17px]">👨‍⚖️</span>
                          {favCourse.course_details?.instructor_first_name}{" "}
                          {favCourse.course_details?.instructor_last_name}
                        </p>
                        </Link>
                        

                        {favCourse.course_details?.is_favourite ? (
                        <svg
                        
                          onClick={()=>handleRemoveFavourites(favCourse.course_details?.id)}
                          className="fill-red-500 cursor-pointer"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                        //   onClick={() => handleAddToFavourites(course.id)}
                          className="cursor-pointer"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}


                      </div>

                      

                     
                    </div>
                  </div>
              
              </>
            ))
          )}
        </>
      </div>
    </div>
  </>
  )
}

export default FavouritesCoursesTab
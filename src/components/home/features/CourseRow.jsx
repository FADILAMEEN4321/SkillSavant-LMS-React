import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToFavourites,removeFavourites} from "./../../../api/studentAPI";
import AuthContext from "./../../../context/AuthContext";

const CourseRow = ({
  title,
  subtitle,
  courses,
  loading,
  setPopularCourses,
  setLatestCourses,
}) => {
  const { userProfile, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const studentId = userProfile?.id;

  const handleAddToFavourites = async (courseId) => {
    if (!user) {
      navigate("/login");
    } else {
      try {
        const response = await addToFavourites(studentId, courseId);
        console.log(response);
        if (response.status === 201) {
          setPopularCourses((prevPopularCourses) =>
            prevPopularCourses.map((course) =>
              course.id === courseId
                ? { ...course, is_favourite: true }
                : course
            )
          );
          setLatestCourses((prevLatestCourses) =>
            prevLatestCourses.map((course) =>
              course.id === courseId
                ? { ...course, is_favourite: true }
                : course
            )
          );
        }
      } catch (error) {
        console.error("Error adding to favorites:", error);
      }
    }
  };


  const handleRemoveFavourites = async (courseId) =>{
    if(!user){
      navigate('/login')
    }else{
      try{
        const response = await removeFavourites(studentId,courseId);

        if(response.status === 204){
          setPopularCourses((prevPopularCourses) =>
            prevPopularCourses.map((course) =>
              course.id === courseId
                ? { ...course, is_favourite: false }
                : course
            )
          );
          setLatestCourses((prevLatestCourses) =>
            prevLatestCourses.map((course) =>
              course.id === courseId
                ? { ...course, is_favourite: false }
                : course
            )
          );
          
        }

      }catch(error){
        console.log("Error removing to favorites:", error)
  
      }

    }
    
  }




  return (
    <section class="bg-gray-100 py-9">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-1">{title}</h2>
        <p className="mb-6">{subtitle}</p>
        <div class="overflow-x-hidden">
          <div class="flex space-x-4 overflow-x-auto">
            {/* Course card */}

            {loading ? (
              <p>loading..</p>
            ) : (
              courses.map((course) => (
                <div
                  key={course.id}
                  className="flex-shrink-0 w-[300px] hover:drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 bg-white shadow-xl rounded-lg overflow-hidden m-4"
                >
                  {/* h-[338px] */}
                  {/* Course Image */}
                  <Link to={`/courses/${course.id}`}>
                    <img
                      className="object-cover w-full h-48"
                      src={course.cover_image}
                      alt="Course Image"
                    />
                  </Link>

                  {/* Course Details */}
                  <div className="p-4">
                    {/* Course Title */}

                    <Link to={`/courses/${course.id}`}>
                      <h2
                        className="line-clamp-2 uppercase hover:line-clamp-none text-md font-extrabold mb-2 overflow-hidden"
                        // title={course.title} // Adding a tooltip using the title attribute
                      >
                        {course.title}
                      </h2>
                    </Link>
                    {/* Hours */}
                    <Link to={`/courses/${course.id}`}>
                      <div className="flex items-center  mb-1">
                        <span className="text-[17px]">🕤</span>
                        <span className="text-[14px] text-gray-500">
                          {" "}
                          10 h 20 m
                        </span>
                      </div>
                    </Link>
                    <div className="flex items-center justify-between mb-2">
                      {/* Instructor Name */}
                      <Link to={`/courses/${course.id}`}>
                        <p className="text-[14px] text-gray-500">
                          <span className="text-[17px]">👨‍⚖️</span>
                          {course.instructor_first_name}{" "}
                          {course.instructor_last_name}
                        </p>
                      </Link>

                      {course.is_favourite ? (
                        <svg
                        
                          onClick={()=>handleRemoveFavourites(course.id)}
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
                          onClick={() => handleAddToFavourites(course.id)}
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
              ))
            )}

            {/* <!-- Add more Latest Courses as needed --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseRow;

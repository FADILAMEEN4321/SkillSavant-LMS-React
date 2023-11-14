import React, { useEffect, useState } from "react";
import { axiosInstance } from "./../../../services/axios";
import { Link } from "react-router-dom";

const CourseCard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("all-courses/")
      .then((response) => {
        console.log(response.data);
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("error while fetching courses:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        courses.map((course) => (
          <>
            <Link to={`/courses/${course.id}`}>
              <div
                key={course.id}
                className="w-[300px] hover:drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 mx-auto bg-white shadow-xl rounded-lg overflow-hidden m-4"
              >
                {/* h-[338px] */}
                {/* Course Image */}
                <img
                  className="object-cover w-full h-48"
                  src={course.cover_image}
                  alt="Course Image"
                />

                {/* Course Details */}
                <div className="p-4">
                  {/* Course Title */}
                  {/* <h2 className="text-xl font-bold mb-2">{course.title}</h2> */}

                  <h2
                    className="line-clamp-2 uppercase hover:line-clamp-none text-md font-extrabold mb-2 overflow-hidden"
                    // title={course.title} // Adding a tooltip using the title attribute
                  >
                    {course.title}
                  </h2>
                  {/* Hours */}
                  <div className="flex items-center  mb-1">
                    <span className="text-[17px]">🕤</span>
                    <span className="text-[14px] text-gray-500">
                      {" "}
                      10 h 20 m
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    {/* Instructor Name */}
                    <p className="text-[14px] text-gray-500">
                      <span className="text-[17px]">👨‍⚖️</span>
                      {course.instructor_first_name}{" "}
                      {course.instructor_last_name}
                    </p>
                    {course.is_favourite ? (
                      <svg
                      className="fill-red-500"
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
                    ):(
                      <svg
                      className=""
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
            </Link>
          </>
        ))
      )}
    </>
  );
};

export default CourseCard;

import React, { useEffect, useState, useContext } from "react";
import ReactPlayer from "react-player";
import {axiosInstance} from "./../../../services/axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { BiLock } from "react-icons/bi";
import AuthContext from "../../../context/AuthContext";
import { toast } from 'react-toastify';

const CoursedetailPage = () => {
  const { courseId } = useParams();
  const { user, userProfile } = useContext(AuthContext);

  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`single-course-details/${courseId}/`)
      .then((response) => {
        console.log(response.data);
        setCourseDetails(response.data);
      })
      .catch((error) => {
        console.log("error while fetching course data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onClickVerifyCourse = async (courseId) => {
    if (!user) {
      navigate("/login");
    } else {
      try {
        const response = await axiosInstance.get(
          `verify-course/${courseId}/${userProfile.id}`
        );
        console.log(response.data, response.status);
        if (response.status === 200) {
          navigate(`/courses/enroll/${courseId}`);
        
        }
      } catch (error) {
        if (error.response.data) {
          console.log(error.response.data);
          toast.warning(error.response.data.message)
        }
      }
    }
  };

  return (
    <>
        <section className="bg-gray-1000 dark:bg-gray-900 p-2">

          {
            loading? (
              <p>loading...</p>
            ):(
              <>
              <div className="container mx-auto my-8 bg-gray-900 ">
  <div className="flex flex-wrap items-start">
    {/* Left Part - Video Player */}
    <div className="md:w-full lg:w-1/3">
      {/* Replace 'your_video_url' with the actual video URL */}
      <ReactPlayer url={
                courseDetails.modules[0]
                  ? courseDetails.modules[0].video_url
                  : ""
              } width="100%" height="100%"
              loop={true}
            playing={true}
            controls={true} />
    </div>

    {/* Right Part - Course Details */}
    <div className="w-full md:1/2 lg:w-2/3 p-4">
    <h2 className="mb-2 line-clamp-3 uppercase hover:line-clamp-none text-2xl font-extrabold tracking-wide leading-none text-white md:text-2xl lg:text-2xl dark:text-white">
                {courseDetails.title}
              </h2>
      {/* Replace the placeholder data with actual course details */}
      <p className="mb-1 text-lg font-normal capitalize text-gray-500 lg:text-xl dark:text-gray-400">
                {courseDetails.subtitle}
              </p>
      {/* <p>Level: Beginner</p>
      <p>Instructor: John Doe</p>
      <p>Created At: January 1, 2023</p> */}

      <div className="grid grid-cols-1 md:grid-cols-2">

      <div className="w-full mb-2">
        <div className="flex flex-row items-center">
        <div className="h-[33px] w-[33px] bg-red-300 rounded-md m-2 text-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 18L7 16" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12 18L12 15" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M17 18L17 13" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6 10.75C5.58579 10.75 5.25 11.0858 5.25 11.5C5.25 11.9142 5.58579 12.25 6 12.25V10.75ZM16.6512 6.8721C16.8567 6.51247 16.7317 6.05433 16.3721 5.84882C16.0125 5.64331 15.5543 5.76826 15.3488 6.1279L16.6512 6.8721ZM13.8779 5.55478C13.4692 5.62219 13.1926 6.00815 13.26 6.41684C13.3274 6.82553 13.7134 7.10219 14.1221 7.03478L13.8779 5.55478ZM15.2676 6.08568L15.1456 5.34568L15.2676 6.08568ZM16.6819 6.88953L15.9609 7.09609L16.6819 6.88953ZM16.279 8.20656C16.3931 8.60475 16.8084 8.83507 17.2066 8.72099C17.6048 8.60692 17.8351 8.19164 17.721 7.79344L16.279 8.20656ZM16.2741 6.07154L16.6448 5.41951L16.6447 5.41951L16.2741 6.07154ZM6 12.25C10.6742 12.25 14.4764 10.678 16.6512 6.8721L15.3488 6.1279C13.5236 9.32203 10.3258 10.75 6 10.75V12.25ZM14.1221 7.03478L15.3897 6.82568L15.1456 5.34568L13.8779 5.55478L14.1221 7.03478ZM15.9609 7.09609L16.279 8.20656L17.721 7.79344L17.4029 6.68297L15.9609 7.09609ZM15.3897 6.82568C15.6742 6.77874 15.8228 6.75549 15.9273 6.75072C16.0142 6.74675 15.9719 6.76242 15.9035 6.72357L16.6447 5.41951C16.3693 5.26294 16.0902 5.24172 15.8589 5.25228C15.6451 5.26203 15.394 5.30471 15.1456 5.34568L15.3897 6.82568ZM17.4029 6.68297C17.3421 6.47103 17.2761 6.2338 17.1891 6.04105C17.0889 5.81911 16.9304 5.58186 16.6448 5.41951L15.9035 6.72357C15.8732 6.70635 15.8458 6.68248 15.8263 6.6588C15.8103 6.63917 15.8103 6.63246 15.8219 6.65818C15.8342 6.68528 15.8513 6.73033 15.8759 6.80783C15.9004 6.88523 15.9266 6.97645 15.9609 7.09609L17.4029 6.68297Z" fill="#141B34"/>
<path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#141B34" stroke-width="1.5"/>
</svg>

        </div>
        <p className="text-gray-200">{courseDetails.level}</p>
        </div>

        <div className="flex flex-row items-center">
        <div className="h-[33px] w-[33px] bg-green-300 rounded-md m-2 text-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9427 16.8354C20.2864 12.8866 18.2432 9.94613 16.467 8.219C15.9501 7.71642 15.6917 7.46513 15.1208 7.23257C14.5499 7 14.0592 7 13.0778 7H10.9222C9.94081 7 9.4501 7 8.87922 7.23257C8.30834 7.46513 8.04991 7.71642 7.53304 8.219C5.75682 9.94613 3.71361 12.8866 3.05727 16.8354C2.56893 19.7734 5.27927 22 8.30832 22H15.6917C18.7207 22 21.4311 19.7734 20.9427 16.8354Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12.663 11C12.663 10.5858 12.3273 10.25 11.913 10.25C11.4988 10.25 11.163 10.5858 11.163 11L12.663 11ZM11.163 18C11.163 18.4142 11.4988 18.75 11.913 18.75C12.3273 18.75 12.663 18.4142 12.663 18H11.163ZM12.9857 12.9539C13.2363 13.2836 13.7068 13.3477 14.0366 13.0971C14.3664 12.8464 14.4305 12.3759 14.1798 12.0461L12.9857 12.9539ZM10.7472 16.1022C10.4385 15.826 9.9644 15.8523 9.68816 16.1609C9.41193 16.4696 9.43821 16.9437 9.74687 17.22L10.7472 16.1022ZM11.913 13.6493C11.2657 13.6493 10.971 13.5437 10.8538 13.4647C10.8 13.4285 10.75 13.3874 10.75 13.1895H9.25C9.25 13.771 9.46084 14.3349 10.0158 14.7088C10.5072 15.0398 11.169 15.1493 11.913 15.1493V13.6493ZM10.75 13.1895C10.75 13.094 10.8008 12.946 11.0056 12.7949C11.2101 12.6439 11.5285 12.5279 11.913 12.5279V11.0279C11.241 11.0279 10.6029 11.2279 10.115 11.5879C9.62743 11.9476 9.25 12.5054 9.25 13.1895H10.75ZM13.25 15.8109C13.25 16.0328 13.1711 16.1505 13.0026 16.2518C12.7885 16.3804 12.4212 16.4724 11.913 16.4724V17.9724C12.5575 17.9724 13.2337 17.8628 13.7749 17.5376C14.3617 17.1852 14.75 16.5971 14.75 15.8109H13.25ZM11.913 15.1493C12.5664 15.1493 12.9071 15.2499 13.0685 15.3552C13.1626 15.4165 13.25 15.5063 13.25 15.8109H14.75C14.75 15.1072 14.4896 14.4912 13.888 14.0988C13.3538 13.7504 12.651 13.6493 11.913 13.6493V15.1493ZM12.663 11.7779L12.663 11L11.163 11L11.163 11.7779L12.663 11.7779ZM11.163 17.2224V18H12.663V17.2224H11.163ZM11.913 12.5279C12.4479 12.5279 12.8287 12.7474 12.9857 12.9539L14.1798 12.0461C13.6817 11.3908 12.8126 11.0279 11.913 11.0279V12.5279ZM11.913 16.4724C11.3796 16.4724 10.9651 16.2972 10.7472 16.1022L9.74687 17.22C10.2909 17.7068 11.0853 17.9724 11.913 17.9724V16.4724Z" fill="#141B34"/>
<path d="M7.25662 4.44287C7.05031 4.14258 6.75128 3.73499 7.36899 3.64205C8.00392 3.54651 8.66321 3.98114 9.30855 3.97221C9.89237 3.96413 10.1898 3.70519 10.5089 3.33548C10.8449 2.94617 11.3652 2 12 2C12.6348 2 13.1551 2.94617 13.4911 3.33548C13.8102 3.70519 14.1076 3.96413 14.6914 3.97221C15.3368 3.98114 15.9961 3.54651 16.631 3.64205C17.2487 3.73499 16.9497 4.14258 16.7434 4.44287L15.8105 5.80064C15.4115 6.38146 15.212 6.67187 14.7944 6.83594C14.3769 7 13.8373 7 12.7582 7H11.2418C10.1627 7 9.6231 7 9.20556 6.83594C8.78802 6.67187 8.5885 6.38146 8.18945 5.80064L7.25662 4.44287Z" stroke="#141B34" stroke-width="1.5"/>
</svg>

        </div>
        <p className="text-gray-200">{courseDetails.price}</p>
        </div>

        <div className="flex flex-row items-center">
        <div className="h-[33px] w-[33px] bg-yellow-300 rounded-md m-2 text-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 15C10.7083 21 4.29167 15 2 21" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 15H17.0013C19.3583 15 20.5368 15 21.2691 14.2678C22.0013 13.5355 22.0013 12.357 22.0013 10V8C22.0013 5.64298 22.0013 4.46447 21.2691 3.73223C20.5368 3 19.3583 3 17.0013 3H13.0013C10.6443 3 9.46576 3 8.73353 3.73223C8.11312 4.35264 8.01838 5.29344 8.00391 7" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="7.5" cy="12.5" r="2.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7H18M18 11H15" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
        <p className="text-gray-200">level: {courseDetails.instructor_first_name} {courseDetails.instructor_last_name}</p>
        </div>

      </div>
        <div className="w-full h-full flex items-end">
          <div>
          <button type="button" 
          onClick={() => onClickVerifyCourse(courseDetails.id)}
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Enroll Now</button>

          </div>
        </div>

      </div>


      {/* Add more details as needed */}
    </div>
  </div>
</div>
              </>
            )
          }
      



</section>






  

      {/* Module Listing */}
      <div className="container mx-auto mt-4">
        {/* Module listing content here */}
        <div className="container p-3 flex items-center justify-between">
          <h3 className="text-xl text-gray-900 font-bold">
            Lessons in this course
          </h3>
          <h3 className="text-xl text-gray-900 font-semibold">
            {/* 6 Lessons (2h:00m) */}
          </h3>
        </div>
        <hr />
        <div className="container mx-auto mt-4 mb-4">
          {loading ? (
            <p>loading...</p>
          ) : (
            courseDetails.modules.map((module) => (
              <div
                key={module.id}
                className="container p-3 flex items-center justify-between hover:border hover:border-gray-900 rounded-md"
              >
                {/* <h3 className="text-lg font-bold text-gray-900">
                  <span><BiLock size={25} color="black" /></span>
                  <span>{module.module_order}. {module.module_title}</span>
                </h3> */}
                <div className="flex items-center">
                  🔒
                  <h3 className="text-lg font-bold text-gray-900 ml-2">
                    {module.module_order}. {module.module_title}
                  </h3>
                </div>


                <h3 className="text-lg text-gray-900 font-semibold">
                  {module.duration}m
                </h3>
              </div>
            ))
          )}
        </div>
        <hr />
      </div>

      <>
        {/* About the Course */}
        <div className="container mx-auto mt-4">
          <div className="container mb-4 p-3">
            <h2 className="text-2xl font-bold mb-4">About the Course</h2>
            {loading ? (
              <p>loading...</p>
            ) : (
              <p className="text-gray-700">{courseDetails.description}</p>
            )}
            <p className="text-gray-700 mt-2">
              Nullam varius, ipsum sit amet tristique vehicula, massa libero
              feugiat justo, at bibendum ipsum sem sed justo. Nulla facilisi.
              Proin tristique vehicula orci, eu bibendum sapien posuere non.
            </p>
          </div>
          <hr />
        </div>
        {/* About the Instructor */}
        <div className="container mx-auto mt-4">
          <div className="container mb-4 p-3">
            <h2 className="text-2xl font-bold mb-4">Meet your Instructor</h2>
            <div className="flex items-center">
              {loading ? (
                <p>loading...</p>
              ) : (
                <img
                  src={courseDetails.instructor_photo}
                  alt="Instructor"
                  className="w-16 h-16 rounded-full mr-4"
                />
              )}
              <div>
                {loading ? (
                  <p>loading...</p>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold">
                      {courseDetails.instructor_first_name}{" "}
                      {courseDetails.instructor_last_name}
                    </h3>
                    <p className="text-gray-700">
                      {courseDetails.instructor_skill}
                    </p>
                  </>
                )}
              </div>
            </div>
            {loading ? (
              <p>loading...</p>
            ) : (
              <p className="text-gray-700 mt-2">
                {courseDetails.instructor_bio}
              </p>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default CoursedetailPage;

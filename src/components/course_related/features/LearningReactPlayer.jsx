import React, { useContext } from "react";
import ReactPlayer from "react-player";
import AuthContext from "../../../context/AuthContext";
import { ModuleCompletionMarking } from "./../../../api/studentAPI";

const LearningReactPlayer = ({ currentModule, setCourseData, loading }) => {
  const { userProfile } = useContext(AuthContext);

  const studentId = userProfile?.id;

  const handleVideoEnd = async (moduleId) => {
    console.log("video has ended......");
    try {
      const response = await ModuleCompletionMarking(studentId, moduleId);
      console.log(response);

      setCourseData((prevCourseData) => ({
        ...prevCourseData,
        modules: prevCourseData.modules.map((module) =>
          module.id === moduleId ? { ...module, is_completed: true } : module
        ),
      }));
    } catch (error) {
      console.log("Error removing to favorites:", error);
    }
  };

  return (
    // <div classname="h-85 bg-gray-300 rounded-md">
    //   <ReactPlayer
    //     // url={courseData.modules[0].video_url}
    //     url={loading ? (''):(currentModule ? (currentModule.video_url):(''))}  // Replace with your video source
    //     width="100%"
    //     height="100%"
    //     controls
    //     onEnded={()=>handleVideoEnd(currentModule.id)}
    //   />
    // </div>

    <>
      {loading ? (
        // Skeleton Loader

        <div className="min-h-[350px] bg-gray-300 rounded-md animate-pulse"></div>
      ) : (
        // Actual content when not loading
        <div className="h-85 bg-gray-300 rounded-md">
          <ReactPlayer
            url={currentModule ? currentModule.video_url : ""}
            width="100%"
            height="100%"
            controls
            onEnded={() => handleVideoEnd(currentModule.id)}
          />
        </div>
      )}
    </>
  );
};

export default LearningReactPlayer;

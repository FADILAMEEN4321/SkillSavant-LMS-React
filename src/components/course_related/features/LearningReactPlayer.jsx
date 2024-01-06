import React, { useContext } from "react";
import ReactPlayer from "react-player";
import AuthContext from "../../../context/AuthContext";
import { ModuleCompletionMarking } from "./../../../api/studentAPI";

const LearningReactPlayer = ({ currentModule, setCourseData, loading }) => {
  const { userProfile } = useContext(AuthContext);

  const studentId = userProfile?.id;

  const handleVideoEnd = async (moduleId) => {
    try {
      const response = await ModuleCompletionMarking(studentId, moduleId);

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
    <>
      {loading ? (
        // Skeleton Loader
        <div className="min-h-[350px] bg-gray-300 rounded-md animate-pulse"></div>
      ) : (
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

import React from "react";
import ReactPlayer from "react-player";

const LearningReactPlayer = ({currentModule, loading}) => {

  return (
    <div classname="h-85 bg-gray-300 rounded-md">
      <ReactPlayer
        // url={courseData.modules[0].video_url}
        url={loading ? (''):(currentModule ? (currentModule.video_url):(''))}  // Replace with your video source
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default LearningReactPlayer;

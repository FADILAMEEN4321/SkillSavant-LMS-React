import React, { useState } from "react";
import { axiosInstance } from "./../../services/axios";

const SkillGPT = () => {
  const [learningPath, setLearnigPath] = useState();
  const [courseName, setCourseName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLearnigPath("");
    setLoading(true);
    try {
      const response = await axiosInstance.post("learning-path-creation/", {
        course: courseName,
      });

      // Handle the response as needed
      console.log(response.data);
      const content = response.data.find((item) => item[0] === "content");
      if (content) {
        setLearnigPath(content[1]);
      }
      setLoading(false);

      // Update state or perform other actions based on the response
      //   setLearningPath(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors as needed
    }
  };

  const clearModal = () => {
    setLearnigPath("");
    setCourseName("");
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="skillGPT" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={clearModal}
            >
              ✕
            </button>
          </form>

          <div className="container">
            <h3 className="text-2xl font-semibold mb-1">
              Create a Learning Path uisng AI.
            </h3>{" "}
            <hr className="mb-2" />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="course_name"
                id="course_name"
                className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type the name of a course..."
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn btn-primary w-full mb-2 mt-2 text-black"
                disabled={loading}
              >
                {loading ? "creating..." : "Create Learning Path"}
              </button>
            </form>
            <div className="bg-gray-200 p-4 rounded-md">
              {/* {learningPath} */}
              <div dangerouslySetInnerHTML={{ __html: learningPath }} />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SkillGPT;

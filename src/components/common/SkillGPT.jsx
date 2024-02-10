import React, { useState } from "react";
import { websocket_Url } from "./../../services/constants";
import "./skillgpt.css";

const SkillGPT = () => {
  const [courseName, setCourseName] = useState("");
  const [streamedContent, setStreamedContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setCourseName(e.target.value);
  };

  /**
   * Opens a WebSocket connection to the learning path creation endpoint.
   * Sends the course name to the server and streams back the generated content.
   * Displays a loading indicator and closes the connection when finished.
   */
  const handleGeneration = () => {
    setStreamedContent("");

    const socket = new WebSocket(`${websocket_Url}/ws/learning-path-creation`);

    socket.onopen = () => {
      setLoading(true);
      console.log("WebSocket connected");
      socket.send(JSON.stringify({ course_name: courseName }));
    };

    socket.onmessage = (message) => {
      const content = JSON.parse(message.data);
      if (content.content === "<:END:>") {
        socket.close();
        setLoading(false);
      } else {
        setStreamedContent((prevContent) => prevContent + content.content);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };
  };

  const clearModal = () => {
    setCourseName("");
    setStreamedContent("");
  };

  return (
    <>
      <dialog id="skillGPT" className="modal">
        <div className="modal-box custom-scrollbar">
          <form method="dialog">
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
            <form>
              <input
                type="text"
                name="course_name"
                id="course_name"
                className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type the name of a course..."
                value={courseName}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className={`btn btn-md btn-outline w-full mb-2 mt-2 text-black`}
                onClick={handleGeneration}
              >
                {loading ? (
                  <>
                    <div class="typing-indicator">
                      <div class="typing-circle"></div>
                      <div class="typing-circle"></div>
                      <div class="typing-circle"></div>
                      <div class="typing-shadow"></div>
                      <div class="typing-shadow"></div>
                      <div class="typing-shadow"></div>
                    </div>
                  </>
                ) : (
                  "Create Learning Path"
                )}
              </button>
            </form>
            {streamedContent && (
              <div className="bg-gray-300 p-4 rounded-md">
                <p>{streamedContent}</p>
                <div />
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SkillGPT;

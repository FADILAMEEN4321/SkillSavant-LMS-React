import React, { useContext, useState, useEffect } from "react";
import CourseRow from "../features/CourseRow";
import AuthContext from "../../../context/AuthContext";
import { Fade, Slide } from "react-awesome-reveal";
import { useTransition, animated } from "@react-spring/web";
import data from "../features/data";
import { axiosInstance } from "./../../../services/axios";
import ScrollToTop from "../../common/ScrollToTop";
import ScrollIndicator from "../../common/ScrollIndicator";
import AiLearningPathIcon from "./../../common/AiLearningPathIcon";
import SkillGPT from "../../common/SkillGPT";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [rows, set] = useState(data);
  const [popularCourses, setPopularCourses] = useState([]);
  const [latestCourses, setLatestCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    //URLs for API endpoints
    const popularCoursesUrl = "popular-courses/";
    const latestCoursesUrl = "latest-courses/";

    // Array of promises for the API requests
    const requests = [
      axiosInstance.get(popularCoursesUrl),
      axiosInstance.get(latestCoursesUrl),
    ];

    // Use Promise.all to wait for both requests to complete
    Promise.all(requests)
      .then((responses) => {
        const popularCoursesData = responses[0].data;
        const latestCoursesData = responses[1].data;

        setPopularCourses(popularCoursesData);
        setLatestCourses(latestCoursesData);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* // Hero-section */}

      <section
        // bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]
        className="bg-gradient-to-r from-pink-900 to-blue-900 bg-green-900  dark:bg-gray-900 bg-center bg-cover bg-no-repeat"
        // style={{ backgroundImage: "url(/hero-image.jpg)" }}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex mt-5 mb-5 flex-col justify-center">
         
            <Fade delay={1e3} cascade damping={1e-1}>
              <p className="mb-2 text-lg font-normal z-10 text-gray-200 lg:text-xl dark:text-gray-400 ">
              Skill Savant🧠📚 Where Passion Meets Progress🚀 
              </p>
            </Fade>
            <Slide>
              <h1 className="mb-4 text-3xl z-10 font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl dark:text-white">
            
              Immerse Yourself in Skills.
              </h1>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
              <p className="mb-6 text-lg font-normal z-10 text-gray-200 lg:text-xl dark:text-gray-400 ">
              Empower Your Learning Journey with SkillGPT. 
              <br></br>
              Instantly Craft Your Personalized Learning Pathway
              </p>
            </Fade>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Fade delay={1e3} cascade damping={1e-1}>
                <span
                  className="relative inline-block overflow-hidden rounded-full p-[1px]"
                  onClick={() =>
                    document.getElementById("skillGPT").showModal()
                  }
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-7 py-1 text-base font-medium text-white backdrop-blur-3xl">
                    Generate a Roadmap ✨
                  </div>
                </span>
              </Fade>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section>
        <div class="scrolling-wrapper">
          <div class="scrolling-content">
            <div class="card rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
              <i class="fas fa-brain fa-2x"></i>
              <h3 class="text-lg font-semibold mt-2">Critical Thinking</h3>
              <p class="text-sm">
                Enhance problem-solving and decision-making skills.
              </p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-green-500 to-teal-400 p-4 text-white">
              <i class="fas fa-music fa-2x"></i>
              <h3 class="text-lg font-semibold mt-2">Music</h3>
              <p class="text-sm">Learn instruments, theory, and composition.</p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 p-4 text-white">
              <i class="fas fa-code fa-2x"></i>
              <h3 class="text-lg font-semibold mt-2">Coding</h3>
              <p class="text-sm">
                Master programming languages and development techniques.
              </p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-red-500 to-pink-500 p-4 text-white">
              <i class="fas fa-fist-raised fa-2x"></i>
              <h3 class="text-lg font-semibold mt-2">Martial Arts</h3>
              <p class="text-sm">Develop self-defense skills and discipline.</p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-purple-500 to-indigo-400 p-4 text-white">
              <i class="fas fa-comments fa-2x"></i>
              <h3 class="text-lg font-semibold mt-2">Public Speaking</h3>
              <p class="text-sm">Improve oratory skills and confidence.</p>
            </div>

            <div class="card rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
              <i class="fas fa-brain fa-2x"></i>
              <h3 class="text-lg font-semibold mt-2">Critical Thinking</h3>
              <p class="text-sm">
                Enhance problem-solving and decision-making skills.
              </p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-green-500 to-teal-400 p-4 text-white">
              <i class="fas fa-music fa-2x"></i>
              <h3 class="text-lg font-semibold mt-2">Music</h3>
              <p class="text-sm">Learn instruments, theory, and composition.</p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 p-4 text-white">
              <i class="fas fa-code fa-2x"></i>
              <h3 class="text-lg font-semibold mt-2">Coding</h3>
              <p class="text-sm">
                Master programming languages and development techniques.
              </p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-red-500 to-pink-500 p-4 text-white">
              <i class="fas fa-fist-raised fa-2x"></i>
              <h3 class="text-lg font-semibold mt-2">Martial Arts</h3>
              <p class="text-sm">Develop self-defense skills and discipline.</p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-purple-500 to-indigo-400 p-4 text-white">
              <i class="fas fa-comments fa-2x"></i>
              <h3 class="text-lg font-semibold mt-2">Public Speaking</h3>
              <p class="text-sm">Improve oratory skills and confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <CourseRow
        title="Popular Courses"
        subtitle="Checkout all the popular courses."
        courses={popularCourses}
        loading={loading}
        setPopularCourses={setPopularCourses}
        setLatestCourses={setLatestCourses}
      />

      <CourseRow
        title="Latest Releases"
        subtitle="Checkout all the Latest Releases."
        courses={latestCourses}
        loading={loading}
        setLatestCourses={setLatestCourses}
        setPopularCourses={setPopularCourses}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First card */}
          <div className="rounded-md shadow-lg p-6 bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-600 text-white">
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                🧠{" "}
                <span className="ml-2">
                  Personalized Learning Paths with AI
                </span>
              </h2>
              <p className="mb-4">
                Specify your desired course, and receive a personalized learning
                path meticulously curated just for you by an advanced GPT-4 AI
                model.
              </p>
              <a className="font-semibold flex items-center" href="#">
                Create your path
                <i className="fas fa-arrow-right ml-2" />
              </a>
            </div>
          </div>
          {/* Second card */}
          <div className="rounded-md shadow-lg p-6 bg-gradient-to-br from-gray-600 to-gray-900 text-white">
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                🎧 <span className="ml-2">AI-Powered Video Transcripts</span>
              </h2>
              <p className="mb-4">
                Access accurate, AI-generated transcripts for all video courses
                with OpenAI's Whisper model.
              </p>
              <a className="font-semibold flex items-center" href="#">
                Feature Coming Soon...
                {/* <i className="fas fa-arrow-right ml-2" /> */}
              </a>
            </div>
          </div>
          {/* Third card */}
          <div className="rounded-md shadow-lg p-6 bg-gradient-to-br from-teal-700 to-indigo-900 text-white">
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                🏆 <span className="ml-2">Dynamic AI Certificates</span>
              </h2>
              <p className="mb-4">
                Celebrate course completion with unique, AI-generated
                certificates from Stable Diffusion model.
              </p>
              <a className="font-semibold flex items-center" href="#">
                Feature Coming Soon...
                {/* <i className="fas fa-arrow-right ml-2" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>

      <SkillGPT />
      <ScrollToTop />
    </>
  );
};

export default Home;

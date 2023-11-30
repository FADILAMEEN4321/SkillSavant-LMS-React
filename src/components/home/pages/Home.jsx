import React, { useContext, useState, useEffect } from "react";
import CourseRow from "../features/CourseRow";
import AuthContext from "../../../context/AuthContext";
import { Fade, Slide } from "react-awesome-reveal";
import { useTransition, animated } from "@react-spring/web";
import data from "../features/data";
import {axiosInstance} from './../../../services/axios';
import ScrollToTop from "../../common/ScrollToTop";
import ScrollIndicator from "../../common/ScrollIndicator";
// import Typed from 'react-typed';
import AiLearningPathIcon from './../../common/AiLearningPathIcon';
import SkillGPT from "../../common/SkillGPT";
import './home.css'




const Home = () => {
  const [rows, set] = useState(data);
  const [popularCourses, setPopularCourses] = useState([]);
  const [latestCourses, setLatestCourses] = useState([]);
  const [loading, setLoading] = useState(true);




  useEffect(()=>{
    //URLs for API endpoints
    const popularCoursesUrl = 'popular-courses/';
    const latestCoursesUrl = 'latest-courses/';

    // Array of promises for the API requests
    const requests = [
      axiosInstance.get(popularCoursesUrl),
      axiosInstance.get(latestCoursesUrl),
    ]

    // Use Promise.all to wait for both requests to complete
    Promise.all(requests)
    .then((responses)=>{
      const popularCoursesData = responses[0].data;
      const latestCoursesData = responses[1].data;

      setPopularCourses(popularCoursesData);
      setLatestCourses(latestCoursesData);
    })
    .catch((error)=>{
      console.log('Error fetching data:', error)
    })
    .finally(()=>{
      setLoading(false)
    })

  },[])








  return (
    <>
      {/* // Hero-section */}
      
      <section
      // bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]
        className="bg-gradient-to-r from-pink-900 to-blue-900 bg-green-900 dark:bg-gray-900 bg-center bg-no-repeat bg-cover"
        // style={{ backgroundImage: "url(/hero-section.jpg)" }}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <Slide>
              <h1 className="mb-4 text-4xl z-10 font-extrabold tracking-tight leading-none text-blue-200 md:text-5xl lg:text-6xl dark:text-white">
                Unlock Your Potential with Skill Savant <span className="animate-bounce">🚀</span>

              </h1>
              
             
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
              <p className="mb-8 text-lg font-normal z-10 text-gray-300 lg:text-xl dark:text-gray-400">
                Explore a world of knowledge and enhance your skills from the
                comfort of your home. Start your journey to success today.
              </p>
            </Fade>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex z-10 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex z-10 justify-center items-center py-3 px-5 text-base font-medium text-center rounded-md border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:text-black text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div>
          </div>
        </div>
      </section>



     <section>
     <div class="scrolling-wrapper">
        <div class="scrolling-content">
            <div class="card rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
                <i class="fas fa-brain fa-2x"></i>
                <h3 class="text-lg font-semibold mt-2">Critical Thinking</h3>
                <p class="text-sm">Enhance problem-solving and decision-making skills.</p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-green-500 to-teal-400 p-4 text-white">
                <i class="fas fa-music fa-2x"></i>
                <h3 class="text-lg font-semibold mt-2">Music</h3>
                <p class="text-sm">Learn instruments, theory, and composition.</p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 p-4 text-white">
                <i class="fas fa-code fa-2x"></i>
                <h3 class="text-lg font-semibold mt-2">Coding</h3>
                <p class="text-sm">Master programming languages and development techniques.</p>
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
                <p class="text-sm">Enhance problem-solving and decision-making skills.</p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-green-500 to-teal-400 p-4 text-white">
                <i class="fas fa-music fa-2x"></i>
                <h3 class="text-lg font-semibold mt-2">Music</h3>
                <p class="text-sm">Learn instruments, theory, and composition.</p>
            </div>
            <div class="card rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 p-4 text-white">
                <i class="fas fa-code fa-2x"></i>
                <h3 class="text-lg font-semibold mt-2">Coding</h3>
                <p class="text-sm">Master programming languages and development techniques.</p>
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
          🧠 <span className="ml-2">Personalized Learning Paths with AI</span>
        </h2>
        <p className="mb-4">
        Specify your desired course, and receive a personalized learning path meticulously curated just for you by an advanced GPT-4 AI model.
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
          Access accurate, AI-generated transcripts for all video courses with
          OpenAI's Whisper model.
        </p>
        <a className="font-semibold flex items-center" href="#">
          View transcripts
          <i className="fas fa-arrow-right ml-2" />
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
          Celebrate course completion with unique, AI-generated certificates
          from Stable Diffusion model.
        </p>
        <a className="font-semibold flex items-center" href="#">
          Get certified
          <i className="fas fa-arrow-right ml-2" />
        </a>
      </div>
    </div>
  </div>
</div>




      <SkillGPT/>
      <ScrollToTop/>
    </>
  );
};

export default Home;

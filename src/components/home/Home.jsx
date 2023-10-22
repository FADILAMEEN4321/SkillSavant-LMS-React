import React, { useContext, useState, useEffect } from "react";
import CourseRow from "./CourseRow";
import AuthContext from "../../context/AuthContext";
import { Fade, Slide } from "react-awesome-reveal";
import { useTransition, animated } from "@react-spring/web";
import shuffle from "lodash.shuffle";
import data from "./data";
import styles from "./styles.module.css";

const Home = () => {
  const [rows, set] = useState(data);
  useEffect(() => {
    const t = setInterval(() => set(shuffle), 2000);
    return () => clearInterval(t);
  }, []);

  let height = 0;
  const transitions = useTransition(
    rows.map((data) => ({ ...data, y: (height += data.height) - data.height })),
    {
      key: (item) => item.name,
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
    }
  );

  return (
    <>
      {/* // Hero-section */}
      <section
        className="bg-white dark:bg-gray-900 bg-center bg-no-repeat bg-cover bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]"
        style={{ backgroundImage: "url(/hero-section.jpg)" }}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <Slide>
              <h1 className="mb-4 text-4xl z-10 font-extrabold tracking-tight leading-none text-White md:text-5xl lg:text-6xl dark:text-white">
                Unlock Your Potential with Skill Savant
              </h1>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
              <p className="mb-8 text-lg font-normal z-10 text-gray-400 lg:text-xl dark:text-gray-400">
                Explore a world of knowledge and enhance your skills from the
                comfort of your home. Start your journey to success today.
              </p>
            </Fade>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex z-10 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-md bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
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
                className="inline-flex z-10 justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-md border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div>
            {/* <iframe
        className="mx-auto w-full lg:max-w-xl h-64 rounded-md sm:h-96 shadow-xl"
        src="https://www.youtube.com/embed/KaLxCiilHns"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      />  */}
          </div>
        </div>
      </section>

      {/* Skills icons */}
      <section class="bg-white py-8">
        <div class="container mx-auto px-4">
          <div class="overflow-x-hidden">
            {/* <div class="flex items-center justify-center space-x-11 overflow-x-auto "> */}

            {/* <div className={styles.list} style={{ height }}>
      {transitions((style, item, t, index) => (
        <animated.div className={styles.card} style={{ zIndex: data.length - index, ...style }}>
          <div className={styles.cell}>
            <div className={styles.details} style={{ backgroundImage: item.css }} />
          </div>
        </animated.div>
      ))}
    </div> */}

            {/* Older code for icons just for to know*/}

            {/* <div class="flex items-center justify-center space-x-11 overflow-x-auto ">
          <div class="flex-shrink-0 w-48 h-28 bg-yellow-300 rounded-md shadow-md p-4">
            
          </div>
  
          
          <div class="flex-shrink-0 w-48 h-28 bg-red-500 rounded-md shadow-md p-4">
            
          </div>
  
          <div class="flex-shrink-0 w-48 h-28 bg-green-400 rounded-md shadow-md p-4">
            
          </div>


          <div class="flex-shrink-0 w-48 h-28 bg-purple-500 rounded-md shadow-md p-4">
            
          </div>


         
        </div> */}

            <div className="flex items-center justify-between space-x-11 overflow-x-auto">
              {transitions((style, item, t, index) => (
                <animated.div className="mx-3.5">
                  <div
                    className="flex-shrink-0 w-48 h-28 rounded-md shadow-md p-4"
                    style={{ backgroundImage: item.css }}
                  >
                    {/* <div className="flex-shrink-0 w-48 h-28 rounded-md shadow-md p-4"  />  */}
                  </div>
                </animated.div>
              ))}
            </div>
      
      
            {/* </div> */}
          </div>
        </div>
        {/* <div class="bg-gradient-to-b from-blue-100 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div> */}
      </section>

      <CourseRow
        title="Popular Courses"
        subtitle="Checkout all the popular courses."
      />
      <CourseRow
        title="Latest Releases"
        subtitle="Checkout all the Latest Releases."
      />

      <div class="w-full bg-slate-500 h-72 relative">
        {/* <!-- Background Image --> */}
        <div class="h-full bg-cover bg-center bg-[url('/self-learning.jpg')]"></div>

        {/* <!-- Overlay Text and Button --> */}
        <div class="absolute inset-0 bg-opacity-60 bg-black"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 class="text-3xl font-semibold mb-2">Overlay Text</h2>
          <p class="mb-4">Additional information or description here.</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Button
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import CourseSideBar from "./CourseSideBar";

const CourseListingPage = () => {
  return (
    <>
      {/* Main Content Container */}
      {/* <div class="container mx-auto flex mt-6 "> */}
      <div className="container mx-auto flex mt-5 ">
        {/* Sidebar for Categories */}
        <div className="h-screen w-1/4 bg-gray-white rounded-md mt-5 hidden md:flex">
          {/* Add category links and styling here */}
          {/* Tab Buttons */}
          <div className="p-4 w-full">
            <div className="grid gap-2">
              {/* Category Tabs */}
              <a
                href="#"
                className="px-4 py-2  bg-gray-900 font-bold text-white rounded-md"
              >
                All courses
              </a>
              <hr />
              <a
                href="#"
                className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-300"
              >
                Web development
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-300"
              >
                History
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-300"
              >
                Hoobies
              </a>
              {/* Add more category tabs as needed */}
            </div>
          </div>
        </div>
        {/* Scrollable Area for Course Listings */}
        {/* <div className="w-3/4 w-full md:w-3/4 px-4 mt-5 "> */}
        <div className="w-full md:w-3/4 px-4 mt-5 mb-5">
          {/* for mobile view */}

          <CourseSideBar />

          <div className="relative container min-h-[200px] rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-60 bg-black rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              {/* Your text content here */}
              <h2 className="text-2xl font-bold text-green-500">
                Overlay Text
              </h2>
              <p className="mt-2">Description or additional information</p>
            </div>
            <div className="bg-cover bg-[url('/self-learning.jpg')] min-h-[200px] rounded-md" />
          </div>
          {/* <div class="container bg-blue-700 min-h-[50px] mb-4">

  </div> */}
          <div className="container bg-white min-h-[8px] mb-4 p-2 overflow-x-auto">
            <div className="flex space-x-2">
              {/* Tag 1 */}
              {/* Tag 2 */}
              <span className="px-3 py-4 h-6 hover:cursor-pointer bg-white font-bold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 hover:cursor-pointer bg-white font-bold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 hover:cursor-pointer bg-white font-bold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 hover:cursor-pointer bg-white font-bold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 hover:cursor-pointer bg-white font-bold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 hover:cursor-pointer bg-white font-bold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 hover:cursor-pointer bg-white font-bold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 hover:cursor-pointer bg-white font-semibold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 hover:cursor-pointer bg-white font-semibold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 bg-white font-semibold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 bg-white font-semibold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 bg-white font-semibold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
              <span className="px-3 py-4 h-6 bg-white font-semibold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
                Creativewriting
              </span>
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
          <div className="container min-h-[30px] p-4 flex items-center justify-between">
            {/* First Select Field */}
            <select className="px-3 py-2 bg-white text-gray-900 border border-gray-900 rounded-md">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              {/* Add more options as needed */}
            </select>
            {/* Second Select Field */}
            <select className="px-3 py-2 bg-white text-gray-900 border border-gray-900 rounded-md">
              <option value="optionA">Option A</option>
              <option value="optionB">Option B</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="container pl-4 mb-4">
            <h4 className="text-3xl font-bold text-gray-900">All courses</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Course Cards */}

            <div class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-md object-top"
              />
              <div class="p-4">
                <p>20m</p>
                <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                  The Ultimate Guide to Chess: learn chess
                </h3>
                {/* <p class="text-gray-600 mb-4">Description of Course 1.</p> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fadil ameen
                </p>
              </div>
            </div>

            <div class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-md object-top"
              />
              <div class="p-4">
                <p>20m</p>
                <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                  The Ultimate Guide to Chess: learn chess
                </h3>
                {/* <p class="text-gray-600 mb-4">Description of Course 1.</p> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fadil ameen
                </p>
              </div>
            </div>

            <div class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-md object-top"
              />
              <div class="p-4">
                <p>20m</p>
                <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                  The Ultimate Guide to Chess: learn chess
                </h3>
                {/* <p class="text-gray-600 mb-4">Description of Course 1.</p> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fadil ameen
                </p>
              </div>
            </div>

            <div class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-md object-top"
              />
              <div class="p-4">
                <p>20m</p>
                <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                  The Ultimate Guide to Chess: learn chess
                </h3>
                {/* <p class="text-gray-600 mb-4">Description of Course 1.</p> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fadil ameen
                </p>
              </div>
            </div>

            <div class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-md object-top"
              />
              <div class="p-4">
                <p>20m</p>
                <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                  The Ultimate Guide to Chess: learn chess
                </h3>
                {/* <p class="text-gray-600 mb-4">Description of Course 1.</p> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fadil ameen
                </p>
              </div>
            </div>

            <div class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-md object-top"
              />
              <div class="p-4">
                <p>20m</p>
                <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                  The Ultimate Guide to Chess: learn chess
                </h3>
                {/* <p class="text-gray-600 mb-4">Description of Course 1.</p> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fadil ameen
                </p>
              </div>
            </div>

            <div class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-md object-top"
              />
              <div class="p-4">
                <p>20m</p>
                <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                  The Ultimate Guide to Chess: learn chess
                </h3>
                {/* <p class="text-gray-600 mb-4">Description of Course 1.</p> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fadil ameen
                </p>
              </div>
            </div>

            <div class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-md object-top"
              />
              <div class="p-4">
                <p>20m</p>
                <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                  The Ultimate Guide to Chess: learn chess
                </h3>
                {/* <p class="text-gray-600 mb-4">Description of Course 1.</p> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fadil ameen
                </p>
              </div>
            </div>

            <div class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-md object-top"
              />
              <div class="p-4">
                <p>20m</p>
                <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                  The Ultimate Guide to Chess: learn chess
                </h3>
                {/* <p class="text-gray-600 mb-4">Description of Course 1.</p> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fadil ameen
                </p>
              </div>
            </div>

            <div class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-md object-top"
              />
              <div class="p-4">
                <p>20m</p>
                <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                  The Ultimate Guide to Chess: learn chess
                </h3>
                {/* <p class="text-gray-600 mb-4">Description of Course 1.</p> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fadil ameen
                </p>
              </div>
            </div>

            <div class="flex-shrink-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-md object-top"
              />
              <div class="p-4">
                <p>20m</p>
                <h3 class="text-xl font-bold mb-2 dark:text-white tracking-tight text-gray-900 ">
                  The Ultimate Guide to Chess: learn chess
                </h3>
                {/* <p class="text-gray-600 mb-4">Description of Course 1.</p> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fadil ameen
                </p>
              </div>
            </div>

            {/* Repeat the above course card div for each course */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default CourseListingPage;

import React from "react";

const CourseRow = ({ title, subtitle }) => {
  return (
    <section class="bg-gray-100 py-9">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-1">{title}</h2>
        <p className="mb-6">{subtitle}</p>
        <div class="overflow-x-hidden">
          <div class="flex space-x-4 overflow-x-auto">
            {/* Course card */}
            <div class="flex-shrink-0 py-2.5 w-64 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-lg"
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

            <div class="flex-shrink-0 w-64 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-lg"
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

            <div class="flex-shrink-0 w-64 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-lg"
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

            <div class="flex-shrink-0 w-64 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-lg"
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

            <div class="flex-shrink-0 w-64 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-md hover:bg-blue-100">
              <img
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                alt="Image Alt Text"
                class="w-full rounded-t-lg"
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

            {/* <!-- Add more Latest Courses as needed --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseRow;

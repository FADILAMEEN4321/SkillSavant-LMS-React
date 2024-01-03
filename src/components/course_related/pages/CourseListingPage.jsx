import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CourseSideBar from "../features/CourseSideBar";
import CourseCard from "../features/CourseCard";
import { axiosInstance } from "./../../../services/axios";

const CourseListingPage = () => {
  const [categoryAndSubcategory, setCategoryAndSubcategory] = useState([]);
  const [courses, setCourses] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sideBarLoading, setSideBarLoading] = useState(true);

  const [selectedCategroy, setSelectedCategroy] = useState("");
  const [selectedLevel, setsSelectedLevel] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategroy(category);
    setSelectedTag("");
    setLoading(true);
    axiosInstance
      .get(`all-courses/?category=${category}&level=${selectedLevel}`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("error while fetching courses:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    setSelectedCategroy("");
    setsSelectedLevel("");
    setLoading(true);
    axiosInstance
      .get(`all-courses/?tag=${tag}`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("error while fetching courses:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLevelChange = (level) => {
    setsSelectedLevel(level);
    setSelectedTag("");
    setLoading(true);
    axiosInstance
      .get(`all-courses/?level=${level}&category=${selectedCategroy}`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("error while fetching courses:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAllCourse = () => {
    setSelectedTag("");
    setSelectedCategroy("");
    setLoading(true);
    axiosInstance
      .get(`all-courses/?level=${selectedLevel}`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("error while fetching courses:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    //URLs for API endpoints
    const categoriesSubCategoriesUrl = "categories-subcategories/";
    const tagsUrl = "tags/";
    const coursesUrl = "all-courses/";

    // Array of promises for the API requests
    const requests = [
      axiosInstance.get(categoriesSubCategoriesUrl),
      axiosInstance.get(tagsUrl),
      axiosInstance.get(coursesUrl),
    ];

    // Using Promise.all to wait for both requests to complete
    Promise.all(requests)
      .then((responses) => {
        const categoriesSubCategoriesData = responses[0].data;
        const tagsData = responses[1].data;
        const courseData = responses[2].data;

        setCategoryAndSubcategory(categoriesSubCategoriesData);
        setTags(tagsData);
        setCourses(courseData);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
        setSideBarLoading(false);
      });
  }, []);

  return (
    <>
      {/* Main Content Container */}
      {/* <div class="container mx-auto flex mt-6 "> */}
      <div className="container mx-auto flex mt-5 ">
        {/* Sidebar for Categories */}
        {/* <div className="h-screen bg-gray-white rounded-md mt-5 hidden md:flex"> */}
        <div className="h-screen w-1/4 bg-gray-white rounded-md mt-5 hidden md:flex">
          {/* Add category links and styling here */}
          {/* Tab Buttons */}
          <div className="p-4 w-full">
            <div className="grid gap-2 mb-3">
              <a
                onClick={handleAllCourse}
                className="px-4 py-2 hover:cursor-pointer btn hover:text-white hover:bg-slate-950 bg-gray-900 font-bold text-white rounded-md"
              >
                All courses
              </a>
            </div>

            <div className="grid gap-2">
              {/* Category Tabs */}

              {sideBarLoading ? (
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-300 rounded-md w-2/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-2/4 mt-2 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
                  <hr className="mt-4 mb-4"></hr>
                  <div className="h-4 bg-gray-300 rounded-md w-2/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-2/4 mt-2 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
                  <hr className="mt-4 mb-4"></hr>
                  <div className="h-4 bg-gray-300 rounded-md w-2/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
                  {/* Add more skeleton elements as needed */}
                </div>
              ) : (
                categoryAndSubcategory.map((category) => (
                  <>
                    <h3 key={category.id} className="font-bold">
                      {category.name}
                    </h3>

                    <hr />
                    {category.subcategories.map((subcategory) => (
                      <p
                        onClick={() => handleCategoryChange(subcategory.id)}
                        key={subcategory.id}
                        className={`${
                          subcategory.id == selectedCategroy
                            ? "bg-gray-300 text-gray-950"
                            : "hover:bg-gray-300 bg-white text-gray-700"
                        }
                        px-4 py-2  hover:cursor-pointer
                          rounded-md `}
                      >
                        {subcategory.name}
                      </p>
                    ))}
                  </>
                ))
              )}

              {/* Add more category tabs as needed */}
            </div>
          </div>
        </div>
        {/* Scrollable Area for Course Listings */}
        {/* <div className="w-3/4 w-full md:w-3/4 px-4 mt-5 "> */}

        <div className="w-full md:w-3/4 px-4 mt-5 mb-5">
          {/* for mobile view */}

          <CourseSideBar
            handleAllCourse={handleAllCourse}
            handleCategoryChange={handleCategoryChange}
            categoryAndSubcategory={categoryAndSubcategory}
            sideBarLoading={sideBarLoading}
            selectedCategroy={selectedCategroy}
          />

          <div className="relative container min-h-[200px]  rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-60 bg-black rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              {/* Your text content here */}
              <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-4xl dark:text-white">
                SkillsAvant - Unlock Your{" "}
                <span class="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-blue-600">
                  Potential, Master New Skills
                </span>
              </h1>
              <p class="text-sm font-normal text-gray-200 lg:text-lg">
                Explore a World of Knowledge. Elevate Your Skills with Courses
                Tailored for Success on SkillsAvant.{" "}
              </p>
            </div>
            <div className="bg-cover bg-[url('/self-learning.jpg')] min-h-[200px] rounded-md" />
          </div>
          {/* <div class="container bg-blue-700 min-h-[50px] mb-4">

  </div> */}
          <div className="container bg-white min-h-[8px] mb-4 p-2 overflow-x-auto">
            <div className="flex space-x-2">
              {/* Tag 1 */}
              {/* Tag 2 */}

              {sideBarLoading ? (
                <div className="animate-pulse flex h-9">
                  <div className="h-8 bg-gray-200 mr-2 rounded-md w-[90px] mb-2"></div>
                  <div className="h-8 bg-gray-200 mr-2 rounded-md w-[90px] mb-2"></div>
                  <div className="h-8 bg-gray-200 mr-2 rounded-md w-[90px] mb-2"></div>
                  <div className="h-8 bg-gray-200 mr-2 rounded-md w-[90px] mb-2"></div>
                  <div className="h-8 bg-gray-200 mr-2 rounded-md w-[90px] mb-2"></div>
                  <div className="h-8 bg-gray-200 mr-2 rounded-md w-[90px] mb-2"></div>
                  <div className="h-8 bg-gray-200 mr-2 rounded-md w-[90px] mb-2"></div>
                  <div className="h-8 bg-gray-200 mr-2 rounded-md w-[90px] mb-2"></div>

                  {/* Add more skeleton elements as needed */}
                </div>
              ) : (
                tags.map((tag) => (
                  <span
                    onClick={() => handleTagChange(tag.id)}
                    className={`${
                      tag.id === selectedTag
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-900 hover:bg-gray-900 hover:text-white"
                    }
                  px-3 py-4 h-6 hover:cursor-pointer  font-bold
                    border border-gray-900 rounded-md 
                   flex items-center justify-center transition-all 
                     whitespace-no-wrap`}
                  >
                    {tag.name}
                  </span>
                ))
              )}
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
          <div className="container min-h-[30px] p-4 flex items-center justify-between">
            {/* First Select Field */}
            <select
              onChange={(e) => handleLevelChange(e.target.value)}
              className="px-3 py-2 bg-white text-gray-900 border border-gray-900 rounded-md"
            >
              <option value="">All level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              {/* Add more options as needed */}
            </select>

            {/* Second Select Field */}
            {/* <select className="px-3 py-2 bg-white text-gray-900 border border-gray-900 rounded-md">
              <option value="optionA">Option A</option>
              <option value="optionB">Option B</option>
            
            </select> */}
          </div>
          <div className="container pl-4 mb-4">
            <h4 className="text-3xl font-bold text-gray-900">All courses</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Course Cards */}

            <CourseCard courses={courses} loading={loading} />

            {/* Repeat the above course card div for each course */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default CourseListingPage;

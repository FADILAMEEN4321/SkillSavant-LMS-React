import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import CourseSideBar from "../features/CourseSideBar";
import CourseCard from "../features/CourseCard";
import axios from './../../../services/axios';

const CourseListingPage = () => {

  const [categoryAndSubcategory, setCategoryAndSubcategory] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(()=>{
    //URLs for API endpoints
    const categoriesSubCategoriesUrl = 'categories-subcategories/';
    const tagsUrl = 'tags/';

    // Array of promises for the API requests
    const requests = [
      axios.get(categoriesSubCategoriesUrl),
      axios.get(tagsUrl),
    ]

    // Use Promise.all to wait for both requests to complete
    Promise.all(requests)
    .then((responses)=>{
      const categoriesSubCategoriesData = responses[0].data;
      const tagsData = responses[1].data;

      setCategoryAndSubcategory(categoriesSubCategoriesData);
      setTags(tagsData);
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
      {/* Main Content Container */}
      {/* <div class="container mx-auto flex mt-6 "> */}
      <div className="container mx-auto flex mt-5 ">
        {/* Sidebar for Categories */}
        <div className="h-screen w-1/4 bg-gray-white rounded-md mt-5 hidden md:flex">
          {/* Add category links and styling here */}
          {/* Tab Buttons */}
          <div className="p-4 w-full">
            <div className="grid gap-2 mb-3">
            <a
                href="#"
                className="px-4 py-2  bg-gray-900 font-bold text-white rounded-md"
              >
                All courses
              </a>
            </div>

            
            <div className="grid gap-2">
              {/* Category Tabs */}

              {loading ? (
                <p>loading...</p>
              ):(
              categoryAndSubcategory.map((category)=>(
                <>
                <h3 key={category.id} className="font-bold">{category.name}</h3>
              
              <hr />
              {category.subcategories.map((subcategory)=>(
                <a key={subcategory.id}
                href="#"
                className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-300"
              >
                {subcategory.name}
              </a>
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

              {loading ? (<p>loading...</p>):(
                tags.map((tag)=>(
                  <span className="px-3 py-4 h-6 hover:cursor-pointer bg-white font-bold text-gray-900 border border-gray-900 rounded-md flex items-center justify-center transition-all hover:bg-gray-900 hover:text-white whitespace-no-wrap">
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

            <CourseCard/>

            

            {/* Repeat the above course card div for each course */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default CourseListingPage;

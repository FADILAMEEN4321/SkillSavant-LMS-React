import React,{useState, useEffect} from "react";
import LearningReactPlayer from "../features/LearningReactPlayer";
import OverviewSection from "../features/OverviewSection";
import { useParams } from 'react-router-dom';
import {axiosInstance} from './../../../services/axios';
import { Tabs, Tab } from './../features/Tabs';
import DiscussionRoom from "../features/DiscussionRoom";
import { Editor } from "novel";


const CourseLearningPage = () => {
  const {courseId} = useParams()
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentModule, setCurrentModule] = useState({})

  useEffect(()=>{
    axiosInstance
    .get(`single-course-details/${courseId}/`)
    .then((response)=>{
      console.log(response.data)
      setCourseData(response.data)
      console.log('---->modules====',response.data.modules[0])
      console.log('---->modules====',response.data.modules)
      if(response.data.modules){
        setCurrentModule(response.data.modules[0])
      }
      

    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      setLoading(false);
    })

  },[])

  





  return (
    <>
      {/* Main Content Container */}
      <div className="container mx-auto p-4 mt-4 flex">
        {/* Left Side (ReactPlayer) */}
        <div className="w-full md:pr-4">
          {/* ReactPlayer Component (replace with your ReactPlayer code) */}
          <LearningReactPlayer currentModule={currentModule} loading={loading} />

          

        <Tabs>
        <Tab label="🌐 Overview">

          {/* Section of Overview */}
         <OverviewSection courseData={courseData} currentModule={currentModule} loading={loading} />
        


        </Tab>

        <Tab label="💬 Discussion Room">
        
        <DiscussionRoom enrolledCourseId={courseId}/>

        </Tab>
        <Tab label="🗒️ Take Notes">
        
        <div className="container min-h-screen">
        <Editor className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg"/>

        </div>

        </Tab>
     
      </Tabs>





        

         {/* Section of Chat */}


          
          
        </div>

        {/* Right Side (Vertically Scrollable Modules List) */}
        <div className="w-2/4 hidden md:block">
          <div className="bg-gray-100 h-screen rounded-md p-4 shadow-lg ">
            {/* Modules List */}
            <div className="mb-3 bg-gray-900 p-2 rounded-md">
              <h2 className="text-xl text-white font-bold">Course Modules</h2>
            </div>
            <hr className="mb-2" />
            {
              loading? (
                <p>loading...</p>
              ):(
              courseData.modules.map((module)=>(
                <div className="mb-4">
                {/* Module Item (You can repeat this structure for each module) */}
                <div className="px-2 py-2 border-b hover:rounded-md hover:bg-slate-200 flex items-center justify-between">
                  <div onClick={()=>setCurrentModule(module)}>
                    <h2 className="text-[15px] font-semibold hover:cursor-pointer">
                      <span className="text-[14px]">{module.module_order}. </span> {module.module_title}{" "}
                      <span className="text-sm text-gray-500">[🕝 {module.duration}m]</span>
                    </h2>
                  </div>
                  {module.notes ? (
                     <a href={module.notes} target="_blank" rel="noopener noreferrer" className="text-sm border rounded-md hover:bg-gray-900 hover:text-white border-gray-900 p-1 hover:cursor-pointer">
                     📝 Notes
                   </a>
                  ):(
                   ''
                  )}
                
                </div>
              </div>
              ))
              )
            }
          </div>
        </div>
      </div>


      





    </>
  );
};

export default CourseLearningPage;

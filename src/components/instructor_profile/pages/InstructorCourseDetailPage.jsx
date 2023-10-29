import React,{useEffect,useState} from 'react'
import InstructorMobileSideBar from '../features/InstructorMobileSideBar';
import InstructorSideBar from '../features/InstructorSideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faTag, faDollarSign, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import axios from './../../../services/axios';
import ModuleCreationModal from '../features/ModuleCreationModal';


const InstructorCourseDetailPage = () => {
  const {courseId} = useParams()

  const [course,setCourse] = useState({});
  const [modules,setModules] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    axios
    .get(`courses-details/${courseId}/`)
    .then((response)=>{
      console.log(response.data)
      const {course,modules} = response.data
      setCourse(course)
      setModules(modules)
    })
    .catch((error)=>{
       console.error('error while fetching course and modules:',error)
    })
    .finally(()=>{
      setLoading(false);
    })
  },[])




  return (
    <>
      {/* Main Content Container */}
      <div className="mx-auto flex">
        {/* Sidebar for Dash Board */}

        <InstructorSideBar />

        {/* Scrollable Area for Course Listings */}
        <div className="h-screen w-full bg-gray-200 p-4 overflow-y-auto">
          {/* for mobile */}
          <InstructorMobileSideBar />

          

          <div className="container bg-white p-4 rounded-md">

          <>
  {/* Module Listing */}
  <div className="container mx-auto ">

  <div className="relative container bg-blue-700 min-h-[200px] rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-60 bg-black rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              {/* Your text content here */}
              {loading ? (
                <p>loading</p>
              ):(
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  {course.title}
                </span>{" "}
                {/* World. */}
              </h1>
              )}
              {loading? (
                <p>loading...</p>
              ):(
                <p className="text-lg font-normal text-gray-200 lg:text-xl dark:text-gray-400">
                {course.subtitle}
              </p>
              )}
              {/* <p className="mt-2">All Students of Skill savant</p> */}
            </div>
            {/* bg-[url('/self-learning.jpg')]  */}
            <div className="bg-cover min-h-[200px] rounded-md" style={{backgroundImage: `url('${course.cover_image}')`,backgroundPosition: 'center center',}} />
          </div>




    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">

    <div className="p-7 bg-green-200 rounded min-h-[120px] shadow-lg">
    <div className="text-green-600 text-4xl mb-2">
      <i className="fas fa-layer-group"></i>
      <FontAwesomeIcon icon={faLayerGroup} />
    </div>
    <div className="text-lg font-semibold text-green-800">Level</div>
    {loading ? (
      <p>loading..</p>):(
      <div className="text-gray-600">{course.level}</div>
      )}
        

    </div>
    <div className="p-7 bg-blue-200 rounded min-h-[120px] shadow-lg">
    <div className="text-blue-600 text-4xl mb-2">
      <i className="fas fa-tag"></i>
      <FontAwesomeIcon icon={faTag} />
    </div>
    <div className="text-lg font-semibold text-blue-800">Category</div>
    {loading ? (
      <p>loading...</p>
    ):(
      <div className="text-gray-600">{course.subcategory.name}</div>
    )}


    </div>
    <div className="p-7 bg-red-200 rounded min-h-[120px] shadow-lg">
    <div className="text-red-600 text-4xl mb-2">
      <i className="fas fa-dollar-sign"></i>
      <FontAwesomeIcon icon={faDollarSign} />
    </div>
    <div className="text-lg font-semibold text-red-800">Price</div>
    {loading ? (
      <p>loading...</p>
    ):(
      <div className="text-gray-600">${course.price}</div>
    )}
        


    </div>
    <div className="p-7 bg-yellow-200 rounded min-h-[120px] shadow-lg">
    <div className="text-yellow-600 text-4xl mb-2">
      <i className="fas fa-check-circle"></i>
      <FontAwesomeIcon icon={faCheckCircle} />
    </div>
    <div className="text-lg font-semibold text-yellow-800">Status</div>
    {loading ? (
      <p>loading...</p>
    ):(
      <div className="text-gray-600">{course.is_approved ? ('Approved'):('Pending')}</div>
    )}



    </div>
        
    </div>



    {/* Module listing content here */}
    <div className="container p-3 flex items-center justify-between">
      <h3 className="text-xl text-gray-900 font-bold">
        Modules in this course
      </h3>
      <h3 className="text-xl text-gray-900 font-semibold">


     <ModuleCreationModal course={course} setModules={setModules} />


      </h3>
    </div>
    <hr />
    <div className="container mx-auto mt-4 mb-4">
      
      {loading ? (
        <p>loading...</p>
      ):(
        modules.map((module)=>(
          <div key={module.id} className="container p-3 flex items-center justify-between hover:border hover:border-gray-900 rounded-md">
        <h3 className="text-lg font-bold text-gray-900">
          {module.module_order}. {module.module_title} ({module.duration}m)
        </h3>
        <div>
        <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Edit</button>
        <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2">Delete</button>
        </div>
      </div>
        ))
      )}
     
     
    </div>
    <hr />
  </div>
</>

<>
  {/* About the Course */}
  <div className="container mx-auto mt-4">
    <div className="container mb-4 p-3">
      <h2 className="text-2xl font-bold mb-4">About the Course</h2>
      {loading ? (
        <p>loading...</p>
      ):(
        <p className="text-gray-700">
      {course.description}
      </p>
      )}
     
    </div>
    <hr />
  </div>

  {/* Created at */}
  <div className="container mx-auto mt-4">
    <div className="container mb-4 p-3">
      <h2 className="text-xl font-bold mb-4">Created at: {loading? (''):(<span className='font-thin'>{course.created_at}</span>)}</h2>
 
    </div>
  </div>
</>



            


          </div>

         
        </div>
      </div>
    </>
  )
}

export default InstructorCourseDetailPage
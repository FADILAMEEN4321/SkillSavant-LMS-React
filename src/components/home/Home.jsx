import React,{useContext} from 'react'
import CourseRow from './CourseRow'
import AuthContext from '../../context/AuthContext'


const Home = () => {

  return (
    <>
    {/* // Hero-section */}
    <section className="bg-white dark:bg-gray-900 bg-center bg-no-repeat bg-cover bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]" style={{backgroundImage: 'url(/self-learning.jpg)'}}>
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    <div className="flex flex-col justify-center">
      <h1 className="mb-4 text-4xl z-10 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        We invest in the world’s potential
      </h1>
      <p className="mb-8 text-lg font-normal z-10 text-gray-500 lg:text-xl dark:text-gray-400">
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <a
          href="#"
          className="inline-flex z-10 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
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
          className="inline-flex z-10 justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Learn more
        </a>
      </div>
    </div>
    <div>
      {/* <iframe
        className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
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
        <div class="flex space-x-11 overflow-x-auto">
          {/* <!-- Latest Course 1 --> */}
          <div class="flex-shrink-0 w-64 bg-yellow-300 rounded-lg shadow-md p-4">
            <h3 class="text-xl font-semibold mb-2">Course Title 1</h3>
            <p class="text-gray-600 mb-4">Description of Course 1.</p>
            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
          </div>
  
          {/* <!-- Latest Course 2 --> */}
          <div class="flex-shrink-0 w-64 bg-red-500 rounded-lg shadow-md p-4">
            <h3 class="text-xl font-semibold mb-2">Course Title 2</h3>
            <p class="text-gray-600 mb-4">Description of Course 2.</p>
            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
          </div>
  
          {/* <!-- Latest Course 3 --> */}
          <div class="flex-shrink-0 w-64 bg-green-400 rounded-lg shadow-md p-4">
            <h3 class="text-xl font-semibold mb-2">Course Title 3</h3>
            <p class="text-gray-600 mb-4">Description of Course 3.</p>
            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
          </div>


          <div class="flex-shrink-0 w-64 bg-purple-500 rounded-lg shadow-md p-4">
            <h3 class="text-xl font-semibold mb-2">Course Title 3</h3>
            <p class="text-gray-600 mb-4">Description of Course 3.</p>
            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
          </div>
       
          {/* <!-- Add more Latest Courses as needed --> */}
        </div>
      </div>
    </div>
    {/* <div class="bg-gradient-to-b from-blue-100 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div> */}
  </section>
  

<CourseRow title="Popular Courses" subtitle="Checkout all the popular courses."/>
<CourseRow title="Latest Releases" subtitle="Checkout all the Latest Releases."/>
<CourseRow title="Featured Courses" subtitle="Checkout all the Featured Courses."/>




</>

  )
}

export default Home
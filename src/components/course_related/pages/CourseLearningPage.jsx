import React from "react";
import ReactPlayer from "react-player";

const CourseLearningPage = () => {
  return (
    <>
      {/* <div class="mx-auto bg-black flex flex-col md:flex-row gap-4">

  <div class="container mx-auto relative">

    <ReactPlayer
        url="https://skillsavant.s3.amazonaws.com/module_videos/photograpghy_2.mp4" // Replace with your video source
        width="100%"
        height="100%"
        controls
      /> 
      
  </div>

</div> */}

      {/* <!-- Main Content Container --> */}
      <div class="container mx-auto p-4 mt-4 flex">
        {/* <!-- Left Side (ReactPlayer) --> */}
        <div class="w-full md:pr-4">
          {/* <!-- ReactPlayer Component (replace with your ReactPlayer code) --> */}
          <div className="h-85 bg-gray-300 rounded-md">
            <ReactPlayer
              url="https://skillsavant.s3.amazonaws.com/module_videos/photograpghy_2.mp4" // Replace with your video source
              width="100%"
              height="100%"
              controls
            />
          </div>

          <div className="">

            <div className="flex items-center justify-start">
                <div className="">

                <a href="#" class="inline-flex items-center justify-center p-4 text-black border-b-2 border-black rounded-t-lg active dark:text-black dark:border-black group" aria-current="page">
                {/* <svg class="w-4 h-4 mr-2 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg> */}
               🌐 Overview
            </a>
             

                </div>
                <div className="">

                <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                {/* <svg class="w-4 h-4 mr-2 text-black group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg> */}
                💬Discussion Room
            </a>


                
                </div>
            </div>
            <div className="border border-r-indigo-700"></div>

          </div>





          <div class="p-2">
 
    <div class="mb-4">
    <h4 class="text-2xl font-bold">Boxing Fundamentals: Mastering the Art of Combat</h4>
    <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Become a Skilled Boxer from the Ground Up.</p>
    </div>

  
    <div>
     
        <div class="mb-3 bg-lime-200 p-3 rounded-md">
            <h4 class="text-2xl font-bold">Module 1: Module Title</h4>
            <p class="mb-3 text-left text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
        </div>

       
      

  
    </div>
</div>





          <div class="container mb-4 p-3">
            <h2 class="text-2xl font-bold mb-4">About the Course</h2>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              aliquam erat. Nullam auctor, velit in sollicitudin dignissim,
              ipsum dui efficitur justo, eu ultrices metus libero vel justo.
              Vestibulum vitae lorem nec arcu euismod eleifend.
            </p>
            <p class="text-gray-700 mt-2">
              Nullam varius, ipsum sit amet tristique vehicula, massa libero
              feugiat justo, at bibendum ipsum sem sed justo. Nulla facilisi.
              Proin tristique vehicula orci, eu bibendum sapien posuere non.
            </p>
          </div>

          <hr></hr>

          <div class="container mb-4 p-3">
        <h2 class="text-2xl font-bold mb-4">Meet your Instructor</h2>
    <div class="flex items-center">
        <img src="instructor-image.jpg" alt="Instructor" class="w-16 h-16 rounded-full mr-4"/>
        <div>
            <h3 class="text-xl font-semibold">John Doe</h3>
            <p class="text-gray-700">Experienced Instructor</p>
        </div>
    </div>
    <p class="text-gray-700 mt-2">
        John Doe is an experienced instructor with a passion for teaching. He has been working in the field for over 10 years and has helped countless students achieve their goals.
    </p>
    </div>


          {/* <hr></hr> */}
        </div>

        {/* <!-- Right Side (Vertically Scrollable Modules List) --> */}
        <div class="w-2/4 hidden md:block">
          <div class="bg-green-100 h-screen rounded-md p-4 shadow-lg ">
            {/* <!-- Modules List --> */}
            <div class="mb-3">
              <h2 class="text-2xl font-bold">Course Modules</h2>
            

            </div>
            <hr class="mb-2"/>
          


            <div class="mb-4">
              {/* <!-- Module Item (You can repeat this structure for each module) --> */}
              <div class="px-2 py-2 border-b hover:rounded-md hover:bg-slate-200 flex items-center justify-between">

              <div>


              <h2 class="text-xl font-semibold">
              <span class="text-lg">1. </span> Introduction <span class="text-sm text-gray-500">[🕝 20m]</span></h2>

              </div>
              
              <div class="text-xl">
              📝
              </div>
                
              </div>
            </div>

            

          




            
           
         
      
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseLearningPage;

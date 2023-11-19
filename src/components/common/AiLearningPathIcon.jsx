import { useEffect, useState } from "react";
import { SrollToTopClassnames } from "./../../utils/SrollToTopClassnames";

const AiLearningPathIcon = () => {


  return (

    <>
    <div className="fixed bottom-5 right-16">
      <div
        type="button"
        // className='bg-gray-900 hover:bg-red-500 inline-flex items-center rounded-full p-3 shadow-sm'
        className="bg-red-600 hover:bg-red-700 focus:ring-red-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"

      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L12 20"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 8.99996C17 8.99996 13.3176 4.00001 12 4C10.6824 3.99999 7 9 7 9"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    </>

  )
   

    
};

export default AiLearningPathIcon;

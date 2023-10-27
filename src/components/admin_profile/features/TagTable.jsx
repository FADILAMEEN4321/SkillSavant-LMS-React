import React,{useEffect,useState} from 'react'
import axios from './../../../services/axios'

const TagTable = () => {

    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)
        axios
        .get('admin/tags-list-create/')
        .then((response)=>{
            console.log('tags----->',response.data)
            setTags(response.data)
        })
        .catch((error)=>{
            console.error('error while fetching tags:', error)
        })
        .finally(()=>{
            setLoading(false)
        })

    },[])


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-md">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">

    



      Tags
      <button className="ml-5 text-white inline-flex items-center bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <svg
                className="mr-1 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Create Tag
            </button>
      <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
        Browse a list of Flowbite products designed to help you work and play,
        stay.
      </p>
      
    </caption>
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Tag name
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
        
      </tr>
    </thead>
    <tbody>
      
      {loading ? (
        <td colSpan="2">Loading...</td>
      ):(
       tags.map((tag)=>(
        <tr className="bg-white dark:bg-gray-800">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {tag.name}
        </th>
        <td className="px-6 py-4">
        <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button>
        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
        </td>
      </tr>
       ))
      )}
      
     
    </tbody>
  </table>
</div>

  )
}

export default TagTable
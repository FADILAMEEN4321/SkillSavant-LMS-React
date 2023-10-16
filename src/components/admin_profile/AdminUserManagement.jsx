import React,{useEffect,useState} from 'react'
import AdminSideBar from './AdminSideBar'
import { initFlowbite } from 'flowbite'
import axios from './../../services/axios';
import {baseUrlMedia} from './../../services/constants'


const AdminUserManagement = () => {

  const [students,setStudents] = useState([]);

  const toggleBlock = (user) =>{
    const newStatus = !user.user.is_blocked;

    axios.post(`admin/students-block-unblock/${user.user.id}/`)
    .then((response)=>{
      const updatedStudents = students.map((student)=>{
        if(student.user.id === user.user.id){
          return{
            ...student,
            user:{
              ...student.user,
              is_blocked: newStatus,
            }
          }
        }
        return student;
      });
      setStudents(updatedStudents);
    })
    .catch((error) => {
      console.error('Error toggling block/unblock:', error);
    });
  }



  useEffect(()=>{

    initFlowbite();

    axios.get('admin/students/').then((response)=>{
      // console.log('API Response:', response.data);
      setStudents(response.data);
      // console.log('student-data---',students)
    }).catch((error)=>{
      console.error('Error fetching students:',error)
    })

    console.log('student-data---',students)


},[]);


  return (
    
<div className="grid grid-cols-1 md:grid-cols-4 h-screen">
  {/* Sidebar */}
  {/* <div className="bg-blue-400 rounded-lg shadow-xl h-full col-span-1 min-h-[50px] hidden md:flex"> */}
   <AdminSideBar/>

  {/* Dashboard Space */}
  {/* <div className="col-span-3"> */}
  {/* <div className="col-span-1 md:col-span-3 w-full min-h-fit md:w-auto"> */}
  <div className="col-span-1 md:col-span-3 w-full min-h-fit md:w-auto">
    {/* Dashboard content goes here */}
    <div className="bg-blue-200 h-full shadow-xl min-h-[50px]">
      {/* Dashboard content goes here */}
    
     



<div className='bg-green-300 border border-solid h-24 min-w-fit flex items-center'>
<h3 className="m-5 text-3xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-4xl xl:text-6xl dark:text-white"> User management</h3>
{/* <p class="font-light mt-5 text-gray-900 md:text-lg xl:text-xl dark:text-gray-400">Manage your profile here.</p> */}
</div>



<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
    <div>
      <button
        id="dropdownActionButton"
        data-dropdown-toggle="dropdownAction"
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
      >
        <span className="sr-only">Action button</span>
        Action
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="dropdownAction"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownActionButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Reward
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Promote
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Activate account
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Delete User
          </a>
        </div>
      </div>
    </div>
    <label htmlFor="table-search" className="sr-only">
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        id="table-search-users"
        className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for users"
      />
    </div>
  </div>
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all-search"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-all-search" className="sr-only">
              checkbox
            </label>
          </div>
        </th>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Position
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {students?(
        students.map((student)=>(
          <tr key={student.user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            className="w-10 h-10 rounded-full"
            src={`${student.profile_photo}`}  
            alt="Jese image"
          />
          <div className="pl-3">
            <div className="text-base font-semibold">{student.user.first_name} {student.user.last_name}</div>
            <div className="font-normal text-gray-500">
              {student.user.email}
            </div>
          </div>
        </th>
        <td className="px-6 py-4">student</td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />
            Online
            {/* {student.user.is_blocked && } */}
          </div>
        </td>
        <td className="px-6 py-4">
        
         {student.user.is_blocked?
         (<button onClick={()=>toggleBlock(student)} type="button" class="text-white bg-gradient-to-r from-green-400
          via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
          focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg
          dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 
          py-2.5 text-center mr-2 mb-2">Unblock</button>)
         :
         (<button onClick={()=>toggleBlock(student)} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500
          to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300
           dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg
            dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center
             mr-2 mb-2">Block</button>)}
        </td>
      </tr>
        ))
      ):('')}
     
     
      
    </tbody>
  </table>
</div>










    </div>
  </div>
</div>




  )
}

export default AdminUserManagement
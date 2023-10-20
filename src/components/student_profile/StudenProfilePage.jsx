import React,{useEffect,useContext} from 'react'
import { initFlowbite } from 'flowbite'
import AuthContext from '../../context/AuthContext'
import {baseUrlMedia} from './../../services/constants'



const StudenProfilePage = () => {
  let {userProfile,user} = useContext(AuthContext)

  console.log(userProfile,'---------------from studentpage')

    useEffect(()=>{
        initFlowbite();
    },[])
  return (


  
<>
  
<div className="navbar bg-blue-200 h-24">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Profile</a></li>
        <li>
          <a>Change password</a>
        </li>
        <li><a>Payments</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl bg-blue-400 m-1 hidden md:flex">Profile</a>
    <a className="btn btn-ghost normal-case text-xl m-1 hidden md:flex">Change password</a>
    <a className="btn btn-ghost normal-case text-xl m-1 hidden md:flex">Payments</a>
  </div>
  <div className="navbar-center hidden lg:flex">
   
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
  </div>
</div>





<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    {userProfile ? (<img className="max-w-sm rounded-md shadow-2xl" src={`${baseUrlMedia+userProfile.profile_photo}`} />)
          :(<img src="" className="max-w-sm rounded-md shadow-2xl" />)}
    <div>
      {userProfile ? (<h1 className="text-5xl font-bold">Hi! {user.first_name} {user.last_name}</h1>):('')}
      {userProfile ? (<p className='py-3 font-bold'>{userProfile.state}, {userProfile.country}</p>):('')}
      {userProfile ? (<p className="py-6">{userProfile.bio}</p>):('')}
      {/* <button className="btn btn-primary">Get Started</button> */}

 <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Edit Bio</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Edit Bio</h3>
    
    {/* Modal body */}
<form action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="First name"
              />
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                // defaultValue="Google"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Last name"
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                State
              </label>
              <input
                type="text"
                
                name="state"
                id="state"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="eg: kerala"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <select
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">India</option>
                <option value="TV">Russia</option>
                <option value="PC">Ireland</option>
                <option value="GA">Pakistan</option>
                <option value="PH">UAE</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="bio"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bio
              </label>
              <textarea
                id="description"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write a description..."
              />
            </div>

            <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  <span className="label-text">Profile Image</span>
                </label>
                <input
                  type="file"
                  name="profile_image"
                  // onChange={handleImageChange}
                />
              </div>




          </div>
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="text-white bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Save
            </button>
           
          </div>
        </form>





  </div>
</dialog>








    </div>
  </div>
</div>
</>

  



  )
}

export default StudenProfilePage
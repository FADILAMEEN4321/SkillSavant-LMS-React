import React,{useEffect} from 'react'
import { initFlowbite } from 'flowbite'

const StudenProfilePage = () => {
    useEffect(()=>{
        initFlowbite();
    },[])
  return (


<>
<div className="navbar bg-blue-500">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Profile</a></li>
        <li>
          <a>My learning</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Change password</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl m-1 text-white hidden md:flex">My learning</a>
    <a className="btn btn-ghost normal-case text-xl m-1 bg-blue-800 text-white hidden md:flex">Profile</a>
    <a className="btn btn-ghost normal-case text-xl m-1  text-white hidden md:flex">Settings</a>


 
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

    </ul>
  </div>
  <div className="navbar-end">
  </div>
</div>




<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/fadil_profile.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Hi! Iam fadil ameen</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

</>
  



  )
}

export default StudenProfilePage
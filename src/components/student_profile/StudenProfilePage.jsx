import React,{useEffect,useContext} from 'react'
import { initFlowbite } from 'flowbite'
import AuthContext from '../../context/AuthContext'
import {baseUrlMedia} from './../../services/constants'



const StudenProfilePage = () => {
  let {studentProfile,user} = useContext(AuthContext)

  console.log(studentProfile,'---------------from studentpage')

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
    {studentProfile ? (<img className="max-w-sm rounded-lg shadow-2xl" src={`${baseUrlMedia+studentProfile.profile_photo}`} />)
          :(<img src="" className="max-w-sm rounded-lg shadow-2xl" />)}
    <div>
      {studentProfile ? (<h1 className="text-5xl font-bold">Hi! {user.first_name} {user.last_name}</h1>):('')}
      {studentProfile ? (<p className='py-3 font-bold'>{studentProfile.state}, {studentProfile.country}</p>):('')}
      {studentProfile ? (<p className="py-6">{studentProfile.bio}</p>):('')}
      {/* <button className="btn btn-primary">Get Started</button> */}

 <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Edit Bio</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Edit Bio</h3>
    <form onSubmit=''>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First name</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  className="textarea textarea-bordered"
                  // value={userData.bio}
                  // onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last name</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  className="textarea textarea-bordered"
                  // value={userData.bio}
                  // onChange={handleChange}
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">State</span>
                </label>
                <input
                type="text"
                  name="state"
                  placeholder="Enter your state"
                  className="textarea textarea-bordered"
                  // value={userData.bio}
                  // onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country</span>
                </label>
                <input
                  type='text'
                  name="country"
                  placeholder="Enter your country"
                  className="textarea textarea-bordered"
                  // value={userData.bio}
                  // onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bio</span>
                </label>
                <textarea
                  name="bio"
                  placeholder="Enter your bio"
                  className="textarea textarea-bordered"
                  // value={userData.bio}
                  // onChange={handleChange}
                />
              </div>
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Profile Image</span>
                </label>
                <input
                  type="file"
                  name="profile_image"
                  // onChange={handleImageChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Save
              </button>
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
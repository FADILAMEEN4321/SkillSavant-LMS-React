import React,{useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import {baseUrlMedia} from './../../services/constants'
import axios from './../../services/axios'

const Header = () => {
  let {logoutUser,user,authTokens} = useContext(AuthContext)
  const [studentData, setStudentData] = useState(null)

  const handleLogout = () =>{
    setStudentData(null)
    logoutUser()
  }

  useEffect(() => {
    // Fetch student profile data when the app initializes and when user is logged in
    if (user) {
      // Only fetch if a user is logged in
      const user_id = user.user_id;

      // Fetch student profile data
      const fetchStudentData = async () => {
        try {
          const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authTokens?.access}`,
          };
          const response = await axios.get(`student-profile/${user_id}/`,{ headers });
          if (response.status === 200) {
            const studentProfileData = response.data;
            setStudentData(studentProfileData);
          }
        } catch (error) {
          // Handle any errors, e.g., by showing an error message or logging them
          console.error('Error fetching student profile data:', error);
        }
      };

      fetchStudentData();
    }
  },[user]);

  console.log(studentData,'---------------header')


  return (
<div className="navbar bg-base-100 sticky inset-0 z-10 border-white/8 bg-opacity-80 shadow-md backdrop-blur-2xl backdrop-saturate-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {/* <li><a>Item 1</a></li> */}
        <li>
          <a>Courses</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Teach On DL</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl mr-6">Skill Savant</a>
    <div className="form-control">
    
      <input type="text" placeholder="Search Courses..." className="input input-bordered w-24 md:w-auto hidden md:flex" />
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    
  </div>
  <div className="navbar-end">

  <ul className="menu menu-horizontal px-1 hidden lg:flex">
  <li><Link to="/">Home</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Courses</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>My learning</a></li>
      <li><a>Teach On Skill Savant</a></li>
      {user && <li><a>{user.email}</a></li> }
    </ul>


   
  </div>
  
 
 
  { user? (<div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {studentData ? (<img src={`${baseUrlMedia+studentData.profile_photo}`} />)
          :(<img src="" />)} 
        </div>
        


      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>):(<Link to="/login" className="btn bg-blue-700 text-white hover:bg-blue-800" >Login</Link>)

  }


</div>


  )
}

export default Header
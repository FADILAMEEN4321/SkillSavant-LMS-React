import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './components/home/Home.jsx';
import LoginPage from './components/home/LoginPage';
import SignupPage from './components/home/SignupPage';
import StudenProfilePage from './components/student_profile/StudenProfilePage.jsx';
import InstructorLoginPage from './components/instructor_profile/InstructorLoginPage.jsx';
import InstructorSignupPage from './components/instructor_profile/InstructorSignupPage.jsx';
import AdminLoginPage from './components/admin_profile/AdminLoginPage.jsx';
import StudentRoute from './protectedRoutes/StudentRoute.jsx';
import InstructorProfilePage from './components/instructor_profile/InstructorProfilePage.jsx';
import AdminUserManagement from './components/admin_profile/AdminUserManagement.jsx';




const RoutesComponents = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} exact></Route>


        {/* Routes for Student */}
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/profile' element={<StudentRoute Component={StudenProfilePage} />}></Route>


        {/* Routes for Instructor */}
        <Route path='/instructor/login' element={<InstructorLoginPage/>}></Route>
        <Route path='/instructor/signup' element={<InstructorSignupPage/>}></Route>
        <Route path='/instructor/profile' element={<InstructorProfilePage/>}></Route>


        {/* Routes for Admin */}
        <Route path='/admin/login' element={<AdminLoginPage/>}></Route>
        <Route path='/admin/user-management' element={<AdminUserManagement/>}></Route>
    </Routes>
  )
}

export default RoutesComponents
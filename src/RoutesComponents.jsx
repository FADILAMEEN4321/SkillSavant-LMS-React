import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './components/home/Home.jsx';
import LoginPage from './components/home/LoginPage';
import SignupPage from './components/home/SignupPage';
import StudenProfilePage from './components/student_profile/StudenProfilePage.jsx';
import InstructorLoginPage from './components/instructor_profile/InstructorLoginPage.jsx';
import InstructorSignupPage from './components/instructor_profile/InstructorSignupPage.jsx';
import AdminLoginPage from './components/admin_profile/AdminLoginPage.jsx';



const RoutesComponents = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} exact></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/profile' element={<StudenProfilePage/>}></Route>
        <Route path='/instructor/login' element={<InstructorLoginPage/>}></Route>
        <Route path='/instructor/signup' element={<InstructorSignupPage/>}></Route>
        <Route path='/admin/login' element={<AdminLoginPage/>}></Route>
    </Routes>
  )
}

export default RoutesComponents
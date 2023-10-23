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
import CourseListingPage from './components/course_related/CourseListingPage.jsx';
import AdminDashboard from './components/admin_profile/AdminDashboard.jsx';
import AdminInstructorManagement from './components/admin_profile/AdminInstructorManagement.jsx';
import AdminRoute from './protectedRoutes/AdminRoute.jsx';
import InstructorCoursePage from './components/instructor_profile/InstructorCoursePage.jsx';




const RoutesComponents = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} exact></Route>


        {/* Routes for Student */}
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/profile' element={<StudentRoute Component={StudenProfilePage} />}></Route>
        <Route path='/courses' element={<CourseListingPage/>}></Route>



        {/* Routes for Instructor */}
        <Route path='/instructor/login' element={<InstructorLoginPage/>}></Route>
        <Route path='/instructor/signup' element={<InstructorSignupPage/>}></Route>
        <Route path='/instructor/profile' element={<InstructorProfilePage/>}></Route>
        <Route path='/instructor/mycourses' element={<InstructorCoursePage/>}></Route>


        {/* Routes for Admin */}
        <Route path='/admin/login' element={<AdminLoginPage/>}></Route>
        <Route path='/admin/dashboard' element={<AdminRoute Component={AdminDashboard} />}></Route>
        <Route path='/admin/student-management' element={<AdminRoute Component={AdminUserManagement} />}></Route>
        <Route path='/admin/instructor-management' element={<AdminRoute Component={AdminInstructorManagement} />}></Route>
    </Routes>
  )
}

export default RoutesComponents
import React from 'react'
import {Route, Routes} from 'react-router-dom';


import Home from './components/home/pages/Home'
import LoginPage from './components/home/pages/LoginPage';
import SignupPage from './components/home/pages/SignupPage';
import StudenProfilePage from './components/student_profile/StudenProfilePage.jsx';
import InstructorLoginPage from './components/instructor_profile/pages/InstructorLoginPage.jsx'
import InstructorSignupPage from './components/instructor_profile/pages/InstructorSignupPage.jsx'
import AdminLoginPage from './components/admin_profile/pages/AdminLoginPage.jsx';
import StudentRoute from './protectedRoutes/StudentRoute.jsx';
import InstructorProfilePage from './components/instructor_profile/pages/InstructorProfilePage.jsx';
import AdminUserManagement from './components/admin_profile/pages/AdminUserManagement.jsx';
import CourseListingPage from './components/course_related/pages/CourseListingPage.jsx';
import AdminDashboard from './components/admin_profile/pages/AdminDashboard.jsx';
import AdminInstructorManagement from './components/admin_profile/pages/AdminInstructorManagement.jsx';
import AdminCategoryManagement from './components/admin_profile/pages/AdminCategoryManagement.jsx';
import AdminRoute from './protectedRoutes/AdminRoute.jsx';
import InstructorCoursePage from './components/instructor_profile/pages/InstructorCoursePage.jsx';
import InstructorCourseDetailPage from './components/instructor_profile/pages/InstructorCourseDetailPage.jsx';
import PendingCoursesPage from './components/admin_profile/pages/PendingCoursesPage.jsx';
import PendingCourseDetailPage from './components/admin_profile/pages/PendingCourseDetailPage.jsx';
import ApprovedCoursePage from './components/admin_profile/pages/ApprovedCoursePage.jsx';
import CoursedetailPage from './components/course_related/pages/CoursedetailPage';
import ApprovedCourseDetailPage from './components/admin_profile/pages/ApprovedCourseDetailPage';




const RoutesComponents = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} exact></Route>


        {/* Routes for Student */}
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/profile' element={<StudentRoute Component={StudenProfilePage} />}></Route>
        <Route path='/courses' element={<CourseListingPage/>}></Route>
        <Route path='/courses/:courseId' element={<CoursedetailPage/>}></Route>



        {/* Routes for Instructor */}
        <Route path='/instructor/login' element={<InstructorLoginPage/>}></Route>
        <Route path='/instructor/signup' element={<InstructorSignupPage/>}></Route>
        <Route path='/instructor/profile' element={<InstructorProfilePage/>}></Route>
        <Route path='/instructor/mycourses' element={<InstructorCoursePage/>}></Route>
        <Route path='/instructor/mycourses/:courseId' element={<InstructorCourseDetailPage/>} />



        {/* Routes for Admin */}
        <Route path='/admin/login' element={<AdminLoginPage/>}></Route>
        <Route path='/admin/dashboard' element={<AdminRoute Component={AdminDashboard} />}></Route>
        <Route path='/admin/student-management' element={<AdminRoute Component={AdminUserManagement} />}></Route>
        <Route path='/admin/instructor-management' element={<AdminRoute Component={AdminInstructorManagement} />}></Route>
        <Route path='/admin/category-management' element={<AdminRoute Component={AdminCategoryManagement} />}></Route>
        <Route path='/admin/pending-courses' element={<AdminRoute Component={PendingCoursesPage} />}></Route>
        <Route path='/admin/pending-courses/:courseId' element={<AdminRoute Component={PendingCourseDetailPage} />}></Route>
        <Route path='/admin/approved-courses' element={<AdminRoute Component={ApprovedCoursePage} />}></Route>
        <Route path='/admin/approved-courses/:courseId' element={<AdminRoute Component={ApprovedCourseDetailPage} />}></Route>


    </Routes>
  )
}

export default RoutesComponents
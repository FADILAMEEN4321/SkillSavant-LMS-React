import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import NotFoundPage from './../components/common/NotFoundPage';

import {
    Home,
    LoginPage,
    SignupPage
} from './../components/home/index';

import {
    CoursedetailPage,
    CourseLearningPage,
    CourseListingPage,
    EnrollmentPage
} from './../components/course_related/index';

import {
    MylearningPage,
    StudenProfilePage
} from './../components/student_profile/index'
import OtpPage from '../components/home/pages/OtpPage';



const StudentRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
        <Route path='/' element={<Home/>} exact></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/courses' element={<CourseListingPage/>}></Route>
        <Route path='/courses/:courseId' element={<CoursedetailPage/>}></Route>
        <Route path='/otp/:email' element={<OtpPage/>}></Route>

       {/* Private routes */}
        <Route path='/profile' 
        element={<PrivateRoute element={<StudenProfilePage/>} roles={['student']}/>}>        
        </Route>
        
        <Route path='/courses/enroll/:courseId' 
        element={<PrivateRoute element={<EnrollmentPage/>} roles={['student']}/>}>
        </Route>

        <Route path='/enrolled-course/:courseId' 
        element={<PrivateRoute element={<CourseLearningPage/>} roles={['student']}/>}>
        </Route>

        <Route path='/MyLearning' 
        element={<PrivateRoute element={<MylearningPage/>} roles={['student']}/>}>
        </Route>

        <Route path="*" element={<NotFoundPage/>}></Route>
        
    </Routes>
  )
}

export default StudentRoutes
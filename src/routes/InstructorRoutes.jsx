import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

import {
    InstructorCourseDetailPage,
    InstructorCoursePage,
    InstructorLoginPage,
    InstructorProfilePage,
    InstructorSignupPage
} from './../components/instructor_profile/index';


const InstructorRoutes = () => {
  return (

<Routes>

    {/* public routes */}
    <Route path='/login' element={<InstructorLoginPage/>}></Route>
    <Route path='/signup' element={<InstructorSignupPage/>}></Route>
    
    
    {/* private routes */}
    <Route path='/profile' 
    element={<PrivateRoute element={<InstructorProfilePage/>} roles={['instructor']}/>}>
    </Route>

    <Route path='/mycourses' 
    element={<PrivateRoute element={<InstructorCoursePage/>} roles={['instructor']}/>}>
    </Route>

    <Route path='/mycourses/:courseId' 
    element={<PrivateRoute element={<InstructorCourseDetailPage/>} roles={['instructor']}/>}>
    </Route> 


</Routes>


  )
}

export default InstructorRoutes
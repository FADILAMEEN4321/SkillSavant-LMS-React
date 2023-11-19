import React from 'react'
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from './components/common/NotFoundPage.jsx';
import InstructorRoutes from './routes/InstructorRoutes.jsx';
import AdminRoutes from './routes/AdminRoutes.jsx';
import StudentRoutes from './routes/StudentRoutes.jsx';



const RoutesComponents = () => {
  return (
    <Routes>
             
     {/* student routes */}
     <Route
        path='/*'
        element={<StudentRoutes/>}
      />


     {/* instructor routes */}
        <Route
        path='/instructor/*'
        element={<InstructorRoutes />}
      />


     {/* admin routes */}
      <Route
        path='/admin/*'
        element={<AdminRoutes/>}
      />
     

      <Route path="*" element={<NotFoundPage/>}></Route>

    </Routes>
  )
}

export default RoutesComponents
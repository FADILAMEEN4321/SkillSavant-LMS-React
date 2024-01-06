import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

import {
  InstructorCourseDetailPage,
  InstructorCoursePage,
  InstructorLoginPage,
  InstructorProfilePage,
  InstructorSignupPage,
} from "./../components/instructor_profile/index";
import InstructorChat from "../components/instructor_profile/pages/InstructorChat";
import OtpInstructor from "../components/instructor_profile/pages/OtpInstructor";

const InstructorRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<InstructorLoginPage />}></Route>
      <Route path="/signup" element={<InstructorSignupPage />}></Route>

      <Route path="/otp/:email" element={<OtpInstructor />}></Route>

      {/* Private routes */}
      <Route
        path="/profile"
        element={
          <PrivateRoute
            element={<InstructorProfilePage />}
            roles={["instructor"]}
          />
        }
      ></Route>

      <Route
        path="/mycourses"
        element={
          <PrivateRoute
            element={<InstructorCoursePage />}
            roles={["instructor"]}
          />
        }
      ></Route>

      <Route
        path="/mycourses/:courseId"
        element={
          <PrivateRoute
            element={<InstructorCourseDetailPage />}
            roles={["instructor"]}
          />
        }
      ></Route>

      <Route
        path="/chat"
        element={
          <PrivateRoute element={<InstructorChat />} roles={["instructor"]} />
        }
      ></Route>
    </Routes>
  );
};

export default InstructorRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import {
  AdminLoginPage,
  AdminDashboard,
  AdminUserManagement,
  AdminInstructorManagement,
  AdminCategoryManagement,
  PendingCoursesPage,
  PendingCourseDetailPage,
  ApprovedCoursePage,
  ApprovedCourseDetailPage,
  AdminSalesPage,
} from "./../components/admin_profile/index";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<AdminLoginPage />}></Route>

      {/* Private routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute element={<AdminDashboard />} roles={["admin"]} />
        }
      ></Route>

      <Route
        path="/student-management"
        element={
          <PrivateRoute element={<AdminUserManagement />} roles={["admin"]} />
        }
      ></Route>

      <Route
        path="/instructor-management"
        element={
          <PrivateRoute
            element={<AdminInstructorManagement />}
            roles={["admin"]}
          />
        }
      ></Route>

      <Route
        path="/category-management"
        element={
          <PrivateRoute
            element={<AdminCategoryManagement />}
            roles={["admin"]}
          />
        }
      ></Route>

      <Route
        path="/pending-courses"
        element={
          <PrivateRoute element={<PendingCoursesPage />} roles={["admin"]} />
        }
      ></Route>

      <Route
        path="/pending-courses/:courseId"
        element={
          <PrivateRoute
            element={<PendingCourseDetailPage />}
            roles={["admin"]}
          />
        }
      ></Route>

      <Route
        path="/approved-courses"
        element={
          <PrivateRoute element={<ApprovedCoursePage />} roles={["admin"]} />
        }
      ></Route>

      <Route
        path="/approved-courses/:courseId"
        element={
          <PrivateRoute
            element={<ApprovedCourseDetailPage />}
            roles={["admin"]}
          />
        }
      ></Route>

      <Route
        path="/sales"
        element={
          <PrivateRoute element={<AdminSalesPage />} roles={["admin"]} />
        }
      ></Route>
    </Routes>
  );
};

export default AdminRoutes;

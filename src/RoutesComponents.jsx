import React from "react";
import { Route, Routes } from "react-router-dom";
import InstructorRoutes from "./routes/InstructorRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import StudentRoutes from "./routes/StudentRoutes.jsx";

const RoutesComponents = () => {
  return (
    <Routes>
      {/* student routes */}
      <Route path="/*" element={<StudentRoutes />} />

      {/* instructor routes */}
      <Route path="/instructor/*" element={<InstructorRoutes />} />

      {/* admin routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default RoutesComponents;

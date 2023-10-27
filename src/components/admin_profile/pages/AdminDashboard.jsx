import React from "react";
import AdminSideBar from "../features/AdminSideBar";
import AdminMobileSideBar from "../features/AdminMobileSideBar";

const AdminDashboard = () => {
  return (
    <>
      {/* Main Content Container */}
      <div className="mx-auto flex">
        {/* Sidebar for Dash Board */}

        <AdminSideBar />

        {/* Scrollable Area for Course Listings */}
        <div className="h-screen w-full bg-gray-200 p-4 overflow-y-auto">
          {/* for mobile */}
          <AdminMobileSideBar />

          <div className="relative container bg-blue-700 min-h-[200px] rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-60 bg-black rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              {/* Your text content here */}
              <h2 className="text-3xl font-bold mt-4 text-green-500">
                DashBoard
              </h2>
              {/* <p className="mt-2">All Students of Skill savant</p> */}
            </div>
            <div className="bg-cover bg-[url('/self-learning.jpg')] min-h-[200px] rounded-md" />
          </div>
          <div className="container"></div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

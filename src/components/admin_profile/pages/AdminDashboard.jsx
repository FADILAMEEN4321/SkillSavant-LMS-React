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

          <div className="relative container bg-gray-900 min-h-[150px] rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-60 bg-gray-900 rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              <h1 class="mb-3 text-3xl font-extrabold leading-none tracking-tight capitalize text-white md:text-3xl lg:text-4xl dark:text-white">
                Welcome to{" "}
                <span class="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-blue-600">
                  Admin panel.
                </span>
              </h1>

              <p class="text-sm font-normal capitalize text-gray-200 lg:text-lg">
                Dash board of skill savant.
              </p>
            </div>
          </div>

          <div className="container"></div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

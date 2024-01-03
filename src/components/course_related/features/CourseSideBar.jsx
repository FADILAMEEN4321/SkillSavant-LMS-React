import React, { useEffect, useState } from "react";

const CourseSideBar = ({
  sideBarLoading,
  categoryAndSubcategory,
  selectedCategroy,
  handleCategoryChange,
  handleAllCourse,
}) => {
  return (
    <div className="drawer md:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-sm mb-4 drawer-button">
          <svg
            class="w-3 h-3 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 14"
          >
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
          </svg>
          Explore
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="grid gap-2 mb-3">
            <a
              onClick={handleAllCourse}
              className="px-4 py-2 hover:cursor-pointer btn hover:text-white hover:bg-slate-950 bg-gray-900 font-bold text-white rounded-md"
            >
              All courses
            </a>
          </div>
          {sideBarLoading ? (
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded-md w-2/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded-md w-2/4 mt-2 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
              <hr className="mt-4 mb-4"></hr>
              <div className="h-4 bg-gray-300 rounded-md w-2/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded-md w-2/4 mt-2 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
              <hr className="mt-4 mb-4"></hr>
              <div className="h-4 bg-gray-300 rounded-md w-2/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
              {/* Add more skeleton elements as needed */}
            </div>
          ) : (
            categoryAndSubcategory.map((category) => (
              <>
                <h3 key={category.id} className="font-bold mt-4 mb-2">
                  {category.name}
                </h3>

                <hr />
                {category.subcategories.map((subcategory) => (
                  <p
                    onClick={() => handleCategoryChange(subcategory.id)}
                    key={subcategory.id}
                    className={`${
                      subcategory.id == selectedCategroy
                        ? "bg-gray-300 text-gray-950"
                        : "hover:bg-gray-300 bg-white text-gray-700"
                    }
                        px-4 py-2  hover:cursor-pointer
                          rounded-md mb-2`}
                  >
                    {subcategory.name}
                  </p>
                ))}
              </>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default CourseSideBar;

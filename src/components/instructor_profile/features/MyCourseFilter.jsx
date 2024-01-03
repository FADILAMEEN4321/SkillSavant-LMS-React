import React, { useEffect, useState } from "react";

const MyCourseFilter = ({ setCourses, originalCourses }) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);

    if (selectedValue === "approved") {
      const filteredCourses = originalCourses.filter(
        (course) => course.is_approved === true
      );
      setCourses(filteredCourses);
    } else if (selectedValue === "pending") {
      const filteredCourses = originalCourses.filter(
        (course) => course.is_approved === false
      );
      setCourses(filteredCourses);
    } else {
      setCourses(originalCourses);
    }
  };

  return (
    <div className="mx-auto md:mr-6">
      <>
        <select
          id="course_filter"
          value={selectedFilter}
          onChange={handleFilterChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">All courses</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
        </select>
      </>
    </div>
  );
};

export default MyCourseFilter;

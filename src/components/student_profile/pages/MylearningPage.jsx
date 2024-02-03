import React, {useEffect} from "react";
import { MyLearningTabs, Tab } from "../features/MyLearningTabs";
import EnrolledCourseTab from "../features/EnrolledCourseTab";
import FavouritesCoursesTab from "../features/FavouritesCoursesTab";

const MylearningPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Top section with heading */}
      <div className="bg-gray-900 text-white p-10">
        <>
          <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl lg:text-5xl dark:text-white">
            My{" "}
            <span class="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-blue-600">
              Learning...
            </span>
          </h1>

          <p class="text-sm font-normal text-gray-200 lg:text-lg">
            Empower Your Future: Unleash Your Potential Through Lifelong
            Learning.
          </p>
        </>
      </div>
      {/* Tabs for Labs and Favorite Courses */}
      <div className="p-1 flex items-center">
        <MyLearningTabs>
          <Tab
            label="Experiment Lab"
            icon="fas fa-lightbulb text-yellow-400 mr-2"
          >
            <EnrolledCourseTab />
          </Tab>

          <Tab
            label="Favourite courses"
            icon="fas fa-bookmark text-red-500 mr-2"
          >
            <FavouritesCoursesTab />
          </Tab>
        </MyLearningTabs>
      </div>
    </>
  );
};

export default MylearningPage;

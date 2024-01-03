import React, { useEffect, useContext } from "react";
import { initFlowbite } from "flowbite";
import AuthContext from "../../../context/AuthContext";

const StudenProfilePage = () => {
  let { userProfile, user } = useContext(AuthContext);

  console.log(userProfile, "---------------from studentpage");

  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <section className="h-screen">
        <div className="bg-gray-900 text-white p-10">
          <>
            <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl lg:text-5xl dark:text-white">
              My{" "}
              <span class="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-blue-600">
                Profile...
              </span>
            </h1>

            <p class="text-sm font-normal text-gray-200 lg:text-lg">
              Empower Your Future: Unleash Your Potential Through Lifelong
              Learning.
            </p>
          </>
        </div>
      </section>
    </>
  );
};

export default StudenProfilePage;

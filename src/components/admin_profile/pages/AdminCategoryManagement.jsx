import React, { useEffect, useState } from "react";
import AdminMobileSideBar from "../features/AdminMobileSideBar";
import { Link } from "react-router-dom";
import AdminSideBar from "../features/AdminSideBar";
import CategoryTable from "../features/CategoryTable";
import SubCategoryTable from "../features/SubCategoryTable";
import TagTable from "../features/TagTable";
import axios from "./../../../services/axios";

const AdminCategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("admin/categories-list-create/")
      .then((response) => {
        console.log("from cat--->", response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("admin/subcategories-list-create/")
      .then((response) => {
        console.log("subcat from cat--->", response.data);
        setSubcategories(response.data);
      })
      .catch((error) => {
        console.error("error fetching subcategories:", error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("admin/tags-list-create/")
      .then((response) => {
        console.log("tags from cat----->", response.data);
        setTags(response.data);
      })
      .catch((error) => {
        console.error("error while fetching tags:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
                Category Management
              </h2>
              <p className="mt-2">Manage All Category related things here.</p>
            </div>
            <div className="bg-cover bg-[url('/self-learning.jpg')] min-h-[200px] rounded-md" />
          </div>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CategoryTable
                categories={categories}
                setCategories={setCategories}
                loading={loading}
              />

              <SubCategoryTable
                subcategories={subcategories}
                setSubcategories={setSubcategories}
                loading={loading}
                categories={categories}
              />

              <TagTable tags={tags} setTags={setTags} loading={loading} subcategories={subcategories} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCategoryManagement;

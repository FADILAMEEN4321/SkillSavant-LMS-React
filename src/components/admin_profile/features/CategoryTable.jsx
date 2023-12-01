import React, { useEffect, useState } from "react";
import {axiosInstance} from "./../../../services/axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import EditCategoryModal from "./EditCategoryModal";

const CategoryTable = ({ categories, setCategories, loading }) => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    categoryName: Yup.string()
      .required("Category name is required")
      .max(100, "Category name must be at most 100 characters"),
  });

  // Initial form values
  const initialValues = {
    categoryName: "",
  };

  // Function to handle form submission
  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log("Form submitted with values:", values);
    axiosInstance
      .post("admin/categories-list-create/", { name: values.categoryName })
      .then((response) => {
        console.log("category--table- creation-->", response.data);
        const newCategory = response.data;
        // Update the categories list with the new category
        setCategories((prevCategories) => [...prevCategories, newCategory]);

        setSubmitting(false);
        document.getElementById("my_modal_3").close();
        toast.success("New category created successfully.");

        formik.resetForm();
      })
      .catch((error) => {
        console.error("error while creating category:", error);
        
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  // Use the useFormik hook to manage form state
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleDelete = (categoryId) => {
    axiosInstance
      .delete(`admin/categories-retrieve-update-destroy/${categoryId}/`)
      .then((response) => {
        console.log("Category deleted:", categoryId);
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== categoryId)
        );
        toast.warning("Category deleted successfully");
      })
      .catch((error) => {
        console.error("error while deleting category:", error);
      });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-md bg-white">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Categories
          <button
            className="ml-5 btn btn-sm btn-success"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
           
            + Create New Category
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => formik.resetForm()}
                >
                  ✕
                </button>
              </form>

              <>
                {/* Modal body */}
                <form onSubmit={formik.handleSubmit}>
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="categoryName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category Name
                      </label>
                      <input
                        // id="categoryName"
                        name="categoryName"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.categoryName}
                      />
                      {formik.touched.categoryName &&
                        formik.errors.categoryName && (
                          <div className="text-red-500">
                            {formik.errors.categoryName}
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      type="submit"
                      className="text-black border border-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      {formik.isSubmitting ? "Creating..." : "Create"}
                      {/* Create */}
                    </button>
                  </div>
                </form>
              </>
            </div>
          </dialog>
        
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Category name
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <td colSpan="2">Loading...</td>
          ) : (
            categories.map((category) => (
              <tr key={category.id} className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {category.name}
                </th>
                <td className="px-6 py-4">
                
                  
                <EditCategoryModal 
                category={category}
                setCategories={setCategories} />



                  <button
                    onClick={() => handleDelete(category.id)}
                    type="button"
                    class="btn ml-2 btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;

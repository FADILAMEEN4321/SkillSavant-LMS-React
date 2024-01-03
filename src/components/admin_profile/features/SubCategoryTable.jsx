import React, { useEffect, useState } from "react";
import { axiosInstance } from "./../../../services/axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const SubCategoryTable = ({
  subcategories,
  setSubcategories,
  loading,
  categories,
}) => {
  const validationSchema = Yup.object().shape({
    category: Yup.number().required("Category is required"),
    subCategoryName: Yup.string().required("Sub Category Name is required"),
  });

  const initialValues = {
    category: "",
    subCategoryName: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // setSubmitting(true);
    console.log("values fromsub--->", values);
    axiosInstance
      .post("admin/subcategories-list-create/", {
        name: values.subCategoryName,
        category: values.category,
      })
      .then((response) => {
        console.log("======>", response.data);
        const newSubCategory = response.data;
        setSubcategories((prevsubcategories) => [
          ...prevsubcategories,
          newSubCategory,
        ]);
        document.getElementById("my_modal_4").close();
        toast.success("New Sub category created successfully.");

        formik.resetForm();
      })
      .catch((error) => {
        console.error("error while creating subcategory:", error);
      })
      .finally(() => {});

    // setSubmitting(false);
  };

  // Use the useFormik hook to manage form state
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleDelete = (subCategoryId) => {
    axiosInstance
      .delete(`admin/subcategories-retrieve-update-destroy/${subCategoryId}/`)
      .then((response) => {
        console.log("Category deleted:", subCategoryId);
        setSubcategories((prevsubcategories) =>
          prevsubcategories.filter(
            (subcategory) => subcategory.id !== subCategoryId
          )
        );
        toast.warning("Deleted successfully");
      })
      .catch((error) => {
        console.error("error while deleting Subcategory:", error);
        toast.error("error while deleting Subcategory");
      });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-md">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Sub Categories
          <button
            className="ml-4 btn btn-sm btn-success"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            + Create New Category
          </button>
          <dialog id="my_modal_4" className="modal">
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
                        for="category"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Choose Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        {loading ? (
                          <option value="" disabled>
                            Loading...
                          </option>
                        ) : (
                          <>
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </>
                        )}
                      </select>
                      {formik.touched.category && formik.errors.category && (
                        <div className="text-red-500">
                          {formik.errors.category}
                        </div>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subCategoryName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Sub Category Name
                      </label>
                      <input
                        id="subCategoryName"
                        name="subCategoryName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subCategoryName}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                      {formik.touched.subCategoryName &&
                        formik.errors.subCategoryName && (
                          <div className="text-red-500">
                            {formik.errors.subCategoryName}
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      type="submit"
                      // disabled={formik.isSubmitting}
                      className="text-black border border-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      {formik.isSubmitting ? "Creating..." : "Create"}
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
              Sub Category name
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
            subcategories.map((subCategory) => (
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {subCategory.name}
                </th>
                <td className="px-6 py-4">
                  <button type="button" class="btn btn-accent btn-sm">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(subCategory.id)}
                    type="button"
                    class="btn btn-sm btn-error ml-2"
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

export default SubCategoryTable;

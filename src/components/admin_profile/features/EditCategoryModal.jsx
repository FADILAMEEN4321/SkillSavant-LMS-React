import React from "react";
import axios from "./../../../services/axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const EditCategoryModal = ({ category,setCategories }) => {
  const editCategorySchema = Yup.object().shape({
    categoryName: Yup.string()
      .required("Category name is required")
      .max(100, "Category name must be at most 100 characters"),
  });

  // Initial form values
  const initialValues = {
    categoryName: category.name,
  };
  const categoryId = category.id
  // Function to handle form submission
  const onSubmit = (values, categoryId) => {
    // setSubmitting(true);
    console.log("Form submitted with values:", values);
    
    axios
      .put(`admin/categories-retrieve-update-destroy/${category.id}/`, { name: values.categoryName })
      .then((response) => {
        console.log("category--table- creation-->", response.data);
        const updatedCategory = response.data;
        // Update the categories list with the new category
        setCategories((prevCategories) => {
            const updatedCategories = prevCategories.map((prevCategory) => {
              if (prevCategory.id === category.id) {
                return {
                  ...prevCategory,
                  name: updatedCategory.name, // Update the category name
                };
              }
              return prevCategory;
            });
            return updatedCategories;
          });
       

        // setSubmitting(false);
        formik.resetForm();
        document.getElementById(`my_Editmodal_${category.id}`).close();
        toast.success("Edited category successfully.");

        
      })
      .catch((error) => {
        console.error("error while creating category:", error);
        
      })
      .finally(() => {
        // setSubmitting(false);
      });
  };



   // Use the useFormik hook to manage form state
   const formik = useFormik({
    initialValues,
    validationSchema:editCategorySchema,
    onSubmit,
  });

  return (
    <>
      <button
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => document.getElementById(`my_Editmodal_${category.id}`).showModal()}
      >
        Edit
      </button>
      <dialog id={`my_Editmodal_${category.id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              //   onClick={() => formik.resetForm()}
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
                    Edit Category Name
                  </label>
                  <input
                    // id="categoryName"
                    name="categoryName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.categoryName}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                  {/* {formik.isSubmitting ? "Saving..." : "Save"}  */}
                  save
                  {/* Create */}
                </button>
              </div>
            </form>
          </>
        </div>
      </dialog>
    </>
  );
};

export default EditCategoryModal;

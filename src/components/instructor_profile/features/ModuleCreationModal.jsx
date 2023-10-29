import React from 'react'
import {moduleCreationSchema} from './../../../formValidations/moduleCreationSchema';
import { useFormik } from 'formik';
import axios from './../../../services/axios';



const ModuleCreationModal = ({course, setModules}) => {

    const initialValues = {
      module_title: '',
      module_order: '',
      duration: '',
      video_url: null,
    }

    const onSubmit = async (values, { setSubmitting }) =>{

        // setSubmitting(true)

        const formData = {
            module_title:values.module_title,
            module_order:values.module_order,
            duration:values.duration,
            video_url:values.video_url,
            course:course.id,
        }

        console.log('from---courese-crea-->',formData)
        console.log('from---courese-crea-->',course.id)

        try{
          const response = await axios.post('modules/create/',formData,{
            headers:{
                'Content-Type': 'multipart/form-data',
            }
 
        });

        if (response.data) {
          // Show a success toast
          const newModule = response.data;
          setModules((prevModules) => [...prevModules, newModule]);
        //   document.getElementById("my_modal_7").close();
          alert('Module created successfully!');
          formik.resetForm()
        //  setSubmitting(false)

          console.log(response.data)
        } else {
          // Handle cases where the API returns success but with an error message
          alert('An error occurred while creating the course.');
        }


        }catch(error){
          // toast.error('An error occurred while creating the course.');
          console.error('Error:', error);
        }


    }

    const formik = useFormik({
        initialValues,
        validationSchema:moduleCreationSchema,
        onSubmit,
    })




  return (
    <>
     <button type="button" onClick={()=>document.getElementById('my_modal_7').showModal()}
    className="text-white bg-gradient-to-br from-green-400
    to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
     focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg 
     text-sm px-5 py-2.5 text-center mr-2 mb-2">+ Add New Module</button>



     <dialog id="my_modal_7" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button onClick={()=> formik.resetForm()}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>



    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">

                  <div className="sm:col-span-2">
                  <label
                        htmlFor="module_title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Module Title
                      </label>
                      <input
                        type="text"
                        name="module_title"
                        id="module_title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.module_title}  
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type Module title"
                        required
                      />
                      {formik.touched.module_title && formik.errors.module_title && (
                        <div className="text-red-500">
                          {formik.errors.module_title}
                        </div>
                      )}
                   

                    </div>



                    <div>
                    <label
                        htmlFor="module_order"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Module Order
                      </label>
                      <input
                        type="number"
                        name="module_order"
                        id="module_order"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.module_order}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter module order"
                        required
                      />
                       {formik.touched.module_order && formik.errors.module_order && (
                        <div className="text-red-500">
                          {formik.errors.module_order}
                        </div>
                      )}
                     
                  
                    </div>
                    <div>
                      <label
                        htmlFor="duration"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Duration
                      </label>
                      <input
                        type="number"
                        name="duration"
                        id="duration"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.duration}      
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter module duration"
                        required
                      />
                      {formik.touched.duration && formik.errors.duration && (
                        <div className="text-red-500">
                          {formik.errors.duration}
                        </div>
                      )}
                    
                    </div>
                    
                    

                    

                    

                    

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="video_url"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Upload module video
                      </label>
                      <input
                        type="file"
                        id="video_url"
                        name="video_url"
                        accept=".mp4"
                        onChange={(event) => formik.setFieldValue('video_url', event.currentTarget.files[0])}
                        className="border border-gray-500 rounded-md font-medium text-gray-400"
                      />
                    
                    </div>
                  </div>

                 <div className="container">
                 <button type="submit" className="relative p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    
                    <span className="relative inline-flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    +
                    {/* {formik.isSubmitting ? "Creating..." : "Create"} */}
                    Create
                    </span>
                  </button>
                 </div>

                  
                </form>






    
  </div>
</dialog>
    </>
   
  )
}

export default ModuleCreationModal
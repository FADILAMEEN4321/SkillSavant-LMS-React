import React,{useEffect,useState,useContext} from 'react';
import {axiosInstance, axiosAuthorized} from './../../../services/axios';
import {courseCreationSchema} from './../../../formValidations/courseCreationSchema';
import { useFormik } from 'formik';
import AuthContext from './../../../context/AuthContext';
import { toast } from 'react-toastify';
 

const CourseCreationModal = ({setCourses}) => {

    const [subCategories, setSubCategories] = useState([])
    const [tags, setTags] = useState([])
    const [loading, setLoading] = useState(true)

    let {userProfile} = useContext(AuthContext)

    useEffect(()=>{
      axiosInstance
        .get('admin/subcategories-list-create/')
        .then((response)=>{
            setSubCategories(response.data)
        })
        .catch((error)=>{
            console.error('error while fetching subcategories:',error)
        })
    },[])

    useEffect(()=>{
      axiosInstance
        .get('admin/tags-list-create/')
        .then((response)=>{
            console.log(response.data)
            setTags(response.data)
        })
        .catch((error)=>{
            console.error('error while fetching tags:',error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    const initialValues = {
        title: "",
        subtitle: "",
        category: "",
        level: "Beginner",
        tag: "",
        price: "",
        description: "",
        cover_image: null,
    }

    const onSubmit = async (values, { setSubmitting }) =>{

        const formData = {
            title:values.title,
            subtitle:values.subtitle,
            subcategory:values.category,
            level:values.level,
            tags:values.tag,
            price:values.price,
            description:values.description,
            cover_image:values.cover_image,
            instructor:userProfile.id,
        }

        console.log('from---courese-crea-->',formData)
        console.log('from---courese-crea-->',userProfile.id)

        try{
          const response = await axiosInstance.post('courses/create/',formData,{
            headers:{
                'Content-Type': 'multipart/form-data',
            }
 
        });

        if (response.data) {
          // Show a success toast
          const newCourse = response.data;
          setCourses((prevCourses) => [...prevCourses, newCourse]);
          // document.getElementById("my_modal_4").close();
          alert('Course created successfully!');
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
        validationSchema:courseCreationSchema,
        onSubmit,
    })






  return (
    <>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
    <button
              className="ml-5 text-white inline-flex items-center bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => document.getElementById("my_modal_6").showModal()}
            >
              <svg
                className="mr-1 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Create New Course
            </button>
            <dialog id="my_modal_6" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                   onClick={()=>formik.resetForm()}
                   className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type course title"
                        required
                      />
                      {formik.touched.title && formik.errors.title && (
                        <div className="text-red-500">
                          {formik.errors.title}
                        </div>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="subtitle"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Sub title
                      </label>
                      <input
                        type="text"
                        name="subtitle"
                        id="subtitle"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subtitle}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type course subtitle"
                        required
                      />
                      {formik.touched.subtitle && formik.errors.subtitle && (
                        <div className="text-red-500">
                          {formik.errors.subtitle}
                        </div>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        {loading ? (
                            <option value="" disabled>
                            Loading...
                          </option>
                        ):(
                            <>
                          <option value="">Select a category</option>
                            {subCategories.map((category) => (
                              
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
                    <div>
                      <label
                        htmlFor="level"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Level
                      </label>
                      <select
                        id="level"
                        name="level"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.level}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option selected="" value="Beginner">
                          Beginner
                        </option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                      {formik.touched.level && formik.errors.level && (
                        <div className="text-red-500">
                          {formik.errors.level}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="tags"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tag
                      </label>
                      <select
                        id="tag"
                        name="tag"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tag}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        {loading ? (
                            <option value="" disabled>
                            Loading...
                          </option>
                        ):(
                            <>
                          <option value="">Select a Tag</option>
                            {tags.map((tag) => (
                              
                              <option key={tag.id} value={tag.id}>
                                {tag.name}
                              </option>
                            ))}
                          </>
                        
                

                        )}
                        
                      </select>
                      {formik.touched.tag && formik.errors.tag && (
                        <div className="text-red-500">
                          {formik.errors.tag}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="$2999"
                        required=""
                      />
                      {formik.touched.price && formik.errors.price && (
                        <div className="text-red-500">
                          {formik.errors.price}
                        </div>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write course description here"
    
                      />
                      {formik.touched.description && formik.errors.description && (
                        <div className="text-red-500">
                          {formik.errors.description}
                        </div>
                      )}

                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="cover_image"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Cover Image
                      </label>
                      <input
                        type="file"
                        id="cover_image"
                        name="cover_image"
                        accept=".jpg, .jpeg"
                        onChange={(event) => {
                            formik.setFieldValue("cover_image", event.currentTarget.files[0]);
                          }}
                        className="border border-gray-500 rounded-md font-medium text-gray-400"
                      />
                      {formik.touched.cover_image && formik.errors.cover_image && (
                        <div className="text-red-500">
                          {formik.errors.cover_image}
                        </div>
                      )}
                    </div>
                  </div>

                 <div className="container">
                 <button type="submit" className="relative p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    
                    <span className="relative inline-flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <svg
                    className="mr-1 -ml-1 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
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

export default CourseCreationModal
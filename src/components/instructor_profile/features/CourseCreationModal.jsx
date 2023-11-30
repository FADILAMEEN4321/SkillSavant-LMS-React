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
    const [creating,setCreating] = useState(false)

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
      setCreating(true)    

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
          document.getElementById("my_modal_6").close();
          toast.success('Course created successfully!');
          setCreating(false)
          console.log(response.data)
        }


        }catch(error){
          toast.error('An error occurred while creating the course.');
          console.error('Error:', error);
          setCreating(false)
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
              className="ml-5 text-white inline-flex items-center bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => document.getElementById("my_modal_6").showModal()}
            >
              <svg
                className="mr-1 ml-1 w-6 h-6"
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
                   onClick={()=>{
                    formik.resetForm()
                    setCreating(false)
                  }}
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
                        <div className="text-red-500 text-sm">
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
                        <div className="text-red-500 text-sm">
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
                        <div className="text-red-500 text-sm">
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
                        <div className="text-red-500 text-sm">
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
                        <div className="text-red-500 text-sm">
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
                        placeholder="₨ 3000"
                        required=""
                      />
                      {formik.touched.price && formik.errors.price && (
                        <div className="text-red-500 text-sm">
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
                        <div className="text-red-500 text-sm">
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
                        <div className="text-red-500 text-sm">
                          {formik.errors.cover_image}
                        </div>
                      )}
                    </div>
                  </div>

                 <div className="container">
               

{creating ? (
  <button disabled type="button" class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
  <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
  </svg>
  creating...
  </button>



):(
  <button  type="submit" class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
 
  + create
  </button>
  
)}





                 </div>

                  
                </form>
              </div>
            </dialog>
    </>
  )
}

export default CourseCreationModal
import React,{useEffect} from 'react'
import { initFlowbite } from 'flowbite'
import InstructorSideBar from './InstructorSideBar';


const InstructorProfilePage = () => {

    useEffect(()=>{
        initFlowbite();
    },[]);


  return (

<>
  {/* <div className="grid grid-cols-4 gap-3 h-screen"> */}
  <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
    {/* Sidebar */}
    {/* <div className="bg-blue-400 rounded-lg shadow-xl h-full col-span-1 min-h-[50px] hidden md:flex"> */}
     <InstructorSideBar/>

    {/* Dashboard Space */}
    {/* <div className="col-span-3"> */}
    <div className="col-span-1 md:col-span-3 w-full min-h-fit md:w-auto">
      {/* Dashboard content goes here */}
      <div className="bg-blue-200 h-full shadow-xl min-h-[50px]">
        {/* Dashboard content goes here */}
      


<div className=''>

</div>

<div className='bg-green-300 border border-solid h-24 min-w-fit flex items-center'>
  <h3 className="m-5 text-3xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white"> Profile</h3>
  <p class="font-light mt-5 text-gray-900 md:text-lg xl:text-xl dark:text-gray-400">Manage your profile here.</p>
</div>



<section className="text-gray-600 body-font">
  <div className="container px-1 py-2 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto ">
      <div className="rounded-lg overflow-hidden">
        {/* <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="https://dummyimage.com/1200x500"
        /> */}
        {/* <h2 className='text-xl'>Profile</h2> */}
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-32 h-32 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img className='rounded-full w-32 h-32 border-4 border-opacity-10' src="/fadil_profile.jpg" alt="" />
          
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Fadil Ameen
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-base">
              kerala, India.
      
            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh
            mi umami everyday carry hexagon locavore direct trade art party.
            Locavore small batch listicle gastropub farm-to-table lumbersexual
            salvia messenger bag. Coloring book flannel truffaut craft beer
            drinking vinegar sartorial, disrupt fashion axe normcore meh
            butcher. Portland 90's scenester vexillologist forage post-ironic
            asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst
            before they sold out four loko. 3 wolf moon brooklyn.
          </p>



<button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Edit Bio</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Edit Bio</h3>


{/* Modal body */}
<form action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue="iPad Air Gen 5th Wi-Fi"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex. Apple iMac 27“"
              />
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                defaultValue="Google"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex. Apple"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                State
              </label>
              <input
                type="text"
                
                name="state"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="eg: kerala"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <select
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">India</option>
                <option value="TV">Russia</option>
                <option value="PC">Ireland</option>
                <option value="GA">Pakistan</option>
                <option value="PH">UAE</option>
              </select>
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
                rows={5}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write a description..."
                defaultValue={
                  "Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US"
                }
              />
            </div>

            <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  <span className="label-text">Profile Image</span>
                </label>
                <input
                  type="file"
                  name="profile_image"
                  // onChange={handleImageChange}
                />
              </div>




          </div>
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="text-white bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Save
            </button>
           
          </div>
        </form>


    
  </div>
</dialog>





        </div>
      </div>
    </div>
  </div>
</section>









        





      </div>
    </div>
  </div>
</>









  )
}

export default InstructorProfilePage
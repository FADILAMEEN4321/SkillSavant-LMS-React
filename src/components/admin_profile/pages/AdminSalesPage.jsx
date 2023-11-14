import React,{useEffect, useState} from 'react'
import AdminMobileSideBar from '../features/AdminMobileSideBar';
import AdminSideBar from '../features/AdminSideBar';
import {fetchSales} from './../../../api/adminAPI';
import SalesDetailsModal from '../features/SalesDetailsModal';

const AdminSalesPage = () => {
  
  const [sales, setSales] = useState([]) 
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchSaleData = async ()=>{
      try{
        const response = await fetchSales();
        if(response.status === 200){
          console.log(response.data)
          setSales(response.data);
          setLoading(false);
        } 
      }catch(error){
        console.log(error)

      }
    }

    fetchSaleData();


  },[])

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

          
          <div className="container">

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  
  {loading ? (
    <p>loading...</p>
  ):(
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        
        <th scope="col" className="px-6 py-3">
          Order ID
        </th>
        <th scope="col" className="px-6 py-3">
          student
        </th>
        <th scope="col" className="px-6 py-3">
          total amount
        </th>
        <th scope="col" className="px-6 py-3">
          transaction date
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      
      {sales.map((sale)=>(
        <tr key={sale.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {sale.order_id}
        </th>
        <td className="px-6 py-4">{sale.student_first_name} {sale.student_last_name}</td>
        <td className="px-6 py-4">{sale.total_amount}</td>
        <td className="px-6 py-4">{sale.transaction_date}</td>
        <td className="px-6 py-4">

        <SalesDetailsModal sale={sale}/>

        </td>
      </tr>
      ))}




      
      
     
    </tbody>
  </table>
  )}






  <nav
    className="flex items-center justify-between pt-4"
    aria-label="Table navigation"
  >
    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
      Showing{" "}
      <span className="font-semibold text-gray-900 dark:text-white">1-10</span>{" "}
      of{" "}
      <span className="font-semibold text-gray-900 dark:text-white">1000</span>
    </span>
    <ul className="inline-flex -space-x-px text-sm h-8">
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          1
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          2
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-current="page"
          className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        >
          3
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          4
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          5
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </a>
      </li>
    </ul>
  </nav>
</div>



          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSalesPage
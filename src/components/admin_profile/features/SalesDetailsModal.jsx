import React from 'react'

const SalesDetailsModal = ({sale}) => {
  return (
    <>
    <button 
        onClick={()=>document.getElementById(`sales_details_modal${sale.id}`).showModal()}
        className='bg-blue-700 hover:bg-blue-800 p-2 px-5 text-center text-white rounded-md font-semibold'>
          view details
        </button>

        <dialog id={`sales_details_modal${sale.id}`} className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>


   
  {/* Modal header */}


      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">Transaction Details</div>
        <p className="text-gray-700 text-base">
        <span className='text-lg font-semibold'>Course: </span> {sale.course_title}<br />
          <span className='text-lg font-semibold'>Transaction ID: </span> {sale.id}<br />
          <span className='text-lg font-semibold'>Student: </span>
           {sale.student_first_name} {sale.student_last_name}<br />
           <span className='text-lg font-semibold'>Instructor: </span>{sale.instructor_first_name} {sale.instructor_last_name}<br />
           <span className='text-lg font-semibold'>Total Amount: </span> {sale.total_amount}<br />
           <span className='text-lg font-semibold'>Instructor Share: </span> {sale.instructor_share}<br />
           <span className='text-lg font-semibold'>Company Share: </span> {sale.company_share}<br />
           <span className='text-lg font-semibold'>Transaction Date: </span> {sale.transaction_date}<br />
           <span className='text-lg font-semibold'>Order ID: </span> {sale.order_id}<br />
           <span className='text-lg font-semibold'>Payment ID: </span> {sale.payment_id}<br />
           
        
        </p>
      </div>
   
  
  
  
  

    
  </div>
</dialog>
    </>
  )
}

export default SalesDetailsModal
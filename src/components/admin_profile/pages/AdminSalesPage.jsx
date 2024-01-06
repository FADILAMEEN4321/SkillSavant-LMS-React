import React, { useEffect, useState } from "react";
import AdminMobileSideBar from "../features/AdminMobileSideBar";
import AdminSideBar from "../features/AdminSideBar";
import { fetchSales } from "./../../../api/adminAPI";
import SalesDetailsModal from "../features/SalesDetailsModal";

const AdminSalesPage = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSaleData = async () => {
      try {
        const response = await fetchSales();
        if (response.status === 200) {
          setSales(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSaleData();
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

          <div className="relative container bg-gray-900 min-h-[150px] rounded-md mb-4">
            <div className="absolute inset-0 bg-opacity-60 bg-gray-900 rounded-md" />
            <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
              <h1 class="mb-3 text-3xl font-extrabold leading-none tracking-tight capitalize text-white md:text-3xl lg:text-4xl dark:text-white">
                Sales{" "}
                <span class="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-blue-600">
                  management.
                </span>
              </h1>

              <p class="text-sm font-normal capitalize text-gray-200 lg:text-lg">
                Manage sales of skill savant.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              {loading ? (
                <p>loading...</p>
              ) : (
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
                    {sales.map((sale) => (
                      <tr
                        key={sale.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {sale.order_id}
                        </th>
                        <td className="px-6 py-4">
                          {sale.student_first_name} {sale.student_last_name}
                        </td>
                        <td className="px-6 py-4">{sale.total_amount}</td>
                        <td className="px-6 py-4">{sale.transaction_date}</td>
                        <td className="px-6 py-4">
                          <SalesDetailsModal sale={sale} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSalesPage;

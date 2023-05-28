import React, { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FcShop, FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { AuthContext } from "../../../Context/UserContext";
import { useQueryClient } from "@tanstack/react-query";

const Buyerdashboard = () => {
    const [Booking, setbooking] = useState([])
  const { user } = useContext(AuthContext);
  console.log(Booking, "line 10 from Book page")

  const { data: bookings = [], refetch } = useQueryClient({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://dhaka-cars-server-git-main-rashariful.vercel.app/api/v1/booking/merchant?email=${user?.email}`
      );
      const data = await res.json();
           setbooking(data)
    },
  });

  console.log(bookings);

  return (
    <div className="w-[80%] mx-auto min-h-screen mt-10">
      <h2 className="text-2xl font-bold capitalize text-center text-slate-600 mb-10">
        User dashboard
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* <div className="border py-5 px-10 flex flex-col items-center bg-white rounded-lg shadow-md hover:skal-75 ">
            <div className="flex items-center justify-center border border-slate-500 rounded-full w-14 h-14">
              <FcShop className="w-8 h-8 text-slate-500"></FcShop>
            </div>
            <h3 className="text- font-semibold mb-5 mt-2">Products</h3>
            <p className="text-2xl font-bold mt-5 mb-2">Product length</p>
            <p className="text-gray-500">Total products</p>
          </div>
          <div className="border py-5 px-10 flex flex-col items-center bg-white rounded-lg shadow-md hover:skal-75 ">
            <div className="flex items-center justify-center border border-slate-500 rounded-full w-14 h-14">
              <FcBusinessman className="w-8 h-8 text-slate-500"></FcBusinessman>
            </div>
            <h3 className="text- font-semibold mb-5 mt-2">Seller</h3>
            <p className="text-2xl font-bold mt-5 mb-2">details</p>
            <p className="text-gray-500">Total seller</p>
          </div>
          <div className="border py-5 px-10 flex flex-col items-center bg-white rounded-lg shadow-md hover:skal-75 ">
            <div className="flex items-center justify-center border border-slate-500 rounded-full w-14 h-14">
              <FcBusinesswoman className="w-8 h-8 text-slate-500"></FcBusinesswoman>
            </div>
            <h3 className="text- font-semibold mb-5 mt-2">Buyer</h3>
            <p className="text-2xl font-bold mt-5 mb-2">details dami</p>
            <p className="text-gray-500">Total buyer</p>
          </div> */}
        <div className="border py-5 px-10 flex flex-col items-center bg-white rounded-lg shadow-md hover:skal-75 ">
          <div className="flex items-center justify-center border border-slate-500 rounded-full w-14 h-14">
            <FiShoppingCart className="w-8 h-8 text-slate-500"></FiShoppingCart>
          </div>
          <h3 className="text- font-semibold mb-5 mt-2">Bookings</h3>
          <p className="text-2xl capitalize font-bold mt-5 mb-2">
            booking lenght
          </p>
          <p className="text-gray-500">Total booking {bookings?.length} </p>
          {bookings?.map((book) => console.log(book))}
        </div>
      </div>
    </div>
  );
};

export default Buyerdashboard;

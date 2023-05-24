import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";
import { Link } from "react-router-dom";
import {
  MdDelete,
  MdDeleteForever,
  MdDriveFileRenameOutline,
} from "react-icons/md";

const MyBookings = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://dhaka-cars-server-git-main-rashariful.vercel.app/api/v1/booking/merchant?email=${user?.email}`
      );
      const data = await res.json();
      return data.data;
    },
  });
  console.log(bookings);
  const handleDelete = (id) => {
    fetch(`https://dhaka-cars-server-git-main-rashariful.vercel.app/api/v1/booking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
        }
        refetch();
      });
  };

  const handleUpdate = (id) => {
    console.log(id);
    fetch(`https://dhaka-cars-server-git-main-rashariful.vercel.app/api/v1/booking/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-2xl font-bold my-10">All booking Details</h1>
        <div className="lg:w-2/2 w-full mx-auto overflow-auto">
          <table className="table w-full whitespace-no-wrap">
            <thead>
              <tr>
                <th>No</th>
                <th>User name</th>
                <th>Pickup Date & Time</th>
                <th>pickup location</th>
                <th>Car Type</th>
                <th>Status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking?.userName}</td>
                  <td>{booking?.pickupDateTime}</td>
                  <td>{booking?.PickUpLocation}</td>
                  <td>{booking?.carType}</td>
                  <td>
                    <button className="btn btn-warning btn-xs">
                      proccesing
                    </button>
                  </td>
                  {/* <td>
                    <Link to={`/dashboard/booking-details/${booking?._id}`}>
                      <button className="btn btn-sm">Details</button>
                    </Link>
                  </td> */}
               
                    <td>
                      <Link to={`/dashboard/booking-update/${booking?._id}`}>
                        <button className="btn gap-2 btn-sm bg-blue-600 border-none hover:bg-blue-700">
                          {" "}
                          <MdDriveFileRenameOutline
                            color="white"
                            size={24}
                          />{" "}
                          edit item{" "}
                        </button>
                      </Link>
                    </td>
                    <td
                      className="cursor-pointer "
                      onClick={() => handleDelete(booking?._id)}
                    >
                      <button className="btn gap-2 btn-sm bg-rose-600 border-none hover:bg-rose-700">
                        {" "}
                        <MdDelete color="white" size={24} /> Delete item{" "}
                      </button>
                    </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyBookings;

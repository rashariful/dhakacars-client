import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  console.log(process.env)

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_ROOT}/booking/merchant?email=${user?.email}`
        // "http://localhost:5000/api/v1/booking"
        // "https://coderbyte.com/api/challenges/json/json-cleaning"
      );
      const data = await res.json();
      return data.data;
    },
  });
  console.log("22 line", bookings);

  return (
    <div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-2xl font-bold my-10">All booking Details</h1>
        <div className="lg:w-2/2 w-full mx-auto overflow-auto">
          <table className="table w-full whitespace-no-wrap">
            <thead>
              <tr>
                <th>No</th>
                <th>date</th>
                <th>Car Type</th>
                <th>Status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{booking?.pickupDateTime}</td>
                  <td>{booking?.carType}</td>
                  <td>
                    <button className="btn btn-warning btn-xs">
                      proccesing
                    </button>
                  </td>
                  <td>
                    <Link to={`/dashboard/booking-details/${booking?._id}`}>
                      <button className="btn btn-sm">Details</button>
                    </Link>
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

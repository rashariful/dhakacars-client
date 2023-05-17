import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../../Context/UserContext";

const DutyDetailsShow = () => {

const {user} = useContext(AuthContext)

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_ROOT}/api/v1/dutyDetails/merchant?email=${user?.email}`
      );
      const data = await res.json();
      return data.data;
    },
  });
  console.log(products)


  const handleDelete = (id) => {
    console.log(id);
    fetch(`${process.env.REACT_APP_ROOT}/api/v1/dutyDetails/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
        }
        refetch();
      });
  };

  return (
    <div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-2xl font-bold my-10">All Duty Details</h1>
        <div className="lg:w-2/2 w-full mx-auto overflow-auto">
          <table className="table w-full whitespace-no-wrap">
            <thead>
              <tr>
                <th>No</th>
                <th>date</th>
                <th>User Name</th>
                <th>Driver Name</th>
                <th>Driver Number</th>
                <th>Car number</th>
                <th>lunch</th>
                <th>dinner</th>
                <th>start time</th>
                <th>end time</th>
                <th>over time</th>
                <th>cng</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{product?.pickUpDate}</td>
                  <td>{product?.userName}</td>
                  <td>{product?.driverName}</td>
                  <td>{product?.driverNumber}</td>
                  <td>{product?.carNumber}</td>
                  <td>{product?.lunch}</td>
                  <td>{product?.dinner}</td>
                  <td>{product?.startTime}</td>
                  <td>{product?.endTime}</td>
                  <td>{product?.overTime}</td>
                  <td>{product?.cngConst}</td>

                  <td>
                    <button
                      onClick={() => handleDelete(product?._id)}
                      className="btn btn-sm"
                    >
                      Delete
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

export default DutyDetailsShow;

import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../../../../Context/UserContext";

const DutyDetailsShow = () => {
  const { user } = useContext(AuthContext);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://dhaka-cars-server-git-main-rashariful.vercel.app/api/v1/dutyDetails/merchant?email=${user?.email}`
      );
      const data = await res.json();
      return data.data;
    },
  });
  // console.log(products)

  const handleDelete = (id) => {
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
      <div></div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-2xl font-bold my-10">All Duty Details</h1>
        <div className="lg:w-2/2 shadow-md w-full mx-auto overflow-auto">
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
                <tr key={product._id}>
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
                  <td>{product?.cngCost}</td>

                  {/* <button
                    className="btn btn-sm bg-white border border-red-500"
                    onClick={() => setShowConfirmation(true)}
                  >
                    <MdDeleteForever color="red" size={24} />
                  </button>

                  {showConfirmation && (
                    <div>
                      <p>Are you sure you want to delete this product?</p>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => handleDelete(product?._id)}
                      >
                        Yes
                      </button>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => setShowConfirmation(false)}
                      >
                        No
                      </button>
                    </div>
                  )} */}

                  <td
                    className="cursor-pointer "
                    onClick={() => handleDelete(product?._id)}
                  >
                    <MdDeleteForever color="red" size={24} />
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

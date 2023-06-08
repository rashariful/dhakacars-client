import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../../../../Context/UserContext";

const DutyDetailsShow = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [products, setProducts] = useState([]);
  console.log(products);
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);
  const handleClose = () => {
    setShowModal(false);
  };

  products.map((p) => {
    const lunch = p.lunch;
    const dinner = p.dinner;
    const overTime = p.overTime;
 
  
    // console.log(cngCost)
    const calculateTotalCost = (cngCost, tollParking) => {

      const totalCngCost = cngCost;
      const totalTollCost = tollParking;
  
      const totalCost = totalCngCost + totalTollCost ;
      console.log(totalCost, "line 31")

    
    };

    const cngCost = p.cngCost;
    const tollParking = p.tollParking;
      const result = calculateTotalCost(cngCost,tollParking );
    console.log("Total Cost:", result);



  });







  // const calculateTotalCost =(lunchCount, dinnerCount, overtimeHours, cngCost, tollCost, parkingCost)=> {
  //   const lunchCost = 150;
  //   const dinnerCost = 150;
  //   const overtimeRate = 50;

  //   const totalLunchCost = lunchCount * lunchCost;
  //   const totalDinnerCost = dinnerCount * dinnerCost;
  //   const totalOvertimeCost = overtimeHours * overtimeRate;

  //   const totalCngCost = cngCost;
  //   const totalTollCost = tollCost;
  //   const totalParkingCost = parkingCost;

  //   const totalCost =
  //     totalLunchCost +
  //     totalDinnerCost +
  //     totalOvertimeCost +
  //     totalCngCost +
  //     totalTollCost +
  //     totalParkingCost;

  //   return totalCost;
  // }

  // // Example usage
  // const lunchCount = 5;
  // const dinnerCount = 10;
  // const overtimeHours = 200;
  // const cngCost = 1000;
  // const tollCost = 10;
  // const parkingCost = 50;

  // const result = calculateTotalCost(lunchCount, dinnerCount, overtimeHours, cngCost, tollCost, parkingCost);
  // console.log("Total Cost:", result);

  const { data = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_ROOT}/api/v1/dutyDetails/merchant?email=${user?.email}`
      );
      const data = await res.json();
      setProducts(data.data);
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

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../../Context/UserContext";

const AddDutyDetails = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const sellerName = user.displayName;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBooking = (data) => {
    const dutydetails = {
      userName: data.userName,
      email,
      driverName: data.driverName,
      driverNumber: data.driverNumber,
      carNumber: data.carNumber,
      cngCost: data.cng,
      PickUpDate: data.PickUpDate,
      startTime: data.startTime,
      endTime: data.endTime,
      startKM: data.startKm,
      endKM: data.endKm,
      overTime: data.overTime,
      tollParking: data.tollParking,
      lunch: data.lunch,
      dinner: data.dinner,
    };

    fetch(`${process.env.REACT_APP_ROOT}/dutyDetails`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dutydetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data));

    console.log(dutydetails);
    toast.success("Details added", {
      position: toast.POSITION.TOP_CENTER,
    });
    // navigate("/dashboard/show-details");
  };


  return (
    <div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-600 capitalize text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Duty Details
          </h2>
          <p className="text-rose-800   font-bold text-center mb-4 md:mb-4"></p>

          <form
            onSubmit={handleSubmit(handleBooking)}
            className="max-w-2xl border rounded-lg mx-auto shadow-md"
          >
            <div className="grid grid-cols-2 gap-5 p-5">
              {/* user Name */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  User Name
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("userName", {
                    required: "User Name is required",
                  })}
                />
                {errors.userName && (
                  <p className="text-red-500">{errors.userName.message}</p>
                )}
              </div>
              {/* Driver name */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Driver Name
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("driverName", {
                    required: "Driver Name is required",
                  })}
                />
                {errors.driverName && (
                  <p className="text-red-500">{errors.driverName.message}</p>
                )}
              </div>
              {/* Driver number */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Driver Number
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("driverNumber", {
                    required: "Driver Number is required",
                  })}
                />
                {errors.driverNumber && (
                  <p className="text-red-500">{errors.driverNumber.message}</p>
                )}
              </div>
              {/* car number */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Car Number
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("carNumber", {
                    required: "Car Number is required",
                  })}
                />
                {errors.carNumber && (
                  <p className="text-red-500">{errors.carNumber.message}</p>
                )}
              </div>
              {/* cng cost */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  CNG cost
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("cng", {
                    required: "CNG cost is required",
                  })}
                />
                {errors.cngCost && (
                  <p className="text-red-500">{errors.cngCost.message}</p>
                )}
              </div>
              {/* Pick-up Date */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Pick-up Date
                </label>
                <input
                  type="date"
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("PickUpDate", {
                    required: "Pick-up Date is required",
                  })}
                />
                {errors.PickUpDate && (
                  <p className="text-red-500">{errors.PickUpDate.message}</p>
                )}
              </div>
              {/* Start Time */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Start Time
                </label>
                <input
                  type="time"
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("startTime", {
                    required: "Start Time is required",
                  })}
                />
                {errors.startTime && (
                  <p className="text-red-500">{errors.startTime.message}</p>
                )}
              </div>
              {/* End Time */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  End Time
                </label>
                <input
                  type="time"
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("endTime", {
                    required: "End Time is required",
                  })}
                />
                {errors.endTime && (
                  <p className="text-red-500">{errors.endTime.message}</p>
                )}
              </div>
              {/* Start KM */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Start KM
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("startKm", {
                    required: "Start KM is required",
                  })}
                />
                {errors.startKm && (
                  <p className="text-red-500">{errors.startKm.message}</p>
                )}
              </div>
              {/* End KM */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  End KM
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("endKm", {
                    required: "End KM is required",
                  })}
                />
                {errors.endKm && (
                  <p className="text-red-500">{errors.endKm.message}</p>
                )}
              </div>
              {/* Over Time */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Over Time
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("overTime")}
                />
              </div>
              {/* Toll/Parking */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Toll/Parking
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("tollParking", {})}
                />
              </div>
              {/* Lunch*/}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Lunch
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("lunch")}
                />
              </div>
              {/* Dinner*/}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Dinner
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("dinner")}
                />
              </div>
            </div>

            <div className="py-5 px-5">
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Note (<small>optional</small>)
                </label>
                <textarea
                  className="textarea textarea-bordered w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("Note")}
                  placeholder="type your note"
                ></textarea>

                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-52 btn btn-warning my-5">Add Details</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddDutyDetails;

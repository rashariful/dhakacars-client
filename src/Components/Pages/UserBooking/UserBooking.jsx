import React from 'react';
import { useForm } from 'react-hook-form';

const UserBooking = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const handleBooking = data =>{
        const bookingInfo = {
          userName: data.userName,
          phoneNumber: data.phoneNumber,
          email: data.email,
          carType: data.carType,
          pickupDateTime: data.pickupDateTime,
          PickUpLocation: data.PickUpLocation,
          Note: data.Note,
        };
        console.log(bookingInfo);
    }


    return (
      <div>
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 className="text-gray-600 capitalize text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
              Book your car today
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
                {/* Phone Number */}
                <div>
                  <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500">{errors.phoneNumber.message}</p>
                  )}
                </div>
                {/* Email */}
                <div>
                  <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                    Email
                  </label>
                  <input
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.Email && (
                    <p className="text-red-500">{errors.Email.message}</p>
                  )}
                </div>
                {/* car type */}
                <div>
                  <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                    Car Type
                  </label>
                  <select
                    {...register("carType", {
                      required: "car Type is required",
                    })}
                    className="select capitalize border border-gray-200 w-full bg-gray-50 text-gray-800 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  >
                    <option>Sedan</option>
                    <option>Noah</option>
                    <option>Microbus</option>
                  </select>

                  {errors.carType && (
                    <p className="text-red-500">{errors.carType.message}</p>
                  )}
                </div>
                {/* Pick-up Date */}
                <div>
                  <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                    Pick-up Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    {...register("pickupDateTime", {
                      required: "pickup Date & Time are required",
                    })}
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  ></input>

                  {errors.pickupDateTime && (
                    <p className="text-red-500">
                      {errors.pickupDateTime.message}
                    </p>
                  )}
                </div>
                {/* Pick-up Location*/}
                <div>
                  <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                    Pick-up Location
                  </label>
                  <input
                    {...register("PickUpLocation", {
                      required: "Pick-up Location is required",
                    })}
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  ></input>

                  {errors.PickUpLocation && (
                    <p className="text-red-500">
                      {errors.PickUpLocation.message}
                    </p>
                  )}
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
                <button className="w-52 btn btn-warning my-5">
                 Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UserBooking;
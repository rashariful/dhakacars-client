import React from "react";

const CarSearch = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto border rounded-lg shadow-lg p-5">
        {/* <h1>Car Search for you</h1> */}
        <div className="flex flex-col flex-wrap sm:flex-row gap-3">
          <div>
            <p>Pickup Location</p>
            <select className=" text-lg border p-2 w-full max-w-xs rounded-md border-rose-500 outline-rose-400">
              <option disabled selected>
                Pickup address
              </option>
              <option>Uttara</option>
              <option>Kikhlet</option>
              <option>Banani</option>
              <option>Gulshan</option>
            </select>
          </div>
          <div>
            <p>Pickup Date</p>
            <input
              className="text-lg border w-full max-w-xs p-2 rounded-md border-rose-500 outline-rose-400"
              type="date"
              name="Date"
              placeholder="date"
            />
          </div>
          <div>
            <p>Pickup Time</p>
            <input
              className="text-lg border w-full max-w-xs p-2 rounded-md border-rose-500"
              type="Time"
              name="Date"
              placeholder="date"
            />
          </div>
          <div>
            <p>Drop Date</p>
            <input
              className="text-lg border w-full max-w-xs p-2 rounded-md border-rose-500"
              type="date"
              name="Date"
              placeholder="date"
            />
          </div>
          <div>
            <p>Drop Time</p>
            <input
              className="text-lg border w-full max-w-xs p-2 rounded-md border-rose-500"
              type="Time"
              name="Date"
              placeholder="date"
            />
          </div>
          <div className="flex justify-center items-center mt-10">
        <button className="btn bg-rose-500 outline-none border-none hover:bg-rose-600 transition-all duration-300 btn-wide">search car</button>
        </div>
          
        </div>
       
      </div>
    </section>
  );
};

export default CarSearch;

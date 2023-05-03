import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="bg-white -z-0 pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
              <h1 className="text-black-700 capitalize text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                Easy and fast way to
                <span className="text-orange-600"> rent your car</span> today
              </h1>
              <p className="lg:w-4/5  text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
                Get a car wherever and whenever you need it with your ios or
                android device
              </p>
           
              <div className="">
          
               <button className="btn btn-warning btn-wide"> Book your car</button>
              
              </div>
            </div>

            <div className="xl:w-5/12 h-48 lg:h-auto overflow-hidden rounded-lg">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/taxi-booking-travel-service-4712749-3932819.png"
                loading="lazy"
                alt="by Fakurian Design"
                className="w-full h-full object-center object-contain"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;

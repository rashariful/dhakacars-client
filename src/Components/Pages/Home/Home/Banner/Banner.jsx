import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
              <h1 class="text-black-800 capitalize text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                Easy and fast way to{" "}
                <span className="text-rose-500">rent your car</span> today
              </h1>

              <p class="lg:w-4/5  text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
                Get a car wherever and whenever you need it with your ios or
                android device
              </p>

              <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <button className="btn bg-rose-500 rounded-full outline-none border-none hover:bg-rose-600">
                  Book your car
                </button>
              </div>
            </div>

            <div class="xl:w-5/12 h-48 lg:h-auto overflow-hidden rounded-lg">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/taxi-booking-travel-service-4712749-3932819.png"
                loading="lazy"
                alt="by Fakurian Design"
                class="w-full h-full object-center object-contain"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;

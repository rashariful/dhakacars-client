import React from "react";
import { Link } from "react-router-dom";

import "../../../../styles/AboutCompStyles.css";
// import {car,carout,carshop,worker} from '../../../../assets/AboutCompImages';

const About = () => {
  return (
    <div className="aboutcomp-sec">
      <div className="relative mb-20">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/14/02/55/path-1822448_1280.jpg"
          alt="Top Image"
          className="w-full object-cover h-96"
        />
        <h3 className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl ">
          About US
        </h3>
        <div className="text-sm ml-32 absolute text-white bottom-5 breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div class="md:pt-8">
              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md: md:text-left">
                DhakaCars: Revolutionizing Car Rentals in Dhaka, Bangladesh
              </h1>
              <p class="text-center text-lg font-bold md:text-left">
                Introduction:
              </p>

              <p class=" text-gray-500 sm:text-lg md:mb-8">
                DhakaCars, an innovative car rental company based in Dhaka,
                Bangladesh, is transforming the way people access convenient and
                reliable transportation services. With a mission to provide
                hassle-free and affordable car rentals, DhakaCars aims to
                empower individuals and businesses to navigate the bustling
                streets of Dhaka with ease. This article explores DhakaCars'
                vision, mission, and their commitment to revolutionizing the car
                rental industry in Bangladesh.
              </p>
              <p class="text-center text-lg font-bold md:text-left">
                Mission Statement:
              </p>

              <p class=" text-gray-500 sm:text-lg md:mb-8">
                DhakaCars' mission is to redefine car rentals in Dhaka, offering
                customers a seamless and convenient experience. By leveraging
                technology and providing exceptional customer service, DhakaCars
                aims to be the go-to platform for reliable, affordable, and
                efficient transportation solutions in the city. The company
                strives to exceed customer expectations by delivering
                exceptional service quality, while also contributing to the
                local economy and fostering sustainable growth.
              </p>
              <p class="text-center text-lg font-bold md:text-left">Vision:</p>

              <p class=" text-gray-500 sm:text-lg md:mb-8">
                DhakaCars envisions a future where transportation in Dhaka is no
                longer a challenge, but a hassle-free experience. The company
                aims to create a culture of accessibility and convenience by
                offering a wide range of vehicles for various needs and budgets.
                Through continuous innovation and technological advancements,
                DhakaCars seeks to become the preferred choice for locals and
                tourists alike, ensuring seamless mobility solutions throughout
                the city.
              </p>
              <p class="text-center text-lg font-bold md:text-left">Our Aim:</p>
              <p class="text-gray-500 sm:text-lg">
                DhakaCars is dedicated to fulfilling several key aims:
              </p>
              <p>
                <span className="text-md font-semibold text-slate-700">1.</span>
                <span className="ml-2 font-bold text-black">Convennience:</span>
                DhakaCars strives to make car rentals as effortless as possible,
                ensuring a streamlined booking process and providing customers
                with easy access to a diverse fleet of vehicles. Through an
                intuitive online platform, users can conveniently reserve a car
                within minutes, saving time and effort.
              </p>
              <p>
                <span className="text-md font-semibold text-slate-700">2.</span>
                <span className="ml-2 font-bold text-black">
                  Affordability:
                </span>
                <span className="text-gray-500 ml-2">
                DhakaCars believes that reliable transportation should be
                accessible to everyone. By offering competitive pricing and
                flexible rental options, the company aims to provide
                cost-effective solutions that cater to various budgets without
                compromising on quality or service.</span>
              </p>
              <p>
                <span className="text-md font-semibold text-slate-700">3.</span>
                <span className="ml-2 font-bold text-black">
                  Exceptional Service:
                </span>
                <span className="text-gray-500 ml-2">
                DhakaCars places great emphasis on customer satisfaction. Their
                dedicated team is committed to delivering top-notch service,
                ensuring that customers receive a warm welcome, personalized
                assistance, and timely support throughout their rental
                experience. By going the extra mile, DhakaCars aims to build
                long-term relationships with their customers.</span>
              </p>
              <p>
                <span className="text-md font-semibold text-slate-700">4.</span>
                <span className="ml-2 font-bold text-black">
                  Quality and Safety:
                </span>
                <span className="text-gray-500 ml-2">
                DhakaCars prioritizes the safety and comfort of their customers.
                Every vehicle in their fleet undergoes regular maintenance and
                inspection to ensure optimal performance and reliability.
                Additionally, the company follows stringent safety protocols,
                providing peace of mind to customers during their journeys.</span>
              </p>
              <p>
                <span className="text-md font-semibold text-slate-700">5.</span>
                <span className="ml-2 font-bold text-black">
                  Community Impact:
                </span>
                <span className="text-gray-500 ml-2">
                DhakaCars recognizes its role in contributing to the local
                community and economy. By creating job opportunities and
                collaborating with local partners, the company aims to foster
                sustainable growth and make a positive social impact in Dhaka
                and beyond. </span>
              </p>
              <p className="text-gray-500">
                In conclusion, DhakaCars is revolutionizing the car rental
                industry in Dhaka, Bangladesh, by prioritizing convenience,
                affordability, exceptional service, quality, and safety. With
                their innovative approach, commitment to customer satisfaction,
                and dedication to the community, DhakaCars is well on its way to
                becoming the premier car rental platform in Dhaka, empowering
                individuals and businesses to navigate the city effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

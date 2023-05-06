import React from "react";
import logo from "../../../assets/images/Logo_Dhakacars.svg"
import { FaFacebook, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-gray-800">
      <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
          <div className="col-span-full lg:col-span-2">
            <div className="lg:-mt-2 mb-4">
              <a
                href="/"
                className="inline-flex items-center text-gray-100 text-xl md:text-2xl font-bold gap-2"
                aria-label="logo"
              >
               <img src={logo} className="bg-slate-700 rounded-md w-64 h-auto p-2" alt="" />
              </a>
            </div>

            <p className="text-gray-400 sm:pr-8 mb-6">
             This is car rental company in Dhaka Bangladesh.
             we offering cheapest price in Dhaka city
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/dhakacars.co"
                target="_blank"
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
             <FaFacebookSquare size={24}/>
              </a>

              <a
                href="/"
                target="_blank"
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
               <FaTwitterSquare size={24}/>
              </a>

              <a
                href="/"
                target="_blank"
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
                <FaInstagramSquare size={24}/>
              </a>

            </div>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Products
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Overview
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Solutions
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Pricing
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Customers
                </a>
              </div>
            </nav>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Company
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  About
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Investor Relations
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Jobs
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Press
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Blog
                </a>
              </div>
            </nav>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Support
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Contact
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Documentation
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Chat
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  FAQ
                </a>
              </div>
            </nav>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Legal
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link
                 to="/terms-of-service"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Terms of Service
                </Link>
              </div>

              <div>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Privacy Policy
                </Link>
              </div>

              <div>
                <a
                  href="https://www.termsfeed.com/live/99100274-0890-4e4e-a717-63cb72a9ad54"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Cookie settings
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="text-gray-400 text-sm text-center border-t border-gray-800 py-8">
          © 2023 - Present DhakaCars. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

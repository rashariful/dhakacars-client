import React, { useState, useEffect } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setNavbarVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 ease-in-out ${
        isNavbarVisible ? "transform translateY(0)" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center bg-slate-800 h-8 px-10">
        <div className="flex justify-between gap-5">
          <div className="flex items-center gap-3">

            <span className="text-slate-300 hover:text-slate-500 transition-colors duration-300">
              <FaPhoneSquare size={18} />
            </span>
           
              <a className="text-gray-300" href="tel:+8801850273117">
                +8801850273117
              </a>
           
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-300 hover:text-slate-500 transition-colors duration-300">
              <MdEmail size={18} />
            </span>

            <span className="text-gray-500 ">
              <span className="text-gray-300">Dhakacars.com@gmail.com</span>
            </span>
          </div>
        </div>

        {/* social media start */}
        <div className="flex items-center gap-3">
          <div>
            <a
              href="https://www.facebook.com/dhakacars.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-slate-500 transition-colors duration-300"
            >
              <FaFacebookSquare size={18} />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/dhakacars.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-slate-500 transition-colors duration-300"
            >
              <FaInstagramSquare size={18} />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/company/dhakacar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-slate-500 transition-colors duration-300"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

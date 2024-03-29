import React, { useState } from "react";
// import '../styles/FaqStyles.css';
import "../../../../styles/FaqStyles.css";

import { FaAngleDown } from "react-icons/fa";

const Faq = () => {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "bg-[#FF4C30] text-white" : "";
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-intro">
          <h4 className="text-xl font-bold mt-20">FAQ</h4>
          <h4 className="text-4xl font-black text-slate-600 mb-8">Frequently Asked Questions</h4>
          <p className="text-slate-500">
            Frequently Asked Questions About the Car Rental Booking Process on <br/>
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:w-1/2 sm:w-full mx-auto">
          {/* ans 01 */}
          <div className="faq-box border rounded-md">
            <div
              className={`flex justify-between md:text-xl px-8 py-4 rounded-t-xl sm:text-md font-semibold capitalize transition-all duration-300 ${getClassQuestion(
                "q1"
              )}`}
              onClick={() => openQ("q1")}
              id="q1"
            >
              <p>01. What is special about rental car deals?</p>
              <FaAngleDown size={25} />
            </div>

            <div
              className={`faq_answer text-slate-600 text-left ${getClassAnswer(
                "q1"
              )}`}
              onClick={() => openQ("q1")}
              id="q1"
            >
              <p>
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various options,
                you can find deals that offer lower prices, additional services,
                or better car models. You can find car rental deals by
                researching online and prices from different rental companies
              </p>
            </div>
          </div>
          {/* ans 02 */}
          <div className="faq-box border rounded-md">
            <div
              className={`flex justify-between md:text-xl px-8 py-4 rounded-t-xl sm:text-md font-semibold capitalize transition-all duration-300 ${getClassQuestion(
                "q2"
              )}`}
              onClick={() => openQ("q2")}
              id="q2"
            >
              <p>02. How do I find the car rental deals?</p>
              <FaAngleDown size={25} />
            </div>

            <div
              className={`faq_answer text-slate-600 text-left ${getClassAnswer(
                "q2"
              )}`}
              onClick={() => openQ("q2")}
              id="q2"
            >
              <p>
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </p>
            </div>
          </div>
          {/* ans 03 */}
          <div className="faq-box border rounded-md">
            <div
              className={`flex justify-between md:text-xl px-8 py-4 rounded-t-xl sm:text-md font-semibold capitalize transition-all duration-300 ${getClassQuestion(
                "q3"
              )}`}
              onClick={() => openQ("q3")}
              id="q3"
            >
              <p>03. How do I find such low rental car prices?</p>
              <FaAngleDown size={25} />
            </div>

            <div
              className={`faq_answer text-slate-600 text-left ${getClassAnswer(
                "q3"
              )}`}
              onClick={() => openQ("q1")}
              id="q3"
            >
              <p>
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

"use client";
import React, { useState } from "react";
import { faqData } from "@/constants";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white flex flex-col justify-center items-center w-full py-12">
      <div className="flex items-center justify-center w-3/4 rounded-xl my-8 p-8 bg-[#E2E9EE] bg-opacity-50">
        <div className="text-center">
          <h2 className="text-3xl my-8 text-[#0D1216] sm:text-4xl font-semibold">
            FAQs
          </h2>

          <div className="">
            {faqData.map((faq) => {
              const isActive = openIndex === faq.id; // Check if active
              return (
                <div
                  key={faq.id}
                  className="border-b border-gray-200 bg-white p-4 my-6 rounded-xl bg-opacity-50"
                >
                  <button
                    className={`flex justify-between items-center w-full font-bold py-4 text-left text-lg transition ${
                      isActive ? "text-[#21B1E6]" : "text-[#314453]"
                    }`}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    {faq.question}
                    <span
                      className={`${
                        isActive ? "text-[#21B1E6]" : "text-[#314453]"
                      }`}
                    >
                      {isActive ? (
                        <MdKeyboardArrowUp fontSize={24} />
                      ) : (
                        <MdKeyboardArrowDown fontSize={24} />
                      )}
                    </span>
                  </button>
                  {isActive && (
                    <div className="py-4 text-gray-600 text-start font-nunito">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <h3 className="text-3xl text-[#314453] font-semibold my-8 py-2">
            Unlock new Career Opportunities by gaining Skills in Software
            Engineering
          </h3>

          <button className="w-full bg-[#21B1E6] text-[#0D1216] rounded-full py-4 my-4 font-semibold hover:bg-blue-600 hover:text-white transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

"use client";
import React, { useState } from "react";
import { faqData } from "@/constants";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white flex flex-col justify-center items-center w-full py-12">
      <div className="flex items-center justify-center w-3/4 rounded-xl my-8 p-8 bg-[#E2E9EE] bg-opacity-50 ">
        <div className="text-center">
          <h2 className="text-3xl my-8 text-[#0D1216] sm:text-4xl font-semibold">
            FAQs
          </h2>

          <div className="">
            {faqData.map((faq) => (
              <div key={faq.id} className="border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-gray-800 hover:text-blue-600 transition"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  {faq.question}
                  <span className="text-blue-600">
                    {openIndex === faq.id ? "▲" : "▼"}
                  </span>
                </button>
                {openIndex === faq.id && (
                  <div className="p-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <h3 className="text-3xl text-[#0D1216] font-semibold py-2 ">
            Unlock new Career Opportunities by gaining Skills in Software
            Engineering
          </h3>

          <button className="w-full bg-[#21B1E6] text-[#0D1216] rounded-full py-4 my-4 font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

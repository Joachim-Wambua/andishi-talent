import Link from "next/link";
import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const HubHero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[420px] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dltjv8zbh/image/upload/v1740408514/Pixabay-3725329_lqdoxh.png')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="w-full z-10">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-5xl secondary-text font-bold">
            Insights & Ideas from Andishi Academy
          </h1>
          <div className="flex items-center mt-8 justify-center bg-gray-900 bg-opacity-50 p-4 rounded-xl space-x-4">
            {/* Left Navigation Button */}
            <button className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-gray-700 transition">
              <IoIosArrowDropleft fontSize={27} />
            </button>

            {/* Category Buttons */}
            <div className="flex space-x-4">
              <button className="px-6 py-4 rounded-full border border-white text-white hover:bg-gray-700 transition">
                Career Insight
              </button>
              <button className="px-6 py-4 rounded-full bg-[#21B1E6] text-black font-semibold transition">
                Programming
              </button>
              <button className="px-6 py-4 rounded-full border border-white text-white hover:bg-gray-700 transition">
                Product Design
              </button>
              <button className="px-6 py-4 rounded-full border border-white text-white hover:bg-gray-700 transition">
                Community Stories
              </button>
            </div>

            {/* Right Navigation Button */}
            <button className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-gray-700 transition">
              <IoIosArrowDropright fontSize={27} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubHero;

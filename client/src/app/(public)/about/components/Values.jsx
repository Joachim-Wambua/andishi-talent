import React from "react";
import { ValuesList } from "@/constants";

const Values = () => {
  return (
    <section className="bg-white w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#55565A] mb-4">
          Our Values
        </h2>
        <p className="text-md sm:text-lg lg:w-2/3 sm:w-full text-[#55565A] font-nunito mt-3 px-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quaerat. 
          Error alias provident autem. Quas, quaerat. Error alias provident autem.
        </p>
      </div>

      {/* Values Grid */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {ValuesList.map((value) => (
          <div
            key={value.id}
            className="flex flex-col items-center text-center p-6 border border-[#C2D0DB] rounded-lg shadow-md"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-[#314453] mt-4">
              {value.title}
            </h3>
            <p className="text-md text-[#314453] font-nunito mt-2">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;

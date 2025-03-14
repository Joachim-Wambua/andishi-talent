import React from "react";
import { ValuesList } from "@/constants";

const Values = () => {
  return (
    <section className="bg-white w-full py-12">
      <div className="text-center px-4 flex flex-col items-center">
        <h2 className="text-3xl text-[#55565A] mb-4 sm:text-4xl font-semibold">
          Our Values
        </h2>
        <p className="text-[16px] lg:w-1/2 sm:w-full text-[#55565A] font-nunito my-2 mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          quaerat. Error alias provident autem. Quas, quaerat. Error alias provident autem.{" "}
        </p>
      </div>

      {/* Values Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 gap-6">
        {ValuesList.map((value) => (
          <div
            key={value.id}
            className="flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold text-[#314453] mt-4">
              {value.title}
            </h3>
            <p className="text-[16px] text-[#314453] font-nunito mt-2">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;

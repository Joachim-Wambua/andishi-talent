import React from "react";
import { Core } from "@/constants";

const CoreCourses = () => {
  return (
    <section className="bg-white w-full py-12">
      <div className="text-center px-4">
        <h2 className="text-3xl text-[#0D1216] sm:text-4xl font-semibold">
          Core Courses
        </h2>
        <h3 className="text-2xl py-4 text-[#314453] font-semibold">
          Master Full Stack Development & Beyond
        </h3>
        <p className="text-[16px] text-[#314453] font-nunito my-2">
          Dive deep into the skills that matter most in today’s tech industry
        </p>
      </div>

      <div className="max-w-6xl mx-auto my-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {Core.map((course) => (
            <div
              key={course.id}
              className="bg-white border rounded-lg overflow-hidden border-[#C2D0DB]"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-[18px] h-12 text-[#314453] font-bold">
                  {course.title}
                </h3>
                <p className="text-[#314453] text-[15px] h-20 font-nunito mt-2">
                  {course.description}
                </p>
                <div className="flex justify-center mt-4">
                  <button className="px-6 py-3 border-2 border-[#E65C21] text-[#E65C21] font-bold transition rounded-full hover:bg-[#E65C21] hover:text-white">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCourses;

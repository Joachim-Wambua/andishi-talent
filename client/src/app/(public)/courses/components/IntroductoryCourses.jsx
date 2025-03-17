import React from "react";
import { IntroCourses } from "@/constants";

const IntroductoryCourses = () => {
  return (
    <section className="bg-white w-full py-12">
      <div className="text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl text-[#0D1216] sm:text-4xl font-semibold">
          Introductory Courses
        </h2>
        <h3 className="text-2xl py-4 text-[#314453] font-semibold">
          Start Your Journey with Our Introductory Courses
        </h3>
        <p className="text-[16px] text-[#314453] font-nunito my-2 max-w-2xl mx-auto">
          Build a strong foundation with beginner-friendly courses designed to
          introduce you to programming and design.
        </p>
      </div>

      <div className="max-w-6xl mx-auto my-8 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {IntroCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border rounded-lg overflow-hidden border-[#C2D0DB] shadow-sm transition hover:shadow-md"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 md:h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg md:text-xl text-[#314453] font-bold">
                  {course.title}
                </h3>
                <p className="text-[#314453] text-sm md:text-[16px] font-nunito mt-2">
                  {course.description}
                </p>
                <div className="flex justify-center mt-4">
                  <button className="px-5 py-2.5 md:px-6 md:py-3 border-2 border-[#E65C21] text-[#E65C21] font-bold transition rounded-full hover:bg-[#E65C21] hover:text-white">
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

export default IntroductoryCourses;

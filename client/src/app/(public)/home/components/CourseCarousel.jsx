"use client";

import { courses } from "@/constants";

export default function CourseGrid() {
  return (
    <section className="w-full bg-white py-12 px-4">
      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0D1216] font-semibold">
          Explore Our Courses
        </h2>
        <p className="text-[14px] sm:text-[16px] text-[#314453] font-nunito my-4">
          Choose from a variety of courses designed to help you succeed in the
          tech industry.
        </p>
      </div>

      {/* Responsive Course Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 md:h-52 object-cover"
              />
              {/* Course Details */}
              <div className="p-5">
                <h3 className="text-lg sm:text-xl text-[#314453] font-bold">
                  {course.title}
                </h3>
                <p className="text-[#314453] text-sm sm:text-base font-nunito mt-2">
                  {course.description}
                </p>
                {/* Button Section */}
                <div className="flex justify-center mt-4">
                  <button className="px-6 py-2 sm:py-3 border-2 border-[#E65C21] text-[#E65C21] font-bold text-sm sm:text-base transition rounded-full hover:bg-[#E65C21] hover:text-white">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered View All Courses Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#21B1E6] hover:bg-blue-800 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full transition">
          View All Courses
        </button>
      </div>
    </section>
  );
}

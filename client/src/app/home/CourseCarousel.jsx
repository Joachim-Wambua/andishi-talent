"use client";

import { courses } from "@/constants";

export default function CourseGrid() {
  return (
    <section className="w-full bg-white py-12">
      <div className="text-black text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Explore Our Courses
        </h2>
        <p className="text-[16px] font-nunito my-6">
          Choose from a variety of courses designed to help you succeed in the
          tech industry.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-[18px] text-[#314453] font-bold">
                  {course.title}
                </h3>
                <p className="text-[#314453] text-[16px] font-nunito mt-2">
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

        {/* Centered View All Courses Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#21B1E6] hover:bg-blue-800 text-white font-bold text-[16px] px-8 py-4 rounded-full transition">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}

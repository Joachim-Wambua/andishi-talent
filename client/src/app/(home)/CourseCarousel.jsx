"use client";
import { useState } from "react";
import { courses } from "@/constants";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function CourseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 2; // Show 2 cards at a time

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? courses.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= courses.length - visibleCards ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="text-black text-center ">
        <h2 className="text-4xl font-semibold ">
          Fuel Your Tech Journey With Our
        </h2>
        <p className="text-lg my-6">
          Comprehensive Technical Training, Industry-Relevant Curriculum, and
          Expert Mentorship for Career Growth
        </p>
      </div>
      <div className="relative w-full max-w-5xl mx-auto bg-white py-4">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {courses.map((course) => (
              <div key={course.id} className="w-1/2 flex-shrink-0 p-4">
                <div className="bg-white shadow-lg border rounded-lg overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-60 object-cover p-3 rounded-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-lg text-black font-bold">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{course.description}</p>
                    <div className="w-full flex justify-center items-center">
                      <button className="mt-4 px-12 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-300 hover:bg-opacity-25 transition rounded-full">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-md"
        >
          <GoChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-md"
        >
          <GoChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

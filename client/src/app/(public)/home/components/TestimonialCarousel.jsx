"use client";
import { useState, useEffect } from "react";
import { testimonials } from "@/constants";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default for large screens
  const totalCards = testimonials.length;

  // Adjust visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // 🎨 Gradient backgrounds
  const gradientOne = "bg-gradient-to-b from-[#0D1216] to-[#49657C]";
  const gradientTwo = "bg-gradient-to-b from-[#E3F2FC] to-[#D5DEE5]";

  // ➡️ Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalCards - visibleCards ? prevIndex + 1 : 0
    );
  };

  // ⬅️ Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalCards - visibleCards
    );
  };

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0D1216] font-semibold">
          What Our Students Say
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#314453] font-nunito my-6">
          Hear from our graduates who have successfully transitioned into tech careers.
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        {/* ⬅️ Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#21B1E6] text-white p-3 rounded-full shadow-md hover:bg-gray-300 z-10"
        >
          <GoChevronLeft size={24} />
        </button>

        {/* Testimonials Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`w-full sm:w-[calc(100%/1.5)] md:w-[calc(100%/2)] p-4 flex-shrink-0`}
            >
              <div
                className={`flex border rounded-lg items-center w-full shadow-md p-6 h-60 ${
                  index % 2 === 0 ? gradientOne : gradientTwo
                } ${index % 2 === 0 ? "text-[#E2E9EE]" : "text-[#314453]"}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-1/3 h-2/3 mx-auto rounded-full object-cover"
                />
                <div className="w-2/3 mx-2">
                  <h3 className="text-base sm:text-lg font-bold mt-2">{item.name}</h3>
                  <p className="text-xs sm:text-sm font-nunito font-semibold">{item.role}</p>
                  <p className="mt-2 font-nunito text-xs sm:text-sm">{item.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ➡️ Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#21B1E6] text-white p-3 rounded-full shadow-md hover:bg-gray-300 z-10"
        >
          <GoChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

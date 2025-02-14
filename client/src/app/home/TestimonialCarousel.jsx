"use client";
import { useState, useEffect } from "react";
import { testimonials } from "@/constants";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);
  const totalCards = testimonials.length;

  // Adjust visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 2);
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
    <section className="w-full bg-white py-12">
      <div className="text-[#0D1216] text-center">
        <h2 className="text-4xl font-semibold">What Our Students Say</h2>
        <p className="text-[16px] font-nunito my-6">
          Hear from our graduates who have successfully transitioned into tech careers.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto bg-white py-4 overflow-hidden">
        {/* ⬅️ Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#21B1E6] text-white p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
        >
          <GoChevronLeft size={24} />
        </button>

        {/* Testimonials Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="w-full sm:w-[calc(100%/2.15)] p-4 flex-shrink-0 transition-transform"
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
                  <h3 className="text-lg font-bold mt-4">{item.name}</h3>
                  <p className="text-sm font-nunito font-semibold">{item.role}</p>
                  <p className="mt-2 font-nunito text-sm">{item.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ➡️ Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-[#21B1E6] p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
        >
          <GoChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

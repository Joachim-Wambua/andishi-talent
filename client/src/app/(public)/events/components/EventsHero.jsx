import React from "react";

const EventsHero = () => {
  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-center text-white px-6"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dltjv8zbh/image/upload/v1739966878/events_hbgsq4.jpg')",
        height: "clamp(240px, 40vh, 520px)", // Ensures dynamic height responsiveness
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center w-11/12 max-w-screen-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Explore Exciting Tech Events & Workshops
        </h1>
      </div>
    </section>
  );
};

export default EventsHero;

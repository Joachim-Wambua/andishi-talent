import React from "react";

const EventDetailHero = ({ imageURL, title, date, time }) => {
  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url(${imageURL})`,
        height: "clamp(280px, 40vh, 450px)", // Adjusts dynamically based on viewport
      }}
    >
      {/* Black overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative text-center w-full max-w-screen-lg z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
        
        {/* Date & Time */}
        <div className="flex flex-wrap justify-center items-center mt-4 text-lg sm:text-xl font-medium">
          <p className="text-white">{date}</p>
          <span className="sm:inline mx-4">{" "} | </span>
          <p className="text-white">{time}</p>
        </div>
      </div>
    </section>
  );
};

export default EventDetailHero;

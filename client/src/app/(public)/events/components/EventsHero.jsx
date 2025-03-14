import React from "react";

const EventsHero = () => {
  return (
    <section
      className="relative bg-cover bg-bottom h-[240px] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dltjv8zbh/image/upload/v1739966878/events_hbgsq4.jpg')",
      }}
    >
      <div className="text-center w-2/3">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl secondary-text font-bold">
            Explore Exciting Tech Events & Workshops
          </h1>
        </div>
      </div>
    </section>
  );
};

export default EventsHero;

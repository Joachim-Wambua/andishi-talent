import React from "react";

const EventDetailHero = ({ imageURL, title, date, time }) => {
  return (
    <section
      className="relative bg-cover bg-bottom h-[333px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text content */}
      <div className="relative text-center w-full z-10">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-5xl secondary-text font-bold">{title}</h1>
          <div className="flex flex-row items-center w-1/4 justify-center">
            <p className="mt-4 w-full secondary-text font-medium text-[18px]">
              {date} <span className="mx-6">|</span> {time}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailHero;

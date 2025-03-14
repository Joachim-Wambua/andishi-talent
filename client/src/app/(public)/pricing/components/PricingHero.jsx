import Image from "next/image";
import React from "react";

const PricingHero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[540px] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dltjv8zbh/image/upload/v1740399635/Pixabay-3484137_idi8ta.png')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="w-3/4 z-10">
        <div className="w-full flex items-center">
          <div className="flex flex-col w-1/2 items-start">
            <h1 className="text-5xl secondary-text font-bold">
              Affordable Pricing Packages
            </h1>
            <p className="mt-4 w-2/3 secondary-text font-medium text-[18px]">
              Andishi Academy offers flexible pricing, from affordable beginner
              courses to advanced specialized training.
            </p>
            <button className="my-4 bg-[#21B1E6] hover:bg-blue-800 hover:text-white font-bold text-black px-6 py-4 rounded-full transition">
              Explore Pricing
            </button>
          </div>

          <div className="w-1/2">
            <Image
              src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1740399636/Pixabay-1017463_a2axbh.png"
              alt="pricing image"
              width={630}
              height={630}
              className="bg-white bg-opacity-15 rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;

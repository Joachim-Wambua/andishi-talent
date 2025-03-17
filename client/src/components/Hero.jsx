import Link from "next/link";
import React from "react";

const Hero = ({ header, description, buttonText, buttonLink }) => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] md:h-[600px] flex items-center justify-center text-white px-6"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dltjv8zbh/image/upload/v1739271045/img-homepage_r5k2wp.jpg')",
      }}
    >
      <div className="text-center max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight secondary-text">
            {header}
          </h1>
          <p className="mt-4 w-full sm:w-3/4 md:w-2/3 text-[16px] sm:text-[18px] font-medium secondary-text">
            {description}
          </p>
        </div>
        <Link href={buttonLink}>
          <button className="mt-6 px-6 py-3 sm:py-4 text-sm sm:text-base bg-[#21B1E6] hover:bg-blue-800 hover:text-white font-bold text-black rounded-full transition w-3/4 sm:w-1/2 md:w-1/4">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

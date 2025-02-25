import Link from "next/link";
import React from "react";

const Hero = ({ header, description, buttonText, buttonLink }) => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dltjv8zbh/image/upload/v1739271045/img-homepage_r5k2wp.jpg')",
      }}
    >
      <div className="text-center w-2/3">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl secondary-text font-bold">{header}</h1>
          <p className="mt-4 w-2/3 secondary-text font-medium text-[18px]">
            {description}
          </p>
        </div>
        <Link href={buttonLink}>
          <button className="my-4 bg-[#21B1E6] hover:bg-blue-800 hover:text-white font-bold text-black px-6 py-4 rounded-full transition">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dltjv8zbh/image/upload/v1739271045/img-homepage_r5k2wp.jpg')",
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Transform Your Future with Practical Tech Skills
        </h1>
        <p className="mt-4 text-xl">
          Learn from industry experts, work on real-world projects, and build
          skills that matter.<br></br> Join a thriving community of innovators and problem-solvers
        </p>
        <button className="my-4 bg-blue-500 hover:bg-blue-800 hover:text-white font-bold text-black px-6 py-4 rounded-full">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default Hero;

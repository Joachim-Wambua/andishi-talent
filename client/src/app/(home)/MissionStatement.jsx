"use client";

import Image from "next/image";

export default function MissionStatement() {
  return (
    <section className="py-4 px-8 bg-gray-100 text-gray-900 w-full">
      <h2 className="text-4xl font-semibold text-center mb-4">Our Mission Statement</h2>
      <div className="w-full flex flex-row my-8">
        <div className="w-1/2 h-3/4 flex  justify-center">
          <Image
            className="w-3/4 h-3/4 object-cover rounded-3xl"
            unoptimized
            src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1739271902/mission-statement_shql6v.jpg"
            alt="Mission Statement Img"
            width={100}
            height={90}
          />
        </div>
        <div className="w-1/2 h-3/4 flex flex-col justify-center my-8 max-w-3xl mx-auto">
          <h2 className="font-semibold text-3xl my-4 w-3/4">
            Bridging the gap between learning and real-world tech innovation.
          </h2>
          <p className="w-3/4 text-start text-md my-4">
            Learn practical tech skills, gain real-world experience, and build a
            successful career in technology.
          </p>
          <button className=" w-1/3 my-4 bg-blue-500 transition hover:bg-blue-800 hover:text-white font-bold text-black px-6 py-4 rounded-full">
            Explore More Courses
          </button>
        </div>
      </div>
    </section>
  );
}

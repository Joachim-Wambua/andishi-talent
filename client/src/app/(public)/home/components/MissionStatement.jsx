"use client";

import Image from "next/image";

export default function MissionStatement() {
  return (
    <section className="py-16 px-12 bg-radial-gradient w-full">
      <h2 className="text-3xl font-semibold text-center text-[#0D1216] mb-4">
        Our Mission Statement
      </h2>
      <div className="w-full flex lg:flex-row-reverse sm:flex-col my-8">
        <div className="lg:w-1/2 sm:w-full h-1/2 flex justify-center items-start">
          <Image
            className="w-3/4 h-[360px] object-cover rounded-3xl"
            unoptimized
            src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1739530001/Mission_Statement_cmhoii.png"
            alt="Mission Statement Img"
            width={100}
            height={90}
          />
        </div>
        <div className="lg:w-1/2 sm:w-full h-3/4 flex flex-col lg:items-end sm:items-center lg:text-start sm:text-center my-8 max-w-3xl mx-auto">
          <h2 className="font-semibold text-3xl my-4 lg:w-3/4 text-[#314453] sm:w-full">
            Bridging the Gap Between Learning and Real-World Tech Innovation.
          </h2>
          <p className="lg:w-3/4 sm:w-full text-md text-[#314453] my-6 font-nunito">
            Learn Practical Tech Skills, Gain Real-World Experience, and Build a
            Successful Career in Technology
          </p>

          <div className="w-3/4 whitespace-nowrap">
            <button className=" w-2/3 my-4 bg-[#21B1E6] transition hover:bg-blue-800 hover:text-white font-bold font-montserrat text-[15px] text-[#0D1216] px-6 py-4 rounded-full">
              Explore Our Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

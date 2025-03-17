"use client";

import Image from "next/image";

export default function MissionStatement() {
  return (
    <section className="py-12 px-6 md:px-12 bg-radial-gradient w-full">
      <h2 className="text-3xl font-semibold text-center text-[#0D1216] mb-6">
        Our Mission Statement
      </h2>

      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between max-w-screen-xl mx-auto gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            className="w-full max-w-lg h-auto object-cover rounded-3xl"
            unoptimized
            src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1739530001/Mission_Statement_cmhoii.png"
            alt="Mission Statement"
            width={500}
            height={360}
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="font-semibold text-2xl md:text-3xl text-[#314453] my-4 max-w-lg">
            Bridging the Gap Between Learning and Real-World Tech Innovation.
          </h2>
          <p className="text-md text-[#314453] my-4 font-nunito max-w-lg">
            Learn Practical Tech Skills, Gain Real-World Experience, and Build a
            Successful Career in Technology.
          </p>

          <div className="w-full flex justify-center lg:justify-start">
            <button className="w-3/4 md:w-1/2 lg:w-1/3 my-4 bg-[#21B1E6] transition hover:bg-blue-800 hover:text-white font-bold font-montserrat text-[15px] text-[#0D1216] px-6 py-4 rounded-full">
              Explore Our Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

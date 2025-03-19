import React from "react";
import Image from "next/image";

const EventRegistration = ({ title, imgURL, date, time }) => {
  return (
    <section className="py-12 px-6 sm:px-12 w-full">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            className="w-full max-w-sm lg:max-w-md h-[280px] sm:h-[360px] object-cover rounded-3xl"
            unoptimized
            src={imgURL}
            alt="Event Image"
            width={100}
            height={90}
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#314453] mb-4">
            Join Us & {title}
          </h2>

          {/* Date & Time Card */}
          <div className="w-full max-w-sm p-5 rounded-xl bg-[#E8F7FC]">
            <div className="flex items-center justify-center sm:justify-start">
              {/* Date Box */}
              <div className="w-20 h-20 flex flex-col justify-center bg-white rounded-xl p-2 text-[#0D1216]">
                <p className="text-center font-semibold text-2xl">{date.split(" ")[0]}</p>
                <p className="text-center font-semibold text-2xl">{date.split(" ")[1]}</p>
              </div>
              
              {/* Date & Time Details */}
              <div className="ml-4 text-[#0D1216] text-lg sm:text-xl">
                <p className="my-1">{date}</p>
                <p className="my-1">{time}</p>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="mt-6 w-full flex justify-center lg:justify-start">
            <button className="w-full sm:w-1/2 lg:w-1/3 bg-[#21B1E6] transition hover:bg-blue-800 hover:text-white font-bold text-[15px] text-[#0D1216] px-6 py-4 rounded-full">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventRegistration;

import React from "react";
import Image from "next/image";

const EventRegistration = ({ title, imgURL, date, time }) => {
  return (
    <section className="py-16 px-12 w-full">
      <div className="w-full flex lg:flex-row-reverse sm:flex-col my-8">
        <div className="lg:w-1/2 sm:w-full h-1/2 flex justify-center items-start">
          <Image
            className="w-3/4 h-[360px] object-cover rounded-3xl"
            unoptimized
            src={imgURL}
            alt="Mission Statement Img"
            width={100}
            height={90}
          />
        </div>
        <div className="lg:w-1/2 sm:w-full h-3/4 flex flex-col lg:text-start lg:items-end sm:items-center sm:text-center my-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-3xl my-4 lg:w-3/4 text-[#314453] sm:w-full">
              Join Us & {title}
            </h2>
            <div className="w-fit p-5 rounded-xl bg-[#E8F7FC]">
              <div className="flex items-center">
                <div className="w-1/2 rounded-xl bg-white p-2">
                  <p className="text-center text-[#0D1216] font-semibold text-[28px]">
                    {date.split(" ").slice(0, 1).join(" ")}
                  </p>
                  <p className="text-center text-[#0D1216] font-semibold text-[28px]">
                    {date.split(" ").slice(1, 2).join(" ")}
                  </p>
                </div>
                <div className="w-fit whitespace-nowrap ml-3 text-[#0D1216] font-nunito text-[16px]">
                  <p className="my-1">{date}</p>
                  <p className="my-1">{time}</p>
                </div>
              </div>
            </div>

            <div className="w-3/4 whitespace-nowrap">
              <button className=" w-1/3 my-4 bg-[#21B1E6] transition hover:bg-blue-800 hover:text-white font-bold font-montserrat text-[15px] text-[#0D1216] px-6 py-4 rounded-full">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventRegistration;

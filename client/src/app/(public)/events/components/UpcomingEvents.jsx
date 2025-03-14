import React from "react";
import { EventsList } from "@/constants";
import { IoSearchSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import Link from "next/link";

const UpcomingEvents = () => {
  return (
    <section className="bg-white w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section with Search & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
          <h2 className="text-3xl text-[#55565A] sm:text-4xl font-semibold">
            Upcoming Events
          </h2>

          {/* Search & Filter Container */}
          <div className="flex gap-4 mt-8 sm:mt-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Event"
                className="border border-[#C2D0DB] rounded-full pl-10 pr-4 py-2 text-[15px] text-[#314453] focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
              <IoSearchSharp
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#55565A]"
                fontSize={18}
              />
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-2 border border-[#C2D0DB] px-4 py-2 rounded-full text-[15px] text-[#314453] hover:bg-[#F3F4F6] transition">
              <VscSettings fontSize={18} />
              Filter by Dates
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {EventsList.map((event) => (
            <div
              key={event.id}
              className="bg-white border rounded-lg text-center overflow-hidden border-[#C2D0DB]"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-[16px] h-12 text-[#314453] font-bold">
                  {event.title}
                </h3>
                <p className="my-3 text-[15px] font-nunito text-[#314453]">
                  {event.location}
                </p>
                <div className="flex flex-row items-center justify-center my-2">
                  <p className="text-[#314453] mx-2 text-[15px] font-semibold font-nunito mt-2">
                    {event.date}
                  </p>
                  <p className="text-[#314453] mx-2 text-[15px] font-nunito mt-2">
                    {event.time}
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  <Link href={`/events/${event.id}`}>
                    <button className="w-full bg-[#21B1E6] transition hover:bg-blue-800 hover:text-white font-bold font-montserrat text-[15px] text-[#0D1216] px-6 py-4 rounded-full">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

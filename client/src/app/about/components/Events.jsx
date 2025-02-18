import React from "react";
import { EventsList } from "@/constants";

const Events = () => {
  return (
    <section className="bg-white w-full py-12">
      <div className="text-center px-4 flex flex-col items-center">
        <h2 className="text-3xl text-[#55565A] mb-4 sm:text-4xl font-semibold">
          Events
        </h2>
      </div>

      <div className="max-w-6xl mx-auto my-8 px-4">
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
                <p className="my-3 text-[15px] font-nunito text-[#314453]" >{event.location}</p>
                <div className="flex flex-row items-center justify-center my-2" >
                  <p className="text-[#314453] mx-2 text-[15px] font-semibold font-nunito mt-2">
                    {event.date}
                  </p>
                  <p className="text-[#314453] mx-2 text-[15px] font-nunito mt-2">
                    {event.time}
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  <button className= "w-full bg-[#21B1E6] transition hover:bg-blue-800 hover:text-white font-bold font-montserrat text-[15px] text-[#0D1216] px-6 py-4 rounded-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

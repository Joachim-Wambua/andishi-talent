import React from "react";
import { TechMentors } from "@/constants";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdGlobe } from "react-icons/io";
import Link from "next/link";

const Mentors = () => {
  return (
    <section className="bg-white w-full py-12">
      <div className="text-center px-4">
        <h2 className="text-3xl text-[#55565A] mb-6 sm:text-4xl font-semibold">
          Our Tech Mentors
        </h2>
      </div>

      {/* Mentors' Grid */}
      <div className="max-w-6xl mx-auto my-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {TechMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white border rounded-lg overflow-hidden border-[#C2D0DB]"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full object-cover p-3 rounded-xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-[18px] text-[#314453] font-bold">
                  {mentor.name}
                </h3>
                <p className="text-[#314453] text-[15px] font-nunito mt-2">
                  {mentor.role}
                </p>
                <div className="flex justify-center items-center mt-4">
                  <Link
                    href="#"
                    className="text-[#55565A] mx-4 bg-[#E8F7FC] rounded-md p-2"
                  >
                    <IoMail fontSize={20} className="" />
                  </Link>

                  <Link
                    href="#"
                    className="text-[#55565A] mx-4 bg-[#E8F7FC] rounded-md p-2"
                  >
                    <FaPhone fontSize={16} className="" />
                  </Link>

                  <Link
                    href="#"
                    className="text-[#55565A] mx-4 bg-[#E8F7FC] rounded-md p-2"
                  >
                    <IoMdGlobe fontSize={20} className="" />
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

export default Mentors;

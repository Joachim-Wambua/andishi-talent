import React from "react";
import { TechMentors } from "@/constants";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdGlobe } from "react-icons/io";
import Link from "next/link";

const Mentors = () => {
  return (
    <section className="bg-white w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#55565A] mb-8">
          Our Tech Mentors
        </h2>
      </div>

      {/* Mentors' Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {TechMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white border border-[#C2D0DB] rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full aspect-square object-cover p-3 rounded-xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#314453]">
                  {mentor.name}
                </h3>
                <p className="text-md text-[#314453] font-nunito mt-2">
                  {mentor.role}
                </p>
                <div className="flex justify-center items-center mt-4 space-x-4">
                  <Link href="#" className="text-[#55565A] bg-[#E8F7FC] rounded-md p-2">
                    <IoMail fontSize={20} />
                  </Link>
                  <Link href="#" className="text-[#55565A] bg-[#E8F7FC] rounded-md p-2">
                    <FaPhone fontSize={16} />
                  </Link>
                  <Link href="#" className="text-[#55565A] bg-[#E8F7FC] rounded-md p-2">
                    <IoMdGlobe fontSize={20} />
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

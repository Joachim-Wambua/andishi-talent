"use client";

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleSubDropdown = (menu) => {
    setOpenSubDropdown(openSubDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white sticky top-0 z-20 text-black font-semibold h-16 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl">
        <Link href="/" className="">
          <Image
            className="rounded-full"
            src="/andishi-logo.png"
            alt="Andishi Academy Logo"
            width={45}
            height={45}
          />
          {/* <Image
            className=""
            src="/andishi-logomark.png"
            alt="Andishi Academy Logo"
            width={36}
            height={36}
          /> */}
        </Link>
      </div>
      <div className="flex items-center space-x-16">
        <div className="flex items-center justify-center text-[16px] space-x-2">
          <div className="">
            <Link
              href="/"
              className="flex items-center hover:text-[#21B1E6] mx-8"
            >
              <RiHome2Line className="h-4 w-4 mx-1 mt-[2px]" />
              Home
            </Link>
          </div>
          <div className="">
            <Link href="/courses" className="hover:text-[#21B1E6] mx-8">
              Courses
            </Link>
          </div>
          <div className="mx-8">
            <Link href="/pricing" className="hover:text-[#21B1E6] mx-8">
              Pricing
            </Link>
          </div>

          <div className="mx-8">
            <button
              onClick={() => handleDropdown("about")}
              className="flex items-center mx-8 text-black hover:text-[#21B1E6]"
            >
              About
              <IoIosArrowDown className="mx-1 mt-[2px]" />
            </button>
            {openDropdown === "about" && (
              <div className="absolute bg-white rounded-xl shadow-lg mt-2 py-2 w-40">
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]"
                >
                  About Us
                </Link>
                <Link
                  href="/careers"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]"
                >
                  Careers
                </Link>
              </div>
            )}
          </div>

          <div className="mx-8">
            <button
              onClick={() => handleDropdown("more")}
              className="flex items-center mx-8 text-black  hover:text-[#21B1E6]"
            >
              More
              <IoIosArrowDown className="mx-1 mt-[2px]" />
            </button>
            {openDropdown === "more" && (
              <div className="absolute bg-white rounded-xl shadow-lg mt-2 py-2 w-48">
                <button
                  onClick={() => handleSubDropdown("knowledge-hub")}
                  className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]"
                >
                  Knowledge Hub <IoIosArrowDown className="ml-2" />
                </button>
                {openSubDropdown === "knowledge-hub" && (
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-xl py-2 w-40">
                    <Link
                      href="/knowledge-hub/articles"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]"
                    >
                      Articles
                    </Link>
                    <Link
                      href="/knowledge-hub/webinars"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]"
                    >
                      Webinars
                    </Link>
                    <Link
                      href="/knowledge-hub/guides"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]"
                    >
                      Guides
                    </Link>
                  </div>
                )}
                <Link
                  href="/events"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]"
                >
                  Events
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="border border-gray-500 h-10"></div>
        <div className="flex space-x-2">
          <Link
            href="/auth/login"
            className="flex items-center border secondary-text font-medium border-blue-500 hover:bg-[#21B1E6] hover:bg-opacity-25 transition text-blue-500 hover:border-blue-800 hover:text-blue-800 mx-2 px-6 py-[6px] rounded-full"
          >
            <FaRegUser className="mr-2" />
            Sign In
          </Link>
          <Link
            href="/auth/login"
            className="flex items-center secondary-text bg-[#21B1E6] hover:bg-blue-800 hover:text-white transition text-black px-4 py-[6px] rounded-full"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

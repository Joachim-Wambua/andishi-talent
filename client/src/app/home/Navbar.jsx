"use client";

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-white text-black font-semibold h-16 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl">
        <Link href="/" className="">
          <Image
            className="rounded-full"
            src="/andishi-logo.png"
            alt="Andishi Academy Logo"
            width={45}
            height={45}
          />
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
            <Link
              href="/about"
              className="flex items-center mx-8 text-black hover:text-[#21B1E6]"
            >
              About
              <IoIosArrowDown className="mx-1 mt-[2px]" />
            </Link>
          </div>
          <div className="">
            <Link
              href="/about"
              className="flex items-center mx-8 text-black  hover:text-[#21B1E6]"
            >
              More
              <IoIosArrowDown className="mx-1 mt-[2px]" />
            </Link>
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

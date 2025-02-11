"use client";

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-white text-black font-semibold shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl">
        <Link href="/" className="">
          <Image
            className="rounded-full"
            src="/andishi-logo.png"
            alt="Andishi Academy Logo"
            width={60}
            height={60}
          />
        </Link>
      </div>
      <div className="flex items-center space-x-16">
        <div className="flex items-center justify-center text-lg space-x-2">
          <div className="">
            <Link
              href="/"
              className="flex items-center hover:text-blue-500 mx-8"
            >
              <RiHome2Line className="h-5 w-5 mx-2" />
              Home
            </Link>
          </div>
          <div className="">
            <Link href="/courses" className="hover:text-blue-500 mx-8">
              Courses
            </Link>
          </div>
          <div className="mx-8">
            <Link href="/pricing" className="hover:text-blue-500 mx-8">
              Pricing
            </Link>
          </div>
          <div className="mx-8 ">
            <Link
              href="/about"
              className="flex items-center mx-8 text-black hover:text-blue-500"
            >
              About
              <IoIosArrowDown className="mx-1 " />
            </Link>
          </div>
          <div className="">
            <Link
              href="/about"
              className="flex items-center mx-8 text-black  hover:text-blue-500"
            >
              More
              <IoIosArrowDown className="mx-1" />
            </Link>
          </div>
        </div>
        <div className="border border-gray-500 h-12"></div>
        <div className="flex space-x-2">
          <Link
            href="/auth/login"
            className="flex items-center border border-blue-500 hover:bg-blue-300 hover:bg-opacity-25 transition text-blue-500 hover:border-blue-800 hover:text-blue-800 mx-2 px-6 py-4 rounded-full"
          >
            <FaRegUser className="mr-2" />
            Sign In
          </Link>
          <Link
            href="/auth/login"
            className="bg-blue-500 hover:bg-blue-800 hover:text-white transition text-black px-6 py-4 rounded-full"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

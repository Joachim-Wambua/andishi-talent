"use client";

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and Close icons
import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleSubDropdown = (menu) => {
    setOpenSubDropdown(openSubDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white sticky top-0 z-20 text-black font-semibold h-16 shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/andishi-logo.png"
            alt="Andishi Academy Logo"
            width={45}
            height={45}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-16">
        <div className="flex items-center text-[16px] space-x-2">
          <Link href="/" className="flex items-center hover:text-[#21B1E6] mx-8">
            <RiHome2Line className="h-4 w-4 mx-1 mt-[2px]" />
            Home
          </Link>
          <Link href="/courses" className="hover:text-[#21B1E6] mx-8">Courses</Link>
          <Link href="/pricing" className="hover:text-[#21B1E6] mx-8">Pricing</Link>

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("about")}
              className="flex items-center text-black hover:text-[#21B1E6] mx-8"
            >
              About
              <IoIosArrowDown className="ml-1 mt-[2px]" />
            </button>
            {openDropdown === "about" && (
              <div className="absolute bg-white rounded-xl shadow-lg mt-2 py-2 w-40">
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]">About Us</Link>
                <Link href="/careers" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]">Careers</Link>
              </div>
            )}
          </div>

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("more")}
              className="flex items-center text-black hover:text-[#21B1E6] mx-8"
            >
              More
              <IoIosArrowDown className="ml-1 mt-[2px]" />
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
                    <Link href="/knowledge-hub/articles" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]">Articles</Link>
                    <Link href="/knowledge-hub/webinars" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]">Webinars</Link>
                    <Link href="/knowledge-hub/guides" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]">Guides</Link>
                  </div>
                )}
                <Link href="/events" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]">Events</Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#21B1E6]">Contact Us</Link>
              </div>
            )}
          </div>
        </div>

        {/* Authentication Buttons */}
        <div className="flex space-x-2">
          <Link
            href="/auth/login"
            className="flex items-center border border-blue-500 text-blue-500 hover:bg-[#21B1E6] hover:bg-opacity-25 transition px-6 py-[6px] rounded-full"
          >
            <FaRegUser className="mr-2" />
            Sign In
          </Link>
          <Link
            href="/application-form"
            className="flex items-center bg-[#21B1E6] hover:bg-blue-800 hover:text-white transition text-black px-4 py-[6px] rounded-full"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Sidebar Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg p-6 flex flex-col items-start space-y-6 z-50">
          <button className="self-end text-2xl" onClick={() => setMobileMenuOpen(false)}>
            <FiX />
          </button>
          <Link href="/" className="text-lg font-medium hover:text-[#21B1E6]">Home</Link>
          <Link href="/courses" className="text-lg font-medium hover:text-[#21B1E6]">Courses</Link>
          <Link href="/pricing" className="text-lg font-medium hover:text-[#21B1E6]">Pricing</Link>
          <Link href="/about" className="text-lg font-medium hover:text-[#21B1E6]">About</Link>
          <Link href="/events" className="text-lg font-medium hover:text-[#21B1E6]">Events</Link>
          <Link href="/contact" className="text-lg font-medium hover:text-[#21B1E6]">Contact Us</Link>
          <Link href="/auth/login" className="text-lg font-medium text-blue-500 border border-blue-500 px-4 py-2 rounded-full hover:bg-[#21B1E6] hover:text-white">Sign In</Link>
          <Link href="/application-form" className="text-lg font-medium bg-[#21B1E6] text-white px-4 py-2 rounded-full hover:bg-blue-800">Apply Now</Link>
        </div>
      )}
    </nav> 
  );
}

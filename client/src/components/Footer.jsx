"use client";

import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#e8f7fc]  py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-5 md:grid-cols-4 gap-4">
        {/* Newsletter Section */}
        <div className="col-span-2 mr-4">
          <h3 className="text-xl text-[#0D1216] font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-lg border-gray-500 text-[#0D1216] font-bold font-nunito bg-transparent"
            />
            <div className="flex items-center space-x-2 my-4">
              <input type="checkbox" id="consent" className="w-4 h-4" />
              <label
                htmlFor="consent"
                className="text-[13px] text-[#0D1216] font-nunito"
              >
                By entering your email you agree to receive the Andishi Academy
                newsletter
              </label>
            </div>
            <button className="bg-[#21B1E6] lg:w-1/3 px-6 py-4 rounded-full text-[#0D1216] font-bold hover:bg-blue-600 hover:text-white transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Menu Links */}
        <div className="col-start-3 font-nunito">
          <h3 className="text-lg text-[#0D1216] font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-[#314453]">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="/knowledge-hub" className="hover:underline">
                Knowledge Hub
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="col-start-4 font-nunito">
          <h3 className="text-lg text-[#0D1216] font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-[#314453]">
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Legal
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="col-start-5 font-nunito">
          <h3 className="text-lg text-[#0D1216] font-semibold mb-3">
            Follow Us
          </h3>
          <div className="flex flex-col space-y-3 text-[#314453] text-[16px]">
            <a
              href="https://www.facebook.com/profile.php?id=61571654250679"
              className="flex items-center space-x-2 hover:underline"
            >
              <FaFacebook className="text-blue-600" /> <span>Facebook</span>
            </a>
            <a
              href="https://x.com/andishi_academy"
              className="flex items-center space-x-2 hover:underline"
            >
              <FaTwitter className="text-black" /> <span>Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/andishi_academy/"
              className="flex items-center space-x-2 hover:underline"
            >
              <FaInstagram className="text-pink-500" /> <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/andishi-academy"
              className="flex items-center space-x-2 hover:underline"
            >
              <FaLinkedin className="text-blue-700" /> <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <FaYoutube className="text-red-600" /> <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t pt-6 flex justify-between items-center font-nunito">
        <Image
          src="/andishi-logo.png"
          alt="Andishi Academy Logo"
          className="rounded-full"
          width={45}
          height={45}
        />
        <p className="text-sm text-[#0D1216]">
          Copyright &copy; {new Date().getFullYear()} Andishi Academy | All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}

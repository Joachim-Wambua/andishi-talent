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
    <footer className="bg-[#e8f7fc] text-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-5 md:grid-cols-4 gap-4">
        {/* Newsletter Section */}
        <div className="col-span-2 mr-4">
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="consent" className="w-4 h-4" />
              <label htmlFor="consent" className="text-sm">
                By entering your email you agree to receive the Andishi Academy
                newsletter
              </label>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
    

        {/* Menu Links */}
        <div className="col-start-3">
          <h3 className="text-lg font-semibold mb-3">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Knowledge Hub
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="col-start-4">
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
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
        <div className="col-start-5">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex flex-col space-y-3">
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <FaFacebook className="text-blue-600" /> <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <FaTwitter className="text-black" /> <span>Twitter</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <FaInstagram className="text-pink-500" /> <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <FaLinkedin className="text-blue-700" /> <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <FaYoutube className="text-red-600" /> <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t pt-6 flex justify-between items-center">
        <Image src="/andishi-logo.png" alt="Andishi Academy Logo" className="rounded-full" width={45} height={45} />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Andishi Academy | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}
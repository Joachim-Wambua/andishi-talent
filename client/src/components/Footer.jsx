"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/newsletter/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setSuccess("Successfully subscribed!");
      setEmail(""); // Clear input field
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-[#e8f7fc] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Newsletter Section */}
        <div className="col-span-2 lg:col-span-2">
          <h3 className="text-xl text-[#0D1216] font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg border-gray-500 text-[#0D1216] font-bold font-nunito bg-transparent"
            />
            <div className="flex items-center space-x-2 my-4">
              <input type="checkbox" id="consent" className="w-4 h-4" required />
              <label
                htmlFor="consent"
                className="text-[13px] text-[#0D1216] font-nunito"
              >
                By entering your email you agree to receive the Andishi Academy
                newsletter
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#21B1E6] w-full sm:w-auto px-6 py-3 rounded-full text-[#0D1216] font-bold hover:bg-blue-600 hover:text-white transition"
            >
              Subscribe
            </button>
          </form>

          {error && <p className="text-red-600 mt-2">{error}</p>}
          {success && <p className="text-green-600 mt-2">{success}</p>}
        </div>

        {/* Menu Links */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg text-[#0D1216] font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-[#314453]">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="/knowledge-hub" className="hover:underline">Knowledge Hub</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg text-[#0D1216] font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-[#314453]">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg text-[#0D1216] font-semibold mb-3">Follow Us</h3>
          <div className="flex flex-col space-y-3 text-[#314453] text-[16px]">
            <a href="https://www.facebook.com/profile.php?id=61571654250679" className="flex items-center space-x-2 hover:underline">
              <FaFacebook className="text-blue-600" /> <span>Facebook</span>
            </a>
            <a href="https://x.com/andishi_academy" className="flex items-center space-x-2 hover:underline">
              <FaTwitter className="text-black" /> <span>Twitter</span>
            </a>
            <a href="https://www.instagram.com/andishi_academy/" className="flex items-center space-x-2 hover:underline">
              <FaInstagram className="text-pink-500" /> <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/andishi-academy" className="flex items-center space-x-2 hover:underline">
              <FaLinkedin className="text-blue-700" /> <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <FaYoutube className="text-red-600" /> <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-center">
        <Image
          src="/andishi-logo.png"
          alt="Andishi Academy Logo"
          className="rounded-full"
          width={45}
          height={45}
        />
        <p className="text-sm text-[#0D1216] mt-4 sm:mt-0">
          Copyright &copy; {new Date().getFullYear()} Andishi Academy | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

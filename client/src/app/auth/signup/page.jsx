"use client";
import React, { useState } from "react";
import Image from "next/image";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();
      console.log("Server Response: ", data);

      if (!response.ok) {
        throw new Error(
          data.message || `Error ${response.status}: Something went wrong!`
        );
      }

      setSuccess("Registration successful!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* Container */}
      <div className="flex w-full max-w-4xl bg-white rounded-xl overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-[#21B1E6]  to-[#4CC1EB] p-10 text-white relative">
          <div className="absolute -bottom-10 -left-1 w-3/4 h-full flex justify-center items-center">
            <Image
              src="/decoration.png"
              alt="Decorative Element"
              layout="intrinsic"
              width={350}
              height={350}
              className="absolute z-10 opacity-90"
            />
          </div>

          <div
            className="bg-white w-full h-full rounded-xl border z-20 border-white bg-opacity-10 bg-clip-padding"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <h2 className="text-2xl font-semibold text-white px-6 pt-2">
              Join Us Today - Unlock Opportunities, Build Your Network, and
              Learn New Skills
            </h2>
            <div className="absolute bottom-0 right-0">
              <Image
                src="/login-img.png"
                alt="Background Design"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>

        {/* Right Section - Sign Up Form */}
        <div className="w-full md:w-1/2 p-10 ">
          <div className="text-center">
            <Image
              src="/andishi-logo.png"
              alt="Andishi Logo"
              width={80}
              height={80}
              className="mx-auto rounded-full"
            />
            <h2 className="text-xl font-semibold text-[#0D1216] mt-2">
              Create Your Andishi Account
            </h2>
          </div>

          {/* Success/Error Messages */}
          {error && <p className="text-red-600 text-center">{error}</p>}
          {success && <p className="text-green-600 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-nunito">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-[12px]">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-black bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                  placeholder="Enter First Name"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-[12px]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-black bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                  placeholder="Enter Last Name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-[12px]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-black bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-[12px]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-black bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                placeholder="Enter Phone Number"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-[12px]">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-black rounded-lg bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                placeholder="Create Password"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-[12px]">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black border rounded-lg bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                placeholder="Confirm Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#21B1E6] hover:bg-blue-800 text-[#0D1216] hover:text-white font-bold text-[16px] px-8 py-4 rounded-full transition"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 text-center border-t pt-4">
            <p className="mt-4 text-[12px] text-[#0D1216]">
              Already have an account?{" "}
              <a href="/auth/login" className="font-semibold text-[#21B1E6]">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

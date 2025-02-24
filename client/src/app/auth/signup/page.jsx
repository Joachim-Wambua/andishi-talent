import React from "react";
import Image from "next/image";

const SignUp = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* Container */}
      <div className="flex w-full max-w-4xl bg-white rounded-xl overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-[#21B1E6]  to-[#4CC1EB] p-10 text-white relative">
          {/* Decoration Image */}
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
          <div className="text-center ">
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

          <form className="mt-6 space-y-4 font-nunito">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-[12px]">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-[12px]">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-[12px]">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-[12px]">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                placeholder="Enter Phone Number"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-[12px]">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                placeholder="Create Password"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-[12px]">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                placeholder="Confirm Password"
              />
            </div>
            <button className="w-full bg-[#21B1E6] hover:bg-blue-800 text-[#0D1216] hover:text-white font-bold text-[16px] px-8 py-4 rounded-full transition">
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center border-t pt-4">
            <button className="w-full flex items-center justify-center gap-2 bg-[#21B1E6] hover:bg-blue-800 text-[#0D1216] hover:text-white font-bold text-[16px] px-8 py-4 rounded-full transition">
              <Image
                src="/google-icon.png"
                alt="Google"
                width={20}
                height={20}
              />
              <span className="font-nunito ">Sign up with Google</span>
            </button>
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

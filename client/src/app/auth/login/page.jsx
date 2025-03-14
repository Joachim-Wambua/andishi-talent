"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      console.log("Login successful:", data);
      // Handle success: Redirect user or store token in state
      localStorage.setItem("user", JSON.stringify(data.data.user)); // Store user data
      setSuccess("Login successful!");
      setFormData({
        email: "",
        password: "",
      });
      // Redirect based on role
      window.location.href =
        data.data.user.role === "admin"
          ? "/dashboard/admin"
          : "/dashboard/student";
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
          {/* Decoration Image */}
          <div className="absolute -bottom-10 -left-1 w-3/4 h-full flex justify-center items-center">
            <Image
              src="/decoration.png"
              alt="Decorative Element"
              layout="intrinsic"
              width={350}
              height={350}
              className="absolute z-10 opacity-90" // Ensures it's above gradient but below glass
            />
          </div>

          <div
            className="bg-white w-full h-full rounded-xl border z-20 border-white bg-opacity-10 bg-clip-padding"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <h2 className="text-2xl font-semibold text-white px-6 pt-2">
              Learn, Build, Launch - Gain Practical Skills, Work on Real
              Projects, and Master the Latest Tech
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

        {/* Right Section - Login Form */}
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
              Welcome To Andishi
            </h2>
          </div>

          {/* Success/Error Messages */}
          {error && <p className="text-red-600 text-center">{error}</p>}
          {success && <p className="text-green-600 text-center">{success}</p>}

          <form className="mt-6 space-y-4 font-nunito" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-[12px]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border text-black rounded-lg bg-[#E2E9EE] focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                placeholder="Enter Email Address"
                onChange={handleChange}
                value={formData.email}
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
                className="w-full px-4 py-2 text-black border bg-[#E2E9EE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21B1E6]"
                placeholder="Enter Password"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex">
                <input type="checkbox" id="remember" className="mr-1" />
                <label htmlFor="remember" className="text-gray-700 text-[12px]">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-[#21B1E6] text-[12px]">
                Forgot password?
              </a>
            </div>
            <button
              className="w-full bg-[#21B1E6] hover:bg-blue-800 text-[#0D1216] hover:text-white font-bold text-[16px] px-8 py-4 rounded-full transition"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
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
              <span className="font-nunito ">Or Sign in with Google</span>
            </button>
            <p className="mt-4 text-[12px] text-[#0D1216]">
              Don't have an account?{" "}
              <a href="/auth/signup" className="font-semibold text-[#21B1E6]">
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;

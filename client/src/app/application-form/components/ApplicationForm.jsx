"use client";
import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    dob: "",
    phone: "",
    gender: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section className="min-h-screen flex flex-col items-center w-full bg-white">
      <div className="flex flex-col items-center justify-center w-3/4 rounded-xl my-8 p-8 bg-[#A8E1F5] bg-opacity-50">
        <h1 className="text-2xl text-center text-[#0D1216] font-semibold mb-4">
          Application Form
        </h1>
        <p className="text-center bg-white p-3 w-1/2 rounded-xl font-nunito text-[16px] text-gray-600 mb-6">
          Note: We value your privacy. The information you enter in the form is
          securely recorded to help us serve you better.
        </p>
        <form onSubmit={handleSubmit} className="font-nunito space-y-10">
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 p-3 rounded-lg border text-[#314453] placeholder-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="secondName"
              placeholder="Second Name"
              value={formData.secondName}
              onChange={handleChange}
              className="flex-1 p-3 rounded-lg border text-[#314453] placeholder-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border my-4 text-[#314453] placeholder-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border my-4 text-[#314453] placeholder-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border text-[#314453] placeholder-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border my-4 text-[#314453] placeholder-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border text-[#314453] placeholder-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Where are you from</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Kiambu">Kiambu</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Other">Other</option>
          </select>
          <div className="flex justify-between w-full" >
            <div className="flex flex-col items-start justify-between mt-6">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-[#21B1E6] h-2.5 rounded-full w-1/2"></div>
              </div>
              <span className="text-[#0D1216]">Page 1 of 2</span>
            </div>
            <button
              type="submit"
              className="w-1/5 bg-[#21B1E6] rounded-full hover:bg-blue-600 text-white font-semibold py-3 mt-4"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;

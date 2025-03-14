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
    courseInterest: "",
    skillLevel: "",
    primaryGoal: "",
    startDate: "",
    learningSchedule: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/applications/submit-application`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Application Sent Successfully!");
        setFormData({
          firstName: "",
          secondName: "",
          email: "",
          dob: "",
          phone: "",
          gender: "",
          location: "",
          courseInterest: "",
          skillLevel: "",
          primaryGoal: "",
          startDate: "",
          learningSchedule: "",
        });
      } else {
        alert(`Failed to send Application: ${data.message}`);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("Error submitting application form:", error);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentPage(2);
  };
  const handleBack = (e) => {
    e.preventDefault();
    setCurrentPage(1);
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
          {currentPage === 1 && (
            <>
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
            </>
          )}

          {currentPage === 2 && (
            <>
              <select
                name="courseInterest"
                value={formData.courseInterest}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border text-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">
                  Which course are you most interested in?
                </option>
                <option value="Fullstack Web Development">
                  Fullstack Web Development
                </option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="AI & Machine Learning">
                  AI & Machine Learning
                </option>
                <option value="Blockchain Development">
                  Blockchain Development
                </option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
              <select
                name="skillLevel"
                value={formData.skillLevel}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border text-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">
                  What’s your current skill level in tech?
                </option>
                <option value="Beginner">Beginner (No prior experience)</option>
                <option value="Intermediate">
                  Intermediate (Some knowledge, but not confident)
                </option>
                <option value="Advanced">
                  Advanced (I have experience, but want to specialize)
                </option>
              </select>
              <select
                name="primaryGoal"
                value={formData.primaryGoal}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border text-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">
                  What’s your primary goal for joining Andishi Academy?
                </option>
                <option value="Start a career in tech">
                  Start a career in tech
                </option>
                <option value="Upskill for my current job">
                  Upskill for my current job
                </option>
                <option value="Build my own tech projects">
                  Build my own tech projects
                </option>
                <option value="Explore tech as a hobby">
                  Explore tech as a hobby
                </option>
              </select>
              <select
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border text-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">
                  When are you looking to start your tech journey?
                </option>
                <option value="Immediately">Immediately (March Intake)</option>
                <option value="May Intake">May Intake</option>
                <option value="September Intake">September Intake</option>
              </select>
              <select
                name="learningSchedule"
                value={formData.learningSchedule}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border text-[#314453] bg-transparent border-[#53738D] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">
                  What’s your preferred learning schedule?
                </option>
                <option value="Weekdays (Morning)">Weekdays (Morning)</option>
                <option value="Weekdays (Evening)">Weekdays (Evening)</option>
                <option value="Weekends">Weekends</option>
                <option value="Flexible">
                  Flexible (I can adjust to any schedule)
                </option>
              </select>
            </>
          )}

          <div className="flex justify-between w-full">
            <div className="flex flex-col items-start justify-between mt-6">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`bg-[#21B1E6] h-2.5 rounded-full ${
                    currentPage === 1 ? "w-1/2" : "w-full"
                  }`}
                ></div>
              </div>
              <span className="text-[#0D1216]">Page {currentPage} of 2</span>
            </div>
            <div className="flex w-1/2 gap-4">
              {currentPage === 2 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/2 bg-gray-400 rounded-full hover:bg-gray-500 text-white font-semibold py-3 mt-4"
                >
                  Back
                </button>
              )}
              {currentPage === 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-[#21B1E6] rounded-full hover:bg-blue-600 text-white font-semibold py-3 mt-4"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-1/2 bg-green-500 rounded-full hover:bg-green-600 text-white font-semibold py-3 mt-4"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;

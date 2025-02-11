"use client";

import { useState } from "react";
import Navbar from "./(home)/Navbar";
import Hero from "./(home)/Hero";
import MissionStatement from "./(home)/MissionStatement";
import Footer from "./(home)/Footer";
import CourseCarousel from "./(home)/CourseCarousel";
import ValueProposition from "./(home)/ValueProposition";

export default function Home() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <div className="min-h-screen flex flex-col bg-[#001014] text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Mission Statement */}
        <MissionStatement />

        {/* Course Carousel */}
        <CourseCarousel />

        {/* Why Us */}
        <ValueProposition />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

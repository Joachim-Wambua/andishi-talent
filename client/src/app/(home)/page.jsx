"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import MissionStatement from "./MissionStatement";
import Footer from "./Footer";
import CourseCarousel from "./CourseCarousel";
import ValueProposition from "./ValueProposition";


export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
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

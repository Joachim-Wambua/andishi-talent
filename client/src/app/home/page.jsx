"use client";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import MissionStatement from "./components/MissionStatement";
import Footer from "../../components/Footer";
import CourseCarousel from "./components/CourseCarousel";
import ValueProposition from "./components/ValueProposition";
import TestimonialCarousel from "./components/TestimonialCarousel";
import GraduatesLogos from "./components/GraduatesLogos";
import CallToAction from "./components/CallToAction";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          header="Transform Your Future with Practical Tech Skills"
          description="Learn from industry experts, work on real-world projects, and build
          skills that matter. Join a thriving community of innovators and problem-solvers"
          buttonText="Apply Now"
        />

        {/* Mission Statement */}
        <MissionStatement />

        {/* Course Carousel */}
        <CourseCarousel />

        {/* Why Us */}
        <ValueProposition />

        {/* Testimonials */}
        <TestimonialCarousel />

        {/* Where Graduates Work */}
        <GraduatesLogos />

        {/* Call to Action */}
        <CallToAction
          title="Join Us"
          description="Build Your Tech Skills, Shape Your Future, and Secure Your Career in
          Tech. Master a new tech skill and open doors to endless opportunities"
          buttonText="Get Started"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

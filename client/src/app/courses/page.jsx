import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import IntroductoryCourses from "./components/IntroductoryCourses";
import CoreCourses from "./components/CoreCourses";
import SpecializedCourses from "./components/SpecializedCourses";
import ProgramStructure from "./components/ProgramStructure";

const Courses = () => {
  return (
    <section className="bg-white h-screen w-full">
      <div className="text-black">
        <Navbar />
        <Hero
          header="Master Technical Skills with a Wide Range of In-Depth Courses"
          description="From foundational programming to advanced specializations, our courses are designed to make you job-ready."
          buttonText="Explore Courses"
          buttonLink="/courses"
        />
        <IntroductoryCourses />
        <CoreCourses />
        <SpecializedCourses />
        <ProgramStructure />
        <Footer />
      </div>
    </section>
  );
};

export default Courses;

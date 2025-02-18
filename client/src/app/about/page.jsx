import React from "react";
import Navbar from "../home/Navbar";
import Hero from "../home/Hero";
import MissionStatement from "../home/MissionStatement";
import Footer from "../home/Footer";
import AboutAndishi from "./components/AboutAndishi";
import Mentors from "./components/Mentors";
import Values from "./components/Values";
import Events from "./components/Events";
import CallToAction from "../home/CallToAction";
import FAQ from "./components/FAQ";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col bg-white ">
      <div className="text-black">
        <Navbar />
        <Hero
          header="Empowering the Future of Tech"
          description="At Andishi Academy, we strive to be a leading hub for transformative tech education, equipping individuals with practical skills, hands-on experience, and expert mentorship to shape the future of technology."
          buttonText="Join Us"
          // imgURL="https://res.cloudinary.com/dltjv8zbh/image/upload/v1739530001/Mission_Statement_cmhoii.png"
        />
        <MissionStatement />
        <AboutAndishi />
        <Mentors />
        <Values />
        <Events />
        <CallToAction
          title="Join Us"
          description="Discover open roles and internship opportunities at Andishi Academy. Take the next step in your tech journey and grow with us."
          buttonText="Explore Open Opportunities"
        />
        <FAQ />
        <Footer />
      </div>
    </section>
  );
};

export default About;

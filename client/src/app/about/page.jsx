import React from "react";
import Navbar from "../home/Navbar";
import Hero from "../home/Hero";
import MissionStatement from "../home/MissionStatement";
import Footer from "../home/Footer";

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
        <Footer />
      </div>
    </section>
  );
};

export default About;

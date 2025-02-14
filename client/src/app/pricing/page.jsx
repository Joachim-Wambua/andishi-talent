import React from "react";
import Navbar from "../home/Navbar";
import Hero from '../home/Hero'
import Footer from "../home/Footer";

const Pricing = ({}) => {
  return (
    <section className="bg-white h-screen w-full">
      <div className="text-black">
        <Navbar />
        <Hero header="Pricing" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo
          velit. Sed non lectus auctor, dictum ipsum vitae, pharetra dui.
          Aliquam erat volutpat. Donec ullamcorper libero at urna feugiat, ac
          consectetur tellus tristique." />
        <Footer />
      </div>
    </section>
  );
};

export default Pricing;

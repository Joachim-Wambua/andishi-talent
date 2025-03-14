import React from "react";
import Navbar from "../../../components/Navbar";
import Hero from "../../../components/Hero";
import Footer from "../../../components/Footer";
import PricingHero from "./components/PricingHero";

const Pricing = ({}) => {
  return (
    <section className="bg-white h-screen w-full">
      <div className="text-black">
        <Navbar />
        <PricingHero />
        <Footer />
      </div>
    </section>
  );
};

export default Pricing;

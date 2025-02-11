"use client";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import MissionStatement from "./MissionStatement";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MissionStatement />
      </main>
      <Footer />
    </div>
  );
}

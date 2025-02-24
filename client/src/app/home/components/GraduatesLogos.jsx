"use client";
import React from "react";
import { logos } from "@/constants";

import Image from "next/image";

const GraduatesLogos = () => {
  return (
    <section className="w-full py-12 bg-radial-gradient bg-white">
      <h2 className="text-center text-3xl font-semibold text-gray-900 mb-10">
        Where Our Graduates Work
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 max-w-5xl mx-auto">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140} 
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GraduatesLogos;

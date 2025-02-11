"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#001014] text-gray-900 dark:text-white px-6">
      <Image
        src="/andishi-logo.png" // Replace with an actual under-construction icon/image
        alt="Under Construction"
        width={150}
        height={150}
        className="mb-6"
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-center">
        🚧 We're Under Construction 🚧
      </h1>

      <p className="text-lg text-center mt-2">
        Something exciting is coming soon! Stay tuned.
      </p>

      <div className="mt-6">
        <div className="w-10 h-10 border-4 border-dashed border-gray-500 rounded-full animate-spin"></div>
      </div>

      <footer className="absolute bottom-6 text-sm text-gray-600 dark:text-gray-400">
        &copy; {year} Andishi Talent. All rights reserved.
      </footer>
    </div>
  );
}

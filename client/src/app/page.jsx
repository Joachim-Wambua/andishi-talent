"use client";

import { useState } from "react";
import Homepage from "./(home)/page";

export default function Home() {
  const [year] = useState(() => new Date().getFullYear());

  return <Homepage />;
}

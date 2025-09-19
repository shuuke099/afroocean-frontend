"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function RealEstateHero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]); // slow scroll effect

  return (
    <section
      className="relative h-[30vh] w-full flex items-center justify-center text-center
             bg-cover bg-no-repeat bg-bottom mb-10"
      style={{ backgroundImage: "url('/real-state.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-20 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2 drop-shadow-lg">
          Find Your Dream Home
        </h1>
        <p className="text-sm sm:text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
          Buy, rent, or invest with{" "}
          <span className="text-accent font-semibold">AfroOcean</span> Real
          Estate
        </p>
      </div>
    </section>
  );
}

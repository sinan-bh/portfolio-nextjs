"use client";

import React, { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./menu/menu";

export default function SpotlightPreview() {
  const titles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Cycle through titles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden px-4">
      {/* Spotlight background, hidden on small screens */}
      <Spotlight
        className="hidden md:block -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-4xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hi, I am Sinan
        </h1>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={titles[currentIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {titles[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
        <Menu />
      </div>
    </div>
  );
}

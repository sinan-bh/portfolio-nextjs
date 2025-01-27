"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skills } from "@/lib/skills";
import Image from "next/image";

export default function TechnologyStack() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Unique heading */}
      <div className="px-4 text-2xl md:text-5xl font-bold leading-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Technology Stack
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center px-4 py-8">
        {skills.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-r from-purple-900 to-gray-900 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-800 hover:to-gray-700"
            data-aos="fade-up" // AOS animation effect
            data-aos-delay={index * 100} // Delay for each card
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={40}
              height={40}
              className="w-16 h-16 object-contain mb-4"
            />
            <div className="text-xl font-medium text-center">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

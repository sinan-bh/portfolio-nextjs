"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/skills";

// Variants for each card animation


const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1, // Delay for each child (card) animation
      delayChildren: 0.2, // Slight delay before the first card animates
    },
  },
};

export default function Technology() {
  return (
    <div className="min-h-screen">
      <div>
        <div className="px-4 text-2xl md:text-5xl font-bold leading-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Technology Stack
        </div>
      </div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center px-4 py-8"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {skills.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-r from-purple-900 to-gray-900 text-white shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <motion.img
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 object-contain mb-4"
              whileHover="hover"
            />
            <motion.div
              className="text-xl font-medium text-center"
              whileHover="hover"
            >
              {tech.name}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

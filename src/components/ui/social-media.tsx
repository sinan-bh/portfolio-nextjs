"use client";

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion

const iconVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

export default function SocialMedia({ className }: { className: string }) {
  return (
    <div className={className}>
      <motion.div
        className="cursor-pointer"
        variants={iconVariants}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.9 }}
      >
        <FaInstagram className="text-pink-500" size={30} />
      </motion.div>
      <motion.div
        className="cursor-pointer"
        variants={iconVariants}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.9 }}
      >
        <FaGithub size={30} />
      </motion.div>
      <motion.div
        className="cursor-pointer"
        variants={iconVariants}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.9 }}
      >
        <FaLinkedin className="text-blue-500" size={30} />
      </motion.div>
    </div>
  );
}

"use client";

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"; // Import framer-motion
import Link from "next/link";

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
      <Link href="https://www.instagram.com/_s_ina_n._/">
        <motion.div
          className="cursor-pointer flex items-center justify-center"
          variants={iconVariants}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram className="text-pink-500" size={30} />
        </motion.div>
      </Link>
      <Link href="https://github.com/sinan-bh">
        <motion.div
          className="cursor-pointer"
          variants={iconVariants}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub size={30} />
        </motion.div>
      </Link>
      <Link href="https://www.linkedin.com/in/sinanbh/">
        <motion.div
          className="cursor-pointer"
          variants={iconVariants}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className="text-blue-500" size={30} />
        </motion.div>
      </Link>
      <Link href="mailto:sinanbh9605@gmail.com">
        <motion.div
          className="cursor-pointer"
          variants={iconVariants}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.9 }}
        >
          <MdEmail className="text-red-500" size={30} />
        </motion.div>
      </Link>
    </div>
  );
}

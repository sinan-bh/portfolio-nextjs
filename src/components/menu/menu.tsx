"use client";

import React from "react";
import { motion } from "framer-motion";

type MenuItem = {
  label: string;
  link: string;
};

const navbarArr: MenuItem[] = [
  { label: "About", link: "#about" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
];

export default function Menu() {
  return (
    <div>
      <div className="flex justify-center gap-4 pt-3">
        {navbarArr.map((item, index) => (
          <motion.div
            key={index}
            className="border-2 border-white shadow-md p-3 rounded-md text-center cursor-pointer"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
              borderColor: "#cccccc",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <a href={item.link} className="text-white">
              {item.label}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

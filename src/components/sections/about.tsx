"use client";

import Image from "next/image";
import SocialMedia from "../ui/social-media";
import { motion } from "framer-motion";

export default function About() {
  const imageVariants = {
    initial: { opacity: 0, scale: 0.8, x: -100 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  };

  const socialMediaVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  };

  return (
    <div
      id="about"
      className="bg-black text-white h-screen flex items-center justify-center"
    >
      <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Image */}
        <motion.div
          className="relative"
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }} // Animation triggers when 50% of the section is visible
        >
          <Image
            src="/me/profile.jpg" // Replace with your image path
            alt="Matt Cannon"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>

        {/* Right Section - Content */}
        <div className="flex flex-col justify-center max-w-sm sm:max-w-full">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            I’m Sinan
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-light mt-4"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            a Passionate Web Developer
          </motion.p>
          <motion.p
            className="text-sm md:text-base text-gray-400 mt-4 leading-relaxed"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            I am a web developer specializing in React.js, Next.js, TypeScript,
            Tailwind CSS, Node.js, Express, and MongoDB. I craft clean,
            responsive, and user-focused web applications, delivering efficient
            and modern solutions tailored to client needs.
          </motion.p>

          <div className="mt-6">
            <motion.div
              className="text-white py-2 rounded-lg text-lg font-medium"
              variants={textVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              Get in touch
            </motion.div>
            <motion.div
              variants={socialMediaVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              <SocialMedia className="flex gap-4 py-4" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

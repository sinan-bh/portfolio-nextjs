"use client";

import { projects } from "@/lib/projects";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  return (
    <div id="projects" className="p-6 mt-4">
      <div className="text-2xl md:text-5xl font-bold leading-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Projects
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-8 mt-8 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl shadow-lg overflow-hidden transform transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 20px rgba(255, 255, 255, 0.3)",
            }}
          >
            <div className="relative h-48 w-full">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-neutral-700 text-neutral-300">
                  No Image Available
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-neutral-50">
                {project.name}
              </h3>
              <p className="text-neutral-400 mt-2 text-sm">
                {project.description}
              </p>
              <div className="mt-4 flex justify-between">
                <Link
                  href={project.link.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  GitHub
                </Link>
                <Link
                  href={project.link.live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
